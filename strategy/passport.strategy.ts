import { Strategy as LocalStrategy } from "passport-local";
import * as argon2 from "argon2";
import * as jwt from "jsonwebtoken";

import { validationCheck } from "@/misc/functions/validation";
import { ErrorObject } from "@/misc/interfaces/errorObject";
import { AppDataSource } from "@/db/data-source";
import { User } from "@/entities/user.entity";
import { LoginDto } from "@/dto/auth/login.dto";
import { RegisterDto } from "@/dto/auth/register.dto";

const userRepository = AppDataSource.getRepository(User)

export default function (passport) {
    passport.use(
        "login",
        new LocalStrategy(
            {
                usernameField: "username",
                passwordField: "password",
                passReqToCallback: true
            },
            async (req, takenUsername, takenPassword, done) => {
                try {
                    const loginData = new LoginDto()
                    loginData.username = takenUsername
                    loginData.password = takenPassword

                    const dataCheck = await validationCheck<LoginDto>(loginData) as LoginDto

                    if (!dataCheck.username) {
                        done((dataCheck as unknown as ErrorObject).errors, false);
                    }

                    const userRepository = AppDataSource.getRepository(User)

                    const user = await userRepository.findOneBy({ username: takenUsername });
                    if (!user) return done(null, false);

                    const isMatch = await argon2.verify(user.password, takenPassword);
                    if (!isMatch) return done(null, false);

                    user.lastLoginDate = new Date()
                    user.ipAddress = req.ip
                    const { password, previousPassword, ...data } = user
                    await userRepository.update({ id: user.id }, data)

                    return done(null, jwt.sign({
                        id: user.id,
                        username: user.username
                    }, process.env.JWT_SECRET as string, { expiresIn: "1h" }));
                } catch (error) {
                    return done(error, false);
                }
            }
        )
    );
    // REGISTER
    passport.use(
        "register",
        new LocalStrategy(
            {
                usernameField: "username",
                passwordField: "password",
                passReqToCallback: true
            },
            async (req, takenUsername, takenPassword, done) => {
                try {
                    const registerData = new RegisterDto()
                    registerData.username = takenUsername
                    registerData.password = takenPassword
                    registerData.confirmPassword = req.body.confirmPassword

                    const dataCheck = await validationCheck<RegisterDto>(registerData) as RegisterDto

                    if (!dataCheck.username) {
                        done((dataCheck as unknown as ErrorObject).errors, false);
                    }

                    const user = await userRepository.findOneBy({ username: registerData.username });

                    if (user?.username) {
                        done({ errors: ["This username was already used by someone."] }, false)
                    }

                    await userRepository.save(userRepository.create({
                        username: takenUsername,
                        password: takenPassword,
                    }))

                    return done(null, { success: true });
                } catch (error) {
                    return done(error, false);
                }
            }
        )
    );
};
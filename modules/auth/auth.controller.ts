import * as express from "express";
import * as passport from "passport";
import {Request, Response, NextFunction} from "express";

const router = express.Router()

router.post(
  "/login",
  passport.authenticate("login", {session: false}),
  (req: Request, res: Response, next: NextFunction) => {
    res.json({token: req.user});
  }
);

router.post(
  "/register",
  passport.authenticate("register", {session: false}),
  (req: Request, res: Response, next: NextFunction) => {
    res.json({ success: true });
  }
);

router.get("/me", async (req: Request, res: Response, next: NextFunction) => {
  res.json(req.user)
});

export default router;
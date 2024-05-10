import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { PropulsionType } from "./propulsionType.entity";
import {Product} from "@/entities/product.entity";

@Entity()
export class Propulsion {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: String, unique: true, nullable: false })
    name: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @OneToMany(() => PropulsionType, (type) => type.propulsion)
    types: PropulsionType[]

    @OneToMany(() => Product, (product) => product.propulsion)
    products: Product[]
}
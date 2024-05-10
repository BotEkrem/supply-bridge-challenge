import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Maker } from "./maker.entity";
import { Model } from "./model.entity";
import {Product} from "@/entities/product.entity";

@Entity()
export class Brand {
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

    @OneToMany(() => Maker, (maker) => maker.brand)
    makers: Maker[]

    @OneToMany(() => Model, (model) => model.brand)
    models: Model[]

    @OneToMany(() => Product, (product) => product.brand)
    products: Product[]
}
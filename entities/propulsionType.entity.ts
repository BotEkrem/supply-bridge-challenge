import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    ManyToOne,
    OneToMany
} from "typeorm";
import { Propulsion } from "./propulsion.entity";
import {Product} from "@/entities/product.entity";

@Entity()
export class PropulsionType {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: String, nullable: false })
    name: string;

    @ManyToOne(() => Propulsion, (propulsion) => propulsion.types)
    propulsion: Propulsion

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @OneToMany(() => Product, (product) => product.propulsionType)
    products: Product[]
}
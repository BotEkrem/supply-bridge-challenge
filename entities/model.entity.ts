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
import { Brand } from "./brand.entity";
import {Product} from "@/entities/product.entity";

@Entity()
export class Model {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: String, nullable: false })
    name: string;

    @ManyToOne(() => Brand, (brand) => brand.models)
    brand: Brand

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @OneToMany(() => Product, (product) => product.model)
    products: Product[]
}
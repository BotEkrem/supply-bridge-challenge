import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Product} from "@/entities/product.entity";

@Entity()
export class ProductionRegion {
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

    @OneToMany(() => Product, (product) => product.productionRegion)
    products: Product[]
}
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
export class Supplier {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: String, nullable: false })
    shortName: string;

    @Column({ type: String, nullable: false })
    longName: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @OneToMany(() => Product, (product) => product.supplier)
    products: Product[]
}
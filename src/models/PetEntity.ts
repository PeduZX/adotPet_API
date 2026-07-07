import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import EnumEspecie from "../enum/EnumEspecie";

@Entity()
export default class PetEntity {
    @PrimaryGeneratedColumn()
    id!: number; // Só para o TypeORM confiar e não reclamar de um construtor
    @Column()
    nome!: string;
    @Column()
    especie!: EnumEspecie;
    @Column()
    dataNascimento!: Date;
    @Column()
    adotado!: boolean;
}
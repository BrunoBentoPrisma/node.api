import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cliente {

  @PrimaryGeneratedColumn()
  Id: number,
  Nome: string;
  Senha: string;
}

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('doctor')
export class Doctor {

    @PrimaryGeneratedColumn()
    public id: string;

    @Column({length: 120})
    public name: string;

    @Column()
    public crm: number;

    @Column()
    public telephone: number;

    @Column()
    public cellphone: number;

    @Column({length: 9})
    public zipcode: number;

    @Column()
    public speciality: string;
}

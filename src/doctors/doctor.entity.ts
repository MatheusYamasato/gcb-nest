import { Speciality } from "src/specialities/speciality.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";


@Entity('doctor')
export class Doctor {

    @PrimaryGeneratedColumn()
    public id: number;

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

    @CreateDateColumn()
    public createdAt: Date;

    @UpdateDateColumn()
    public updatedAt: Date;

    @OneToMany(type => Speciality, speciality => speciality.doctor)
    public speciality: Speciality[];
}

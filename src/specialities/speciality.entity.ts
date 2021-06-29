import { Doctor } from "src/doctors/doctor.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('speciality')
export class Speciality {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public speciality: string;

    @ManyToOne(type => Doctor, specialities => Speciality)
    public doctor: Doctor;
}

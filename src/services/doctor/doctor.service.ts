import { Injectable } from '@nestjs/common';
import { Doctor } from 'src/doctors/doctor';
import {v4 as uuid} from 'uuid';

@Injectable()
export class DoctorService {
    private doctors: Doctor[] = [];
 
    public getAll(): Doctor[] {
        return this.doctors;
    }
 
    public get(id: string): Doctor {
        const doctor = this.doctors.find(p => p.id === id);
        return doctor;
    }
 
    public create(doctor: Doctor): string {
        try {
            if (doctor.id === undefined) {
                doctor.id = uuid();
            }
            this.doctors.push(doctor);
            return doctor.id;
        } catch {
            return "";
        }
    }
 
    public update(id: string, doctor: Doctor): boolean {
        if (id !== doctor.id) {
            return false;
        }
    }
 
    // Adicionar o metodo de soft delete
}

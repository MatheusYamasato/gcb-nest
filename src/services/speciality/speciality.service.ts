import { Injectable } from '@nestjs/common';
import { Speciality } from 'src/specialities/speciality';
import {v4 as uuid} from 'uuid';

@Injectable()
export class SpecialityService {
    private specialities: Speciality[] = [];
    
    public getAll(): Speciality[] {
        return this.specialities;
    }

    public create(speciality: Speciality): string {
        try {
            if (speciality.id === undefined) {
                speciality.id = uuid();
            }
            this.specialities.push(speciality);
            return speciality.id;
        } catch {
            return "";
        }
    }

}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Doctor } from 'src/doctors/doctor.entity';
import { Repository } from 'typeorm';

interface IDoctor {
    id: number;
    name: string;
    crm: number;
    telephone: number;
    cellphone: number;
    zipcode: number;
}

@Injectable()
export class DoctorService {

    constructor(@InjectRepository(Doctor) private readonly repository: Repository<Doctor>) {}
 
    public async getAll(): Promise<Doctor[]> {
        return await this.repository.find();
    }
 
    public async get(id: number): Promise<Doctor> {
        return this.repository.findOne(id)
    }
 
    public async create(entity: IDoctor): Promise<number>  {
        return await this.repository.insert(entity)
            .then(d => {
                return d.identifiers[0] as any as number;
            }, (err) => {
                return 0
        }   )
    }
 
    public async update(id: number, entity: IDoctor): Promise<boolean> {
        if (id !== entity.id) {
            return false;
        }

        await this.repository.update(id, entity)
        return true
    }
 
    // Adicionar o metodo de soft delete
}

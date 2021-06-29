import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Speciality } from 'src/specialities/speciality.entity';
import { Repository } from 'typeorm';

interface ISpeciality {
    id: number;
    speciality: string;
}

@Injectable()
export class SpecialityService {

    constructor(@InjectRepository(Speciality) private readonly repository: Repository<Speciality>) {}
    
    public async getAll(): Promise<Speciality[]>  {
        return await this.repository.find();
    }

    public async get(id: number): Promise<Speciality> {
        return this.repository.findOne(id)
    }

    public async create(entity: ISpeciality): Promise<number> {
        return await this.repository.insert(entity)
            .then(f => {
                return f.identifiers[0] as any as number;
            }, err => {
                return 0;
        }   );
    }

    public async update(id: number, entity: ISpeciality): Promise<boolean> {
        if (id !== entity.id) {
            return false;
        }

        await this.repository.update(id, entity);
        return true;
    }
}

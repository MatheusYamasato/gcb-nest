import { Controller, Body, Post, Get, HttpException, HttpStatus, Param, Put } from '@nestjs/common';
import { SpecialityService } from 'src/services/speciality/speciality.service';

interface ISpeciality {
    id: number;
    speciality: string;
}

@Controller('specialities')
export class SpecialitiesController {
    constructor(private readonly specialityService: SpecialityService) {
    }
 
    // Adiciono um novo blog
    @Post()
    // @Body significa que vou pegar o objeto no corpo da requisição
    public async create(@Body() speciality: ISpeciality): Promise<number> {
        return await this.specialityService.create(speciality)
    }
 
    // Retorno todos os docs
    @Get()
    public async asyncgetAll(): Promise<ISpeciality[]> {
        return await this.specialityService.getAll();
    }

    @Get(':id')
    // @Param é o parâmetro passado no decorator do Get
    public async get(@Param('id') id: number): Promise<ISpeciality> {
        const result = await this.specialityService.get(id);
        if(!result) {
            throw new HttpException('Specialidade não encontrada', HttpStatus.NOT_FOUND)
        }
        return result
    }

    @Put(':id')
    // Aqui é enviado o nome do blog sendo alterado, e também o objeto com as alterações
    public async update(@Param('id') id: number, @Body() speciality: ISpeciality): Promise<boolean | void>  {
        return await this.specialityService.update(id, speciality);
    }
}

import { Controller, Get, Param, Post, Body, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { DoctorService } from 'src/services/doctor/doctor.service';

interface IDoctor {
    id: number;
    name: string;
    crm: number;
    telephone: number;
    cellphone: number;
    zipcode: number;
}

@Controller('doctors')
export class DoctorsController {
    constructor(private readonly doctorService: DoctorService) {
    }
 
    // Adiciono um novo blog
    @Post()
    // @Body significa que vou pegar o objeto no corpo da requisição
    public async create(@Body() doctor: IDoctor): Promise<number> {
        return await this.doctorService.create(doctor)
    }
 
    // Retorno todos os docs
    @Get()
    public async getAll(): Promise<IDoctor[]>  {
        return await this.doctorService.getAll();
    }
 
    // Retorno o doctor com o nome especificado
    @Get(':id')
    // @Param é o parâmetro passado no decorator do Get
    public async get(@Param('id') id: number): Promise<IDoctor> {
        const result = await this.doctorService.get(id);
        if(!result) {
            throw new HttpException('Doutor não encontrado', HttpStatus.NOT_FOUND)
        }
        return result
    }
 
    // Atualizo um blog existente
    @Put(':id')
    // Aqui é enviado o nome do blog sendo alterado, e também o objeto com as alterações
    public async update(@Param('id') id: number, @Body() doctor: IDoctor): Promise<boolean | void>  {
        return await this.doctorService.update(id, doctor);
    }
 
    // Implementar o soft delete
}
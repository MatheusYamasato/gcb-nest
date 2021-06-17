import { Controller, Get, Param, Post, Body, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { Doctor } from './doctor'
import { DoctorService } from 'src/services/doctor/doctor.service';

@Controller('doctors')
export class DoctorsController {
    constructor(private readonly doctorService: DoctorService) {
    }
 
    // Adiciono um novo blog
    @Post()
    // @Body significa que vou pegar o objeto no corpo da requisição
    public create(@Body() doctor: Doctor): string {
        const result = this.doctorService.create(doctor);
 
        if (result === "")
            throw new HttpException("Not Found", HttpStatus.NOT_FOUND);
 
        return result;
    }
 
    // Retorno todos os docs
    @Get()
    public getAll(): Doctor[] {
        return this.doctorService.getAll();
    }
 
    // Retorno o doctor com o nome especificado
    @Get(':id')
    // @Param é o parâmetro passado no decorator do Get
    public get(@Param('id') id: string): Doctor {
        return this.doctorService.get(id);
    }
 
    // Atualizo um blog existente
    @Put(':id')
    // Aqui é enviado o nome do blog sendo alterado, e também o objeto com as alterações
    public update(@Param('id') id: string, @Body() doctor: Doctor) {
        this.doctorService.update(id, doctor);
    }
 
    // Implementar o soft delete
}
import { Controller, Body, Post, Get, HttpException, HttpStatus } from '@nestjs/common';
import { SpecialityService } from 'src/services/speciality/speciality.service';
import { Speciality } from './speciality';

@Controller('specialities')
export class SpecialitiesController {
    constructor(private readonly specialityService: SpecialityService) {
    }
 
    // Adiciono um novo blog
    @Post()
    // @Body significa que vou pegar o objeto no corpo da requisição
    public create(@Body() speciality: Speciality): string {
        const result = this.specialityService.create(speciality);
 
        if (result === "")
            throw new HttpException("Not Found", HttpStatus.NOT_FOUND);
 
        return result;
    }
 
    // Retorno todos os docs
    @Get()
    public getAll(): Speciality[] {
        return this.specialityService.getAll();
    }
}

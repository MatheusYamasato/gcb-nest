import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpecialityService } from 'src/services/speciality/speciality.service';
import { SpecialitiesController } from './specialities.controller';
import { Speciality } from './speciality.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Speciality])],
    controllers: [SpecialitiesController],
    providers: [SpecialityService]
})
export class SpecialitiesModule {}

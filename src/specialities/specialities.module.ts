import { Module } from '@nestjs/common';
import { SpecialityService } from 'src/services/speciality/speciality.service';
import { SpecialitiesController } from './specialities.controller';

@Module({
    controllers: [SpecialitiesController],
    providers: [SpecialityService]
})
export class SpecialitiesModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorService } from 'src/services/doctor/doctor.service';
import { Doctor } from './doctor.entity';
import { DoctorsController } from './doctors.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Doctor])],
    controllers: [DoctorsController],
    providers: [DoctorService]
})
export class DoctorsModule {}

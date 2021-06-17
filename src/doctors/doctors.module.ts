import { Module } from '@nestjs/common';
import { DoctorService } from 'src/services/doctor/doctor.service';
import { DoctorsController } from './doctors.controller';

@Module({
    controllers: [DoctorsController],
    providers: [DoctorService]
})
export class DoctorsModule {}

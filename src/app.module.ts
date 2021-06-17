import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorsController } from './doctors/doctors.controller';
import { DoctorService } from './services/doctor/doctor.service';
import { DoctorsModule } from './doctors/doctors.module';
import { SpecialitiesController } from './specialities/specialities.controller';
import { SpecialityService } from './services/speciality/speciality.service';
import { SpecialitiesModule } from './specialities/specialities.module';

@Module({
  imports: [DoctorsModule, SpecialitiesModule, TypeOrmModule.forRoot()],
  controllers: [AppController, DoctorsController, SpecialitiesController],
  providers: [AppService, DoctorService, SpecialityService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorsController } from './doctors/doctors.controller';
import { DoctorService } from './services/doctor/doctor.service';
import { DoctorsModule } from './doctors/doctors.module';
import { SpecialitiesController } from './specialities/specialities.controller';
import { SpecialityService } from './services/speciality/speciality.service';
import { SpecialitiesModule } from './specialities/specialities.module';

@Module({
  imports: [DoctorsModule, SpecialitiesModule],
  controllers: [AppController, DoctorsController, SpecialitiesController],
  providers: [AppService, DoctorService, SpecialityService],
})
export class AppModule {}

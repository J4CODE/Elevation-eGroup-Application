import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentController } from './controller/student/student.controller';
import { StudentSchema } from './schema/student.schema';
import { StudentService } from './service/student/student.service';

// Used for egroups, users, students, etc.
@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://j4code:-4AND4mlWM076-@database-projects.evnhc.mongodb.net/?retryWrites=true&w=majority',{dbName: 'studentdb'}),
  MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }])],
  controllers: [AppController,StudentController],
  providers: [AppService,StudentService],
})
export class AppModule {}

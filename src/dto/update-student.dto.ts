import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-student.dto';
 
// Used for egroups, users, students, etc.
export class UpdateStudentDto extends PartialType(CreateStudentDto) {}
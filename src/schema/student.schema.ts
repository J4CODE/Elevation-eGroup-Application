import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

// Used for egroups, users, students, etc.
@Schema()
export class Student {

    @Prop()
    name: string;

    @Prop()
    roleNumber: number;

    @Prop()
    class: number;

    @Prop()
    gender: string;

    @Prop()
    marks: number;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
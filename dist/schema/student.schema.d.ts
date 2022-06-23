/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose" />
export declare class Student {
    name: string;
    roleNumber: number;
    class: number;
    gender: string;
    marks: number;
}
export declare const StudentSchema: import("mongoose").Schema<import("mongoose").Document<Student, any, any>, import("mongoose").Model<import("mongoose").Document<Student, any, any>, any, any, any>, {}, {}>;

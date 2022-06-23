import { Document } from 'mongoose';

// Used for egroups, users, students, etc.
export interface IStudent extends Document{
    readonly name: string;

    readonly roleNumber: number;

    readonly class: number;

    readonly gender: string;

    readonly marks: number;
}

import { Schema, model } from 'mongoose';
import { IUniversity } from '../../interface/university.interface';
import * as mongoose from 'mongoose';

export interface UniversityDocument extends mongoose.Document {
    "state-province"?: string;
    alpha_two_cod?: string;
    web_pages: string[];
    country: string;
    name: string;
    domains: string[]
}

const universitySchema = new Schema<IUniversity>({
    "state-province": String,
    alpha_two_cod: String,
    web_pages: { type: [String], required: true },
    country: { type: String, required: true },
    name: { type: String, required: true },
    domains: { type: [String], required: true },
});

const University = mongoose.model<UniversityDocument>('university', universitySchema);

export default University;
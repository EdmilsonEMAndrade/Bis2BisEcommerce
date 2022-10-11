import { Schema, model } from 'mongoose';
import IUniversity from '../interface/university.interface';

const universitySchema = new Schema<IUniversity>({
    "state-province": String,
    alpha_two_cod: { type: String, required: true },
    web_pages: { type: [String], required: true },
    country: { type: String, required: true },
    name: { type: String, required: true },
    domains: { type: [String], required: true },
});
  
const University = model<IUniversity>('University', universitySchema);

export default University;
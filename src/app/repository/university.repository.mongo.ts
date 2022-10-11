import IUniversity from '../interface/university.interface';
import { findOneAndUpdate } from './mongo/mongo.repository';
import UniversityRepository from "./university.repository.interface";

class UniversityRepositoryMongo implements UniversityRepository{

    async createUniversities(universities: IUniversity[]) {

        universities.forEach(async (university) => {
            await findOneAndUpdate('university',
            {
                name: university.name, 
                country: university.country,
                domains: university.domains
            },
            university
            )
        });
        
    }

}

export default new UniversityRepositoryMongo();
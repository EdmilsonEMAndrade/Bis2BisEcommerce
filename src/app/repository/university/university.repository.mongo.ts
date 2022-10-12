
import HttpMessage from "../../enum/HttpMessage.enum";
import HttpStatus from "../../enum/HttpStatus.enum";
import { createdUniversity, findAllUniversity, IUniversity } from "../../interface/university.interface";
import University from "../../schema/university/university.schema";
import { findOneAndUpdate } from "../mongo/mongo.repository";
import UniversityRepository from "./university.repository.interface";

class UniversityRepositoryMongo implements UniversityRepository{
    

    async createUniversities(universities: createdUniversity[]) {
        
        try{
            universities.forEach(async (university) => {
                await findOneAndUpdate('universities',
                {
                    name: university.name, 
                    country: university.country,
                    domains: university.domains
                },
                university
                )
            });
                
        }catch(error : any){
            throw {status: error?.status || HttpStatus.INTERNAL_SERVER_ERROR, message : error.message || HttpMessage.INTERNAL_SERVER_ERROR};
        }

    }

    async findUniversities(country:any, page:number){
        try {
            const filter = country? {
                country: country
            } : {}
            const universities : IUniversity[] = await University.find(filter).limit(20).skip(20*page);

            if(universities && universities.length > 0) return universities;
            
            throw {status: HttpStatus.NOT_FOUND, message: HttpMessage.NOT_FOUND};
        } catch (error:any) {
            throw {status: error?.status || HttpStatus.INTERNAL_SERVER_ERROR, message : error.message || HttpMessage.INTERNAL_SERVER_ERROR};
        }
    }

    async findUniversityById(id: string) {

        try{
            const university = await University.findById(id);
            
            if(university){
                return university;
            }
            
            throw {status: HttpStatus.NOT_FOUND, message: HttpMessage.NOT_FOUND};

        }catch(error: any){
            throw {status: error?.status || HttpStatus.INTERNAL_SERVER_ERROR, message : error.message || HttpMessage.INTERNAL_SERVER_ERROR};
        }

    }

}

export default new UniversityRepositoryMongo();
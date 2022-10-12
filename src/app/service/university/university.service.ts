import axios from 'axios';
import HttpMessage from '../../enum/HttpMessage.enum';
import HttpStatus from '../../enum/HttpStatus.enum';
import { createdUniversity, findAllUniversity, reformUniversityData } from '../../interface/university.interface';
import UniversityRepository from '../../repository/university/university.repository.interface';
import UniversityRepositoryMongo from '../../repository/university/university.repository.mongo';

class UniversityService{
    
    constructor(private repository : UniversityRepository){}

    async insertData(){
        try{
            const countries = [
                "argentina", "brazil", "chile", "colombia", "paraguai", "peru", "suriname", "uruguay"
            ]
            await countries.forEach(async (country) => {
                const { data } = await axios.get<createdUniversity[]>(`http://universities.hipolabs.com/search?country=${country}`);
                await this.repository.createUniversities(data);
            });
            return {
                status: HttpStatus.CREATED,
                message: HttpMessage.CREATED
            }
        }catch(e:any){
            return{
                status: e.status || HttpStatus.INTERNAL_SERVER_ERROR,
                message: e.message || HttpMessage.INTERNAL_SERVER_ERROR
            }
        }       
    }

    async createUniversity(university:createdUniversity){
        return await this.repository.createUniversity(university);
    }

    async findUniversities(country:any, page: number){
        const universities =  await this.repository.findUniversities(country, page);
        const result: findAllUniversity[] = [];
        universities.forEach((university: { [x: string]: any; _id: any; country: any; name: any; }) => {
            result.push({
                _id: university._id,
                country: university.country,
                name: university.name,
                "state-province": university['state-province']
            });
        });
        return result;
    }

    async findById(id:string){
        return await this.repository.findUniversityById(id);
    }

    async updateRegister(id: string , university: reformUniversityData){
        return await this.repository.findByIdAndUpdate(id, university);
    }

    async deleteRegister(id: string){
        return await this.repository.findByIdAndDelete(id);
    }
}

export default new UniversityService(new UniversityRepositoryMongo());



import axios from 'axios';
import HttpMessage from '../../enum/HttpMessage.enum';
import HttpStatus from '../../enum/HttpStatus.enum';
import { createdUniversity, findAllUniversity } from '../../interface/university.interface';
import universityRepositoryMongo from '../../repository/university/university.repository.mongo';

class UniversityService{

    async insertData(){
        try{
            const countries = [
                "argentina", "brazil", "chile", "colombia", "paraguai", "peru", "suriname", "uruguay"
            ]
            await countries.forEach(async (country) => {
                const { data } = await axios.get<createdUniversity[]>(`http://universities.hipolabs.com/search?country=${country}`);
                await universityRepositoryMongo.createUniversities(data);
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

    async findUniversities(country:any, page: number){
        const universities =  await universityRepositoryMongo.findUniversities(country, page);
        const result: findAllUniversity[] = [];
        universities.forEach(university => {
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
        return await universityRepositoryMongo.findUniversityById(id);
    }

}

export default new UniversityService();



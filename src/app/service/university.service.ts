import axios from 'axios';
import HttpMessage from '../enum/HttpMessage.enum';
import HttpStatus from '../enum/HttpStatus.enum';
import IUniversity from '../interface/university.interface';

class UniversityService{

    async inicializeDataBase(){
        try{
            const countries = [
                "argentina", "brasil", "chile", "colombia", "paraguai", "peru", "suriname", "uruguay"
            ]
            await countries.forEach(async (country) => {
                const { data, status } = await axios.get<IUniversity[]>(`http://universities.hipolabs.com/search?country=${country}`);
                console.log(data);
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

}

export default new UniversityService();



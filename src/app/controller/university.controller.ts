import { Request, Response } from 'express';
import HttpMessage from '../enum/HttpMessage.enum';
import HttpStatus from '../enum/HttpStatus.enum';
import universityService from '../service/university.service';

class UniversityController {
  async initializeUniversities(res : Response) { 
    try {
      const result = await universityService.insertData(); 
      return res.status(result.status).json({message : result.message});
    } catch (error : any) {
      return res
        .status(error.response.status || HttpStatus.BAD_REQUEST)
        .json({ error_message: error.response.data.message || HttpMessage.BAD_REQUEST});
    }
  }

}
  
  export default new UniversityController();
import { Request, Response } from 'express';
import HttpMessage from '../../enum/HttpMessage.enum';
import HttpStatus from '../../enum/HttpStatus.enum';
import universityService from '../../service/university/university.service';

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

  async findAllUniversities(req: Request, res : Response) { 
    try{
      const country = req.query?.country || null;
      const page = Number(req.query?.page) || 0;
      const result = await universityService.findUniversities(country,page);
      return res.status(HttpStatus.OK).json(result);
    } catch (error : any) {
      return res
        .status(error?.status || HttpStatus.BAD_REQUEST)
        .json({ error_message: error?.message || HttpMessage.BAD_REQUEST});
    }
  }

  async findById(req: Request, res : Response) { 
    try {
      const id = req.params.id;
      const result = await universityService.findById(id); 
      return res.status(HttpStatus.OK).json(result);
    } catch (error : any) {
      return res
        .status(error?.status || HttpStatus.BAD_REQUEST)
        .json({ error_message: error?.message || HttpMessage.BAD_REQUEST});
    }
  }

}
  
export default new UniversityController();
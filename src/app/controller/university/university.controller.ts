import { Request, Response } from 'express';
import * as yup from 'yup';
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

  async createUniversity(req: Request, res : Response){
    try{
      await createdUniversityBody.validate(req.body);
      const result = await universityService.createUniversity(req.body);
      return res.status(result.status).json({message : result.message});
    }catch(error:any){
      if (error instanceof yup.ValidationError) {
        return res.status(HttpStatus.BAD_REQUEST).json({
            message: HttpMessage.BAD_REQUEST,
            detalhes: error.errors
        });
      }
      return res
        .status(error?.status || HttpStatus.BAD_REQUEST)
        .json({ error_message: error?.message || HttpMessage.BAD_REQUEST});
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

const createdUniversityBody = yup.object({
  "state-province": yup.string().notRequired(),
  alpha_two_cod: yup.string().max(2).min(2).required("Need to inform the alpha_two_cod with 2 digits"),
  web_pages: yup.array(yup.string()).required("Need to inform web_pages"),
  country: yup.string().required("Required to inform the country"),
  name: yup.string().required("Required to inform the name"),
  domains: yup.array(yup.string()).required("Need to inform domains")
}).required("Required body request");

export default new UniversityController();
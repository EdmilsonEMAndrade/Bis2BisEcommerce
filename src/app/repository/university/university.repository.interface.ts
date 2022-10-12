import { createdUniversity, IUniversity } from "../../interface/university.interface";


interface UniversityRepository{
    createUniversities(universities : createdUniversity[]):void;
    findUniversities(country:any, page:number): any;
    findUniversityById(id: string) : any;
}

export default UniversityRepository;
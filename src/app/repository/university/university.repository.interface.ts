import { createdUniversity, IUniversity, reformUniversityData } from "../../interface/university.interface";


interface UniversityRepository{
    createUniversities(universities : createdUniversity[]):void;
    createUniversity(university : createdUniversity) : any;
    findUniversities(country:any, page:number): any;
    findUniversityById(id: string) : any;
    findByIdAndUpdate(id: string, university : reformUniversityData):any;
    findByIdAndDelete(id: string):any;
}

export default UniversityRepository;
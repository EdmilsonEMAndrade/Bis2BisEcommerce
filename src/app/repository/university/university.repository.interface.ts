import { createdUniversity, IUniversity } from "../../interface/university.interface";


interface UniversityRepository{
    createUniversities(universities : createdUniversity[]):void;
    findUniversityById(id: string) : any;
}

export default UniversityRepository;
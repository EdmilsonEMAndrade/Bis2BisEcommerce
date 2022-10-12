import { createdUniversity } from "../../interface/university.interface";


interface UniversityRepository{
    createUniversities(universities : createdUniversity[]):void;
}

export default UniversityRepository;
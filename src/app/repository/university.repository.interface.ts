import IUniversity from "../interface/university.interface";

interface UniversityRepository{
    createUniversities(universities : IUniversity[]):void;
}

export default UniversityRepository;
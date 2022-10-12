export interface IUniversity {
    _id:string;
    "state-province"?: string;
    alpha_two_cod: string;
    web_pages: string[];
    country: string;
    name: string;
    domains: string[]
}

export type createdUniversity = Omit<IUniversity, "_id">;
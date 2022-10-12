export interface IUniversity {
    _id:string;
    "state-province"?: string;
    alpha_two_cod?: string;
    web_pages: string[];
    country: string;
    name: string;
    domains: string[]
}

export type createdUniversity = Omit<IUniversity, "_id">;
export type findAllUniversity = Omit<IUniversity, "web_pages" | "alpha_two_cod" | "web_pages" | "domains">;
export interface reformUniversityData {
    web_pages: string[];
    name: string;
    domains: string[]
}
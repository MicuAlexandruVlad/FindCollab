import { Skill } from "../models/Skill";
import { PersonalProject } from "../models/PersonalProject";

export class User {
    id: string
    firstName: string
    lastName: string
    birthDate: string
    email: string
    password: string
    skills: Array<Skill>
    personalProjects: Array<PersonalProject>
    linkedInUrl: string
    twitterUrl: string
    facebookUrl: string
}

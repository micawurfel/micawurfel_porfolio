import projects from "./projects.json"

export class ApiService {
   async getProjects(){
    return await projects
   }
}
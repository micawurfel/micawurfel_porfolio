import React, {useState, useEffect} from 'react'
import ProjectCard from './ProjectCard'
import { ApiService } from '../sevices/ApiService'


export default function Projects() {

  const apiService = new ApiService()
    const [projects, setProjects] = useState([])
    async function getProjects(){
        const response = await apiService.getProjects()
        setProjects(response.projects)
    }
    useEffect(()=>{
        getProjects()
    })

  return (
    <section id='projects' className='section'>
        <h2 className='section__h2'>Projects</h2>
        <div className='section__div section__div--projects'>
          {projects.map(project => <ProjectCard key={project.id} project={project}/>)}
        </div>
    </section>
  )
}

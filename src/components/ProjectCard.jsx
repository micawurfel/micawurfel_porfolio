import React from 'react'

export default function ProjectCard({project}) {
  return (
      <article className='article'>
        <img src={project.img} className='article__img' alt=''/>
        <div className='article__div'>
            <h3 className='article__h3'>{project.title}</h3>
            <p className='article__p'>{project.description}</p>
            <a href={project.url} target='_blank' className='article__a'>See more</a>
        </div>
      </article>
  )
}

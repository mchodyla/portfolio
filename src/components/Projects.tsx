import ProjectItem from './ProjectItem'
import boi from '../assets/Boi.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>
            The projects I have Worked on:
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
          <ProjectItem img={boi} title='Boi App'/>
          <ProjectItem img={boi} title='Boi 2 App'/>
          <ProjectItem img={boi} title='Boi 3 App'/>
          <ProjectItem img={boi} title='Boi 4 App'/>
        </div>
    </div>
  )
}

export default Projects
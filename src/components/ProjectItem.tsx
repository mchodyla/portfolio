const ProjectItem = ({img, title}: {img: string, title: string}) => {
  return (
    <div className='project-item'>
      <img src={img} alt={title} className='rounded-xl group-hover:opacity-10'/>
      <div className='content'>
        <h3 className='text-2xl font-bold text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>React JS</p>
        <a href="/">
          <p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'>More Info</p>
        </a>
      </div>
    </div>
  )
}

export default ProjectItem
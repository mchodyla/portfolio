import WorkItem from './WorkItem'

const data = [
    {
        year: 2023,
        title: 'Raben',
        duration: '1 Year',
        details: 'Working in IT support team on a helpdesk, using SQLDeveloper, Linux and some proprietary software from e2open.'
    },
    {
        year: 2023,
        title: 'Bilety24',
        duration: '1 Month',
        details: 'Working on a helpdesk with proprietary software written in C#, mainly talking to people on the phone and servicing Windows-based kiosks with the software installed on them'
    },
    {
        year: 2018,
        title: 'PSNC',
        duration: '3½ Years',
        details: 'Writing software in Java, Python and JavaScript, designing and building hardware, flying drones, fast prototyping using 3D printing, laser-cutting and more'
    }
]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {data.map((item, idx) => (
            <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details}/>
        ))}
    </div>
  )
}

export default Work
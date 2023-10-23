import { TypeAnimation } from 'react-type-animation'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaSoundcloud, FaGithub } from 'react-icons/fa'
import clouds from '../assets/clouds.jpg'

const Main = () => {
  return (
    <div id='main'>
      <img className='w-full h-screen object-cover object-left' src={clouds} alt="" />
      <div className='w-full h-screen absolute top-0 left-o bg-white/50'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-gray-700'>I'm Matthew Going</h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-700'>I'm
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'a Developer',
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                'a Musician',
                2000,
                'a Producer',
                2000,
                'an Electronic engineer',
                2000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
              repeat={Infinity}
            />
          </h2>
          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <a href="https://github.com/mchodyla">
              <FaGithub/>
            </a>
            <a href="https://www.facebook.com/mateusz.chodyla/">
              <FaFacebook className='cursor-pointer' size={20} />
            </a>
            <a href="https://www.instagram.com/fellowshipoftheoring/">
              <FaInstagram className='cursor-pointer' size={20} />
            </a>
            <a href="https://www.linkedin.com/in/mateusz-chody%C5%82a-8401501b5/">
              <FaLinkedinIn className='cursor-pointer' size={20} />
            </a>
            <a href="https://soundcloud.com/grubywjur">
              <FaSoundcloud />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
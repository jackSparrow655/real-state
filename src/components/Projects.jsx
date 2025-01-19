import React, { useRef } from 'react'
import { assets, projectsData } from '../assets/assets'

const Projects = () => {
    const scrollRef = useRef(null)

    function handleScroll(direction){
        const scrollAmount = 100
        if(direction == "right"){
            scrollRef.current.scrollBy({left:scrollAmount, behaviour:"smooth"})
        }
        if(direction == "left"){
            scrollRef.current.scrollBy({left:-scrollAmount, behaviour:"smooth"})
        }
    }

  return (
    <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden pb-20' id='Projects'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects <span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span> </h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, quo.</p>

      {/* ---------------slider button----------- */}
      <div className='hidden md:flex justify-end items-center mb-8'>
        <button onClick={() => handleScroll("left")} className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Project'>
            <img src={assets.left_arrow} alt="left arrow" />
        </button>
        <button onClick={() => handleScroll("right")} className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Project'>
            <img src={assets.right_arrow} alt="right arrow" aria-level='Next Project' />
        </button>
      </div>
      {/* --------------project slider container------------- */}
      <div ref={scrollRef} className='overflow-y-auto md:overflow-x-auto'>
        {/* <div className='grid grid-cols-1 md:grid-cols-4 gap-10'> */}
        <div className='grid grid-flow-row auto-rows-max sm:grid-flow-col sm:auto-cols-max gap-10'>
            {projectsData.map((project, index) => (
                <div key={index} className='relative mt-10 h-[400px] w-[280px]'>
                    <img src={project.image} alt="project-imagew" className='rounded-md' />
                    <div className='border w-fit px-5 py-2 absolute translate-x-10 -translate-y-1/2 float-start bg-neutral-100 rounded-md'>
                        <h3 className='text-xl font-semibold tracking-wide'>{project.title}</h3>
                        <div className='text-neutral-500 '>
                            {project.price} | {project.location}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Projects

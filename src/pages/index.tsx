import HeadApp from '../Components/Head'
import Nav from '../Components/NavBar'
import SelectFilter from '../Components/ListFilter'

export default function Home() {

  return (
    <>
      <HeadApp />
      <Nav />
      <div className='h-[92vh] w-[95%] mx-auto flex justify-between'>
        <div className=' h-[100%] w-[24%]'>

        </div>
        <div className=' h-[100%] w-[85%] '>
          <div className=' w-[100%] h-[15%] flex items-center '>
            <span className='text-[#8186A0] text-[.8em] font-bold pr-32'>Trouvez un travail</span>
            <SelectFilter />
          </div>
          <div className=' w-[100%] h-[85%] mx-auto flex justify-between'>
            <div className='border w-[78%] h-[100%]'></div>
            <div className='border w-[22%] h-[100%]'></div>
          </div>
        </div>
      </div>
    </>

  )
}

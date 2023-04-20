import HeadApp from '../Components/Head'
import Nav from '../Components/NavBar'
import SelectFilter from '../Components/ListFilter'
import LevelFilter from '../Components/FilterLevl'
import FilterAvailble from '../Components/FilterAvailable'
import LanguageFilter from '../Components/FilterLanguage'
import DomainFilter from '../Components/FilterDomaines'
import DescriptionUser from '../Components/DataJob'
import Menu from '../Components/Menu'
import LoadingComponent from '../Components/LoadinComponent'

// import fontAweson
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'

import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { JobstList, jobFilters, filteredLevelState } from '../Components/State'

export default function Home() {
  let jobFilter: [] | any;
  const baseUrl = 'https://join-afrik.onrender.com/api/jobs/recents';
  jobFilter = useRecoilValue(filteredLevelState); //setter to update list render


  //assign
  const [jobs, setJob] = useRecoilState(JobstList);
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true);
    fetch(baseUrl)
      .then(dataJobs => {
        dataJobs.json()
          .then(Jobs => {
            setJob(Jobs.data);
            setLoading(false);

          })
      })

      .catch(error => console.log(error))
  }, []);

  return (
    <>
      <HeadApp />
      <Nav />
      <div className='w-[95%] mx-auto pb-4 flex justify-between'>
        <Menu />
        <div className=' w-[85%]'>
          <div className=' w-[100%] h-[100px] flex items-center '>
            <span className='text-[#8186A0] text-[.8em] font-bold pr-32'>Trouvez un travail</span>
            <SelectFilter />
          </div>
          <div className=' w-[100%] mx-auto flex justify-between'>
            {
              Loading ? <LoadingComponent /> :

                <div className='ContDescrptUser w-[75%] p-4 flex flex-col space-y-2'>
                  {
                    jobFilter.map((job: any, index: any) => <DescriptionUser key={index} data={job} />)
                  }
                </div>

            }
            <div className=' w-[25%] flex flex-col items-center space-y-2'>
              <div className='blocFilter w-[95%] px-4 pt-8 pb-2 flex flex-col space-y-3'>
                <input type='text' placeholder='Trouver un travail' className='searcWorkField text-[.6em] w-[80%] h-[22px] px-2' />
                <span className='text-[.6em] text-[#8186A0] font-semibold'>Filter par niveau</span>
                <LevelFilter />
                <span className='text-[.6em] text-[#8186A0] font-semibold'>Filter par disponibilité</span>
                <FilterAvailble />
              </div>

              <div className=' blocFilter w-[95%] px-4 py-3 flex flex-col space-y-3'>
                <span className='text-[.6em] text-[#8186A0] font-semibold'>Filter par budget</span>
                <div className=' flex items-center justify-between'>
                  <select className='  w-[85px] text-[.5em] text-[#8186A0] font-semibold'>
                    <option> Minimum </option>
                    <option> Maximum </option>
                  </select>
                  <select className=' w-[85px] text-[.5em] text-[#8186A0] font-semibold'>
                    <option> Maximum </option>
                    <option> Minimum </option>
                  </select>
                </div>
                <span className='text-[.6em] text-[#8186A0] font-semibold'>Filter par langue</span>
                <LanguageFilter />
                <span className='text-[.6em] text-[#8186A0] font-semibold'>Filter par domaine</span>
                <DomainFilter />
              </div>
              <div className='w-[95%] flex items-center justify-end'>
                <button className='addProjetBtn font-bold text-[.55em] py-2 px-4'><FontAwesomeIcon className="mr-2" icon={faAdd} /> Ajouter Projet</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


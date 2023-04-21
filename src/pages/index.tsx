import HeadApp from '../Components/Head'
import Nav from '../Components/NavBar'
import ShowFilter from '../Components/ListFilter'
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
      <div className='w-[100%] md_lg:[90%] mx-auto py-4 flex flex-col md:flex-row md:justify-between'>
        <Menu />
        <div className='w-[90%] md:w-[85%] mx-auto'>
          <div className=' w-[100%] h-[80px] py-1 justify-around mobile:p-0 mobile:h-[100px] flex flex-col FilterPoint:flex-row items-center justify-between md_lg:justify-start '>
            <span className='text-[#8186A0] text-[.6em] sm:text-[.8em] font-bold md_lg:pr-32'>Trouvez un travail</span>
            <ShowFilter />
          </div>
          <div className=' w-[100%] mx-auto flex flex-col-reverse justify-center md_lg:flex-row '>
            {
              Loading ? <LoadingComponent /> :

                <div className='ContDescrptUser w-[100%] md_lg:w-[75%] p-2 FilterPoint:p-4 flex flex-col space-y-2'>
                  {
                    jobFilter.map((job: any, index: any) => <DescriptionUser key={index} data={job} />)
                  }
                </div>

            }
            <div className=' flex flex-col py-2 items-center justify-between md_lg:flex-col md_lg:w-[25%] md_lg:items-center space-y-2'>
              <div className='blocFilter w-[95%] px-4 py-4 md_lg:pt-8 flex flex-col space-y-3 '>
                <input type='text' placeholder='Trouver un travail' className=' w-[60%] sm:w-[30%] searcWorkField text-[.6em] md_lg:w-[80%] h-[22px] px-2' />
                <div className=' flex flex-col items-start space-y-3 sm:flex-row sm:space-y-0 sm:items-center sm:justify-between md_lg:flex-col md_lg:items-start'>
                  <div className=''>
                    <span className='text-[.6em] text-[#8186A0] font-semibold'>Filter par niveau</span>
                    <LevelFilter />
                  </div>

                  <div className=''>
                    <span className='text-[.6em] text-[#8186A0] font-semibold'>Filter par disponibilité</span>
                    <FilterAvailble />
                  </div>
                </div>
              </div>

              <div className=' blocFilter w-[95%] px-4 py-3 flex flex-col sm:flex-row-reverse sm:justify-between md_lg:flex-col md_lg:space-y-3 '>
                <div className=''>
                  <span className='text-[.6em] text-[#8186A0] font-semibold'>Filter par budget</span>
                  <div className=' mt-2 flex items-center space-x-2 sm:justify-between'>
                    <select className=' w-[100px] text-[.5em] text-[#8186A0] font-semibold'>
                      <option> Minimum </option>
                      <option> Maximum </option>
                    </select>
                    <select className=' w-[100px] text-[.5em] text-[#8186A0] font-semibold'>
                      <option> Maximum </option>
                      <option> Minimum </option>
                    </select>
                  </div>
                </div>

                <div className='p-2  md_lg:p-0'>
                  <span className='mb-2 text-[.6em] text-[#8186A0] font-semibold'>Filter par langue</span>
                  <LanguageFilter />
                </div>
                <div className='p-2  md_lg:p-0'>
                  <span className='text-[.6em] text-[#8186A0] font-semibold'>Filter par domaine</span>
                  <DomainFilter />
                </div>
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


import Image from 'next/image'
import HeadApp from '../Components/Head'
import Nav from '../Components/NavBar'
import SelectFilter from '../Components/ListFilter'
import LevelFilter from '../Components/FilterLevl'
import FilterAvailble from '../Components/FilterAvailable'
import LanguageFilter from '../Components/FilterLanguage'
import DomainFilter from '../Components/FilterDomaines'

// import fontAweson
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faKey, faUser, faBell, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  //create array for Menu WebSite
  const arrayWeb = [];
  for (let i = 0; i < 20; i++) {
    arrayWeb[i] = i;
  }
  const selected = 0;
  const DataOfMenu = [
    {
      texte: 'Mon Profil',
      icone: faUser
    },
    {
      texte: 'Mot de passe & securité',
      icone: faKey
    },
    {
      texte: 'Notification',
      icone: faBell
    }
  ]

  return (
    <>
      <HeadApp />
      <Nav />
      <div className='w-[95%] mx-auto pb-4 flex justify-between'>
        <div className=' w-[25%] flex flex-col items-center  pt-20 space-y-4'>
          <div className=' h-[90px] w-[90px] '>
            <Image
              src="/user.jpg"
              alt="User"
              className="imageProfil"
              width={100}
              height={150}
              priority
            />
          </div>
          <span className='text-[#2b23b5] font-bold text-[.8em]'>Elie Ruvinga</span>
          <span className='text-[#8186A0] text-[.6em]'>ruvingaelie@gmail.com</span>
          <div className='Menu w-[90%] p-3 flex flex-col space-y-2'>
            {
              DataOfMenu.map((value, index) =>
                <div
                  className={selected == index ? 'MenuSelected flex items-center justify-between p-2' : ' flex items-center justify-between px-2 py-1 text-[#2b23b5]'}
                  key={index}>
                  <div className=' flex items-center'>
                    <FontAwesomeIcon
                      className={selected == index ? 'mr-4 text-[1.1em] text-[#f]' : 'text-[1.1em] mr-4 text-[#8186A0]'}
                      icon={value.icone} />
                    <span className='text-[.65em]'>{value.texte}</span>
                  </div>
                  <FontAwesomeIcon
                    className={selected == index ? 'mr-4 text-[#f]' : 'mr-4 text-[#2b23b5]'}
                    icon={faArrowRight} />
                </div>)
            }
          </div>
          <div className='Menu w-[90%] p-3 flex flex-col space-y-2'>
            {
              arrayWeb.map((value, index) =>
                <div key={index} className='w-[100%] flex items-center justify-between'>
                  <Image src="/images/web.png" alt="Web Site" className="iconeWeb " width={1} height={1} priority />
                  <span className='text-[.55em] font-semibold '>Website developement</span>
                  <span className='text-[.55em] font-semibold webNumber'>230</span>
                </div>
              )
            }

          </div>
        </div>
        <div className=' w-[85%] '>
          <div className=' w-[100%] h-[100px] flex items-center '>
            <span className='text-[#8186A0] text-[.8em] font-bold pr-32'>Trouvez un travail</span>
            <SelectFilter />
          </div>
          <div className=' w-[100%] h-[85%] mx-auto flex justify-between'>
            <div className='ContDescrptUser w-[75%] h-[100%]'>

            </div>
            <div className=' w-[25%] h-[100%] flex flex-col items-center space-y-2'>
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

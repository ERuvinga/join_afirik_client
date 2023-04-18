
import Image from 'next/image';
// import fontAweson
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faUser, faBell, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Menu = () => {
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
    )
}

export default Menu;
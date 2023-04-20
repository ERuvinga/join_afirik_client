import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const DataLinks = [
    {
        content: 'Tous les Emplois',
        picture: '',
        link: '#'
    },

    {
        content: 'Mes Emplois',
        picture: '',
        link: '#'
    },

    {
        content: 'Messages',
        picture: '',
        link: '#'
    }
]

const Nav = () => {
    return (
        <nav className='ContainerNav w-[100%] mx-auto space-y-2 flex flex-col items-center justify-between py-2 md:flex-row md:items-center md:justify-around px-10 '>
            <div className=' w-[100%] md:w-[45%] md:h-[100%] flex items-center justify-between'>
                <img alt='logo' src='/favicon.png' className=' NavLogo' />
                <div className='p-1  w-[70%] flex items-center justify-between space-x-4'>
                    {DataLinks.map((datas, index) =>
                        <Link
                            className='  flex items-center'
                            href={datas.link}
                            key={index}>
                            {
                                <span className=' text-[.55em] md:text-[.72em] text-[#8186A0]'>{datas.content}</span>
                            }
                        </Link>)}
                </div>
            </div>
            <div className=' w-[100%] md:w-[45%] h-[100%] flex flex-row items-center justify-between'>
                <div className='searchBtn hidden  min-w-[20%] h-[25px]  p-1 sm:flex items-center justify-around'>
                    <FontAwesomeIcon className=' text-[#8186A0] w-[18px] h-[18px] ' icon={faSearch} />
                    <input type='text' placeholder='Trouver un Emploi' className=' text-[.48em]  w-[50%] h-[90%]' />
                    <FontAwesomeIcon className=' w-[30px] h-[10px]' icon={faArrowRight} />
                </div>
                <div className=' p-1 w-[110px] flex items-center '>
                    <Image
                        src="/images/persona.png"
                        alt="persona"
                        className="persona mx-1"
                        width={22}
                        height={22}
                        priority />
                    <span className='text-[.5em] lg:text-[.7em] font-bold text-[#8186A0]'>Elie Ruvinga</span>
                </div>
                <Image src="/images/bell.png"
                    alt="bell"
                    className="bell mr-4 lg:mx-1"
                    width={28}
                    height={28}
                    priority />

                <div>
                    <button className=' Logout font-bold text-[.7em] text-center'>Deconnexion</button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
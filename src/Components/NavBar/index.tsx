import React from 'react';
import Link from 'next/link';

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
        <nav className='ContainerNav w-[100%] h-[50px] flex flex-row px-10 py-3 items-center justify-between'>
            <img alt='logo' src='/favicon.png' className='border NavLogo' />
            <div className='border w-[60%] md:w-[25%] flex items-center justify-between'>
                {DataLinks.map((datas, index) =>
                    <Link
                        href={datas.link}
                        key={index}>
                        {
                            <span className='border text-[.72em] text-[#8186A0]'>{datas.content}</span>
                        }
                    </Link>)}
            </div>
            <div>

            </div>
        </nav>
    );
};

export default Nav;
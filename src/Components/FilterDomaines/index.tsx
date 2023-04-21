import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const levlFilter = () => {
    const selected = null;
    const dataAvailable_1 = [
        {
            domain: 'Javascript'
        },
        {
            domain: '.NET'
        },
        {
            domain: '.NET'
        },
        {
            domain: 'Figma'
        },
        {
            domain: '.NET'
        }

    ]

    const dataAvailable_2 = [
        {
            domain: 'Mobile'
        },
        {
            domain: 'Swift'
        },
        {
            domain: 'HTML'
        },
        {
            domain: 'Workspace'
        },
        {
            domain: 'TypeScript'
        }
    ]
    return (
        <div className='mt-2 space-x-5 justify-start flex items-center sm:justify-between'>
            <div className=" flex flex-col space-y-2">
                {
                    dataAvailable_1.map((value, index) =>
                        <div className={selected == index ? " choise Selected flex items-center" : "choise flex items-center"}
                            key={index}>
                            <FontAwesomeIcon icon={faCircle} className={selected == index ? '  mr-2 text-[.8em]' : '  mr-2 text-[.8em] NoSelected'} />
                            <span className={selected == index ? 'text-[.65em]' : ' text-[.65em] text-[#c0c0c0]'}>{value.domain}</span>
                        </div>)
                }
            </div>
            <div className=" flex flex-col space-y-2">
                {
                    dataAvailable_2.map((value, index) =>
                        <div className={selected == index ? "Selected flex items-center choise" : " flex items-center choise"}
                            key={index}>
                            <FontAwesomeIcon icon={faCircle} className={selected == index ? '  mr-2 text-[.8em]' : '  mr-2 text-[.8em] NoSelected'} />
                            <span className={selected == index ? 'text-[.65em] ' : ' text-[.65em] text-[#c0c0c0]'}>{value.domain}</span>
                        </div>)
                }
            </div>
        </div>
    )
}

export default levlFilter;
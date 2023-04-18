import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const levlFilter = () => {
    const selected = 0;
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
        <div className=' flex items-center justify-between'>
            <div className=" flex flex-col space-y-2">
                {
                    dataAvailable_1.map((value, index) =>
                        <div className={selected == index ? "  flex items-center" : " flex items-center"}
                            key={index}>
                            <FontAwesomeIcon icon={faCircle} className={selected == index ? ' NoSelected mr-2 text-[.8em]' : '  mr-2 text-[.8em] NoSelected'} />
                            <span className={selected == index ? 'text-[.65em] text-[#c0c0c0]' : ' text-[.65em] text-[#c0c0c0]'}>{value.domain}</span>
                        </div>)
                }
            </div>
            <div className=" flex flex-col space-y-2">
                {
                    dataAvailable_2.map((value, index) =>
                        <div className={selected == index ? "flex items-center" : " flex items-center"}
                            key={index}>
                            <FontAwesomeIcon icon={faCircle} className={selected == index ? 'NoSelected  mr-2 text-[.8em]' : '  mr-2 text-[.8em] NoSelected'} />
                            <span className={selected == index ? 'text-[.65em] text-[#c0c0c0]' : ' text-[.65em] text-[#c0c0c0]'}>{value.domain}</span>
                        </div>)
                }
            </div>
        </div>
    )
}

export default levlFilter;
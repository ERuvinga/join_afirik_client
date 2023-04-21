import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const levlFilter = () => {
    const selected = null;
    const dataAvailable_1 = [
        {
            language: 'Francais'
        },
        {
            language: 'Anglais'
        }
    ]

    const dataAvailable_2 = [
        {
            language: 'Espagnol'
        },
        {
            language: 'Swahili'
        }
    ]
    return (
        <div className=' mt-2 space-x-5 flex justify-start sm:items-center sm:justify-between '>
            <div className=" flex flex-col space-y-2 ">
                {
                    dataAvailable_1.map((value, index) =>
                        <div className={selected == index ? "choise flex items-center" : "choise flex items-center"}
                            key={index}>
                            <FontAwesomeIcon icon={faCircle} className={selected == index ? ' Selected mr-1 md_lg:mr-2 text-[.8em]' : ' mr-1 md_lg:mr-2 text-[.8em] NoSelected'} />
                            <span className={selected == index ? 'text-[.65em] ' : ' text-[.65em] text-[#c0c0c0]'}>{value.language}</span>
                        </div>)
                }
            </div>
            <div className=" flex flex-col space-y-2 ">
                {
                    dataAvailable_2.map((value, index) =>
                        <div className={selected == index ? "Selected choise flex items-center" : "choise flex items-center"}
                            key={index}>
                            <FontAwesomeIcon icon={faCircle} className={selected == index ? '  mr-1 md_lg:mr-2 text-[.8em]' : ' mr-1 md_lg:mr-2 text-[.8em] NoSelected'} />
                            <span className={selected == index ? 'text-[.65em] ' : ' text-[.65em] text-[#c0c0c0]'}>{value.language}</span>
                        </div>)
                }
            </div>
        </div>
    )
}

export default levlFilter;
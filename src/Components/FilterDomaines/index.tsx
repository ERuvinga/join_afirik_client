import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { useRecoilValue, useSetRecoilState } from 'recoil';

//state
import { domainesFilter } from '../State';

const DomFilter = () => {
    let DomFilter: [] | any;

    //Recoil value
    const setDomainFilter = useSetRecoilState(domainesFilter); // setter
    DomFilter = useRecoilValue(domainesFilter); // value

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

    const changeFilter = (item: any) => {
        let oldTab: [] | any;
        setDomainFilter((oldData: any) => {
            oldTab = [...oldData]; // copy old state

            console.log(oldTab);
            console.log(item);

            if (oldTab[item - 1] === item) {
                oldTab[item - 1] = 0;
            }

            else {
                oldTab[item - 1] = item;
            }
            return [...oldTab];

        })
    };

    return (
        <div className='mt-2 space-x-5 lg:space-x-0 justify-start flex items-center sm:justify-between'>
            <div className=" flex flex-col space-y-2">
                {
                    dataAvailable_1.map((value, index) =>
                        <div onClick={() => changeFilter(index + 1)} className='choise flex items-center w-[80px] '
                            key={index}>
                            <FontAwesomeIcon icon={faCircle} className={DomFilter[index] ? 'Selected  mr-2 text-[.8em]' : '  mr-2 text-[.8em] NoSelected'} />
                            <span className={DomFilter[index] ? 'text-[#2b23b5] text-[.65em]' : ' text-[.65em] text-[#c0c0c0]'}>{value.domain}</span>
                        </div>)
                }
            </div>
            <div className=" flex flex-col space-y-2">
                {
                    dataAvailable_2.map((value, index) =>
                        <div onClick={() => changeFilter(index + 7)} className=" flex items-center choise w-[80px] "
                            key={index}>
                            <FontAwesomeIcon icon={faCircle} className={DomFilter[index + 6] ? 'Selected  mr-2 text-[.8em]' : '  mr-2 text-[.8em] NoSelected'} />
                            <span className={DomFilter[index + 6] ? 'text-[#2b23b5]  text-[.65em] ' : ' text-[.65em] text-[#c0c0c0]'}>{value.domain}</span>
                        </div>)
                }
            </div>
        </div>
    )
}

export default DomFilter;
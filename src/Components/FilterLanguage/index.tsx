import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

//recoil 
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { languageFilter } from '../State';

const LangFilter = () => {
    let langFilter: [] | any;

    // recoil values
    const setLangFilter = useSetRecoilState(languageFilter);
    langFilter = useRecoilValue(languageFilter);

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

    const changeFilter = (item: any) => {
        let oldTab: [] | any;
        setLangFilter((oldData: any) => {
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
        <div className=' mt-2 space-x-5 lg:space-x-0 flex justify-start sm:items-center sm:justify-between '>
            <div className=" flex flex-col space-y-2 ">
                {
                    dataAvailable_1.map((value, index) =>
                        <div onClick={() => changeFilter(index + 1)} className="choise flex items-center w-[80px]"
                            key={index}>
                            <FontAwesomeIcon icon={faCircle} className={langFilter[index] ? ' Selected mr-1 md_lg:mr-2 text-[.8em]' : ' mr-1 md_lg:mr-2 text-[.8em] NoSelected'} />
                            <span className={langFilter[index] ? 'text-[#2b23b5] text-[.65em] ' : ' text-[.65em] text-[#c0c0c0]'}>{value.language}</span>
                        </div>)
                }
            </div>
            <div className=" flex flex-col space-y-2 ">
                {
                    dataAvailable_2.map((value, index) =>
                        <div onClick={() => changeFilter(index + 3)} className="choise flex items-center w-[80px] "
                            key={index}>
                            <FontAwesomeIcon icon={faCircle} className={langFilter[index + 2] ? 'Selected mr-1 md_lg:mr-2 text-[.8em]' : ' mr-1 md_lg:mr-2 text-[.8em] NoSelected'} />
                            <span className={langFilter[index + 2] ? 'text-[#2b23b5] text-[.65em] ' : ' text-[.65em] text-[#c0c0c0]'}>{value.language}</span>
                        </div>)
                }
            </div>
        </div>
    )
}

export default LangFilter;
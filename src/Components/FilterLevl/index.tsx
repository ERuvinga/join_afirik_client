import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

import { useRecoilState } from 'recoil';
import { levelFilter, } from '../State';

const levlFilter = () => {
    let filterlevel: any
    const Filter = useRecoilState(levelFilter);


    filterlevel = Filter[0];
    const setLevelFilter = Filter[1]; //setter function to change data of levelfilter


    const dataLevel = [
        {
            level: '8 ans +'
        },
        {
            level: '5-7 ans'
        },
        {
            level: '2-4 ans'
        },
        {
            level: '1 an'
        }
    ];


    const changeFilter = (item: any) => {
        setLevelFilter((oldData: any) => {
            if (oldData === item) {
                return null;
            }

            else {
                return item
            }

        })
    };

    return (
        <div className=" flex flex-col space-y-2">
            {
                dataLevel.map((value, index) =>
                    <div onClick={() => changeFilter(index)} className={filterlevel == index ? "levelSelected font-semibold flex items-center choise " : "choise flex items-center"}
                        key={index}>
                        <FontAwesomeIcon icon={faCircle} className={filterlevel == index ? '  mr-2 text-[.8em]' : '  mr-2 text-[.8em] NoSelected'} />
                        <span className={filterlevel == index ? 'text-[.65em]' : ' text-[.65em] text-[#c0c0c0]'} >{value.level}</span>
                    </div>)
            }
        </div>
    )
}

export default levlFilter;
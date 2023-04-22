import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

// recoils hooks and states
import { useRecoilState } from 'recoil'
import { AvailabilityFilter } from '../State'

const AvalFilter = () => {
    let filterAval: any
    const Filter = useRecoilState(AvailabilityFilter)

    filterAval = Filter[0];
    const setAvalFilter = Filter[1]; //setter function to change data of levelfilter

    const dataAvailable = [
        {
            content: 'Temps plein'
        },
        {
            content: 'Temps partiel'
        }
    ]

    const changeFilter = (item: any) => {
        setAvalFilter((oldData: any) => {
            if (oldData === item) {
                return null;
            }

            else {
                return item
            }
        })
    };

    return (
        <div className=" mt-2 flex space-x-3 md_lg:flex-col md_lg:space-x-0 md_lg:space-y-2 ">
            {
                dataAvailable.map((value, index) =>
                    <div
                        onClick={() => {
                            changeFilter(index)
                        }
                        }
                        className={filterAval == index ? " Selected flex items-center choise" : " choise flex items-center"}
                        key={index}>
                        <FontAwesomeIcon icon={faCircle} className={filterAval == index ? 'mr-1  md_lg:mr-2 text-[.8em]' : 'mr-1 md_lg:mr-2 text-[.8em] NoSelected'} />
                        <span className={filterAval == index ? 'text-[.65em]' : ' text-[.65em] text-[#c0c0c0]'}>{value.content}</span>
                    </div>)
            }
        </div>
    )
}

export default AvalFilter;
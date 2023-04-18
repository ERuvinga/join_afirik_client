import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const levlFilter = () => {
    const selectedLevel = 0;
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
    ]
    return (
        <div className=" flex flex-col space-y-2">
            {
                dataLevel.map((value, index) =>
                    <div className={selectedLevel == index ? "levelSelected font-semibold flex items-center" : " flex items-center"}
                        key={index}>
                        <FontAwesomeIcon icon={faCircle} className={selectedLevel == index ? '  mr-2 text-[.8em]' : '  mr-2 text-[.8em] NoSelected'} />
                        <span className={selectedLevel == index ? 'text-[.65em]' : ' text-[.65em] text-[#c0c0c0]'}>{value.level}</span>
                    </div>)
            }
        </div>
    )
}

export default levlFilter;
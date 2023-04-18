import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const levlFilter = () => {
    const selected = 0;
    const dataAvailable = [
        {
            content: 'Temps plein'
        },
        {
            content: 'Temps partiel'
        }
    ]
    return (
        <div className=" flex flex-col space-y-2">
            {
                dataAvailable.map((value, index) =>
                    <div className={selected == index ? "levelSelected font-semibold flex items-center" : " flex items-center"}
                        key={index}>
                        <FontAwesomeIcon icon={faCircle} className={selected == index ? '  mr-2 text-[.8em]' : '  mr-2 text-[.8em] NoSelected'} />
                        <span className={selected == index ? 'text-[.65em]' : ' text-[.65em] text-[#c0c0c0]'}>{value.content}</span>
                    </div>)
            }
        </div>
    )
}

export default levlFilter;
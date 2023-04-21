import { useRecoilState } from "recoil";
import { AllRecentSavedFilter } from "../State";

const listFilter = () => {
    let fieldSelected: any;

    // recoil data
    const Field = useRecoilState(AllRecentSavedFilter);
    fieldSelected = Field[0]
    const setFieldSelected = Field[1];


    let selectedFilter = [
        {
            content: 'Tous'
        },
        {
            content: 'Vus recements'
        },
        {
            content: 'Sauvegardés'
        }
    ]
    return (
        <div className="NavselectField md:mr-4 flex items-center justify-between">
            {
                selectedFilter.map((value, i) =>
                    <span onClick={() => {
                        setFieldSelected((i))
                    }
                    }
                        className={
                            fieldSelected == i ? " choise selectField  text-[.75em] px-8 py-1 md_lg:py-2 " : "choise text-[#8186A0] text-[.75em] px-7 md_lg:px-7 py-1 md_lg:py-2"}
                        key={i}>
                        {value.content}
                    </span>)
            }
        </div>
    )
}

export default listFilter;
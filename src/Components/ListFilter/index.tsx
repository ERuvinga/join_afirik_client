
const listFilter = () => {
    const fieldSelected = 0;
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
        <div className="NavselectField  flex items-center">
            {
                selectedFilter.map((value, i) => <span className={fieldSelected == i ? "selectField  text-[.75em] mx-1 px-8 p-2" : " text-[#8186A0] text-[.75em] mx-1 px-5 p-1"} key={i}>{value.content}</span>)
            }
        </div>
    )
}

export default listFilter;
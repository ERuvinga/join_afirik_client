
// fonctions gerant les filtres de langue et de domaines

const SearchTabLang = (tabFilter: []) => {

    let langTab: [] | any; langTab = [];

    let i = 0;
    tabFilter.map((filter) => {
        // check data of tab
        switch (filter) {
            case 1:
                langTab[i] = 'Français';
                i++;
                break;
            case 2:
                langTab[i] = 'Anglais';
                i++
                break;
            case 3:
                langTab[i] = 'Espagnol'
                i++
                break;
            case 4:
                langTab[i] = 'Swahili'
                break;
        }
    });

    return langTab; // retourner le tableau des langues selectionnées
};


const SearchTabDomain = (tabFilter: []) => {
    let domainTab: [] | any;

}

export { SearchTabLang, SearchTabDomain }


const { atom } = require('recoil');

// exigence List State on elie page
const ExigenceList = atom(
    {
        key: 'ExigenceList',
        default: []
    }
);

const JobstList = atom( // contient la liste entiere des jobs (données non filtrées)
    {
        key: 'ProjetList',
        default: []
    }
);

const jobFilters = atom( // contient la liste des jobs deja filtrés
    {
        key: 'jobFilters',
        default: []
    }
);

const levelFilter = atom(
    {
        key: 'levelFilters',
        default: null
    }
);


const AvailabilityFilter = atom(
    {
        key: 'AvailabilityFilter',
        default: null
    }
);

//languageFilter [1]
//DomainesFilters[3]

const AllRecentSavedFilter = atom(
    {
        key: 'AllRecentSavedFilter',
        default: 0
    }
)
export { ExigenceList, JobstList, jobFilters, levelFilter, AvailabilityFilter, AllRecentSavedFilter };
const { selector } = require("recoil");
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
        key: 'jobFilter',
        default: []
    }
);

const levelFilter = atom( // le filtre actuel pour le niveau
    {
        key: 'levelFilters',
        default: null
    }
);

// filtreur de  level 
const filteredLevelState = selector({
    key: 'filteredLevelState',
    get: ({ get }) => {

        const filter = get(levelFilter);
        const list = get(JobstList);

        switch (filter) {
            case 0:
                return list.filter((item: any) => item.yearsOfExperience >= 8);

            case 1:
                return list.filter((item: any) => (item.yearsOfExperience >= 5) && (item.yearsOfExperience <= 7));

            case 2:
                return list.filter((item: any) => (item.yearsOfExperience >= 2) && (item.yearsOfExperience <= 4));

            case 3:
                return list.filter((item: any) => item.yearsOfExperience == 1);
            case null:
                return list;
        }


    }

});


const AvailabilityFilter = atom(
    {
        key: 'AvailabilityFilter',
        default: null
    }
);

// filtreur disponibilité
const AvalaibleTime = selector({
    key: "AvalaibleTime",
    get: ({ get }) => {
        const list = get(jobFilters);
        const filter = get(AvailabilityFilter);

        switch (filter) {
            case 0:
                return list.filter((item: any) => item.availableTime === 'PART_TIME');

            case 1:
                return list.filter((item: any) => item.availableTime === 'PLEIN_TIME');

            case null:
                return list;
        }
    }
})

//languageFilter [1]
//DomainesFilters[3]

const AllRecentSavedFilter = atom(
    {
        key: 'AllRecentSavedFilter',
        default: 0
    }
)
export { ExigenceList, JobstList, jobFilters, levelFilter, AvailabilityFilter, AllRecentSavedFilter, filteredLevelState };
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

const languageFilter = atom({
    key: "languageFilter",
    default: {
        first: 0,
        second: 0,
    }
})

// filtreur de  level 
const filteredLevelState = selector
    ({
        key: 'filteredLevelState',
        get: ({ get }) => {

            const lvlFilter = get(levelFilter);
            let AllJobslist = get(JobstList);

            switch (lvlFilter) {
                case 0:
                    AllJobslist = AllJobslist.filter((item: any) => item.yearsOfExperience >= 8);
                    break;

                case 1:
                    AllJobslist = AllJobslist.filter((item: any) => (item.yearsOfExperience >= 5) && (item.yearsOfExperience <= 7));
                    break;

                case 2:
                    AllJobslist = AllJobslist.filter((item: any) => (item.yearsOfExperience >= 2) && (item.yearsOfExperience <= 4));
                    break;

                case 3:
                    AllJobslist = AllJobslist.filter((item: any) => item.yearsOfExperience == 1);
                    break;

            }

            // filter per availableTime
            const Avalfilter = get(AvailabilityFilter);
            switch (Avalfilter) {
                case 0:
                    return AllJobslist.filter((item: any) => item.availableTime === 'PART_TIME');

                case 1:
                    return AllJobslist.filter((item: any) => item.availableTime === 'PLEIN_TIME');

                case null:
                    return AllJobslist;
            }


        }

    });


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
export { ExigenceList, JobstList, jobFilters, levelFilter, AvailabilityFilter, AllRecentSavedFilter, filteredLevelState, languageFilter };
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

// pour les filtres multi select 
const langFiltreTabValue = atom({
    key: 'langFiltreTabValue',
    default: []
})

const languageFilter = atom({ //languageFilter
    key: "languageFilter",
    default: [0, 0, 0, 0]
});

const domainesFilter = atom({//DomainesFilters
    key: "domainesFilter",
    default: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
});

// filtreur de  level 
const filteredLevelState = selector
    ({
        key: 'filteredLevelState',
        get: ({ get }: any) => {

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
            };

            //filter by languages
            const langFilter = get(langFiltreTabValue);
            if (langFilter.length > 0) {
                AllJobslist = AllJobslist.filter((job: any) => {
                    if (langFilter.length != job.languages.length)
                        return false;

                    else {
                        let validate = 1;
                        for (let i = 0; i < job.languages.length; i++) {
                            validate = validate * langFilter.includes(job.languages[i]);
                        }
                        return validate;
                    }
                });
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


const AllRecentSavedFilter = atom(
    {
        key: 'AllRecentSavedFilter',
        default: 0
    }
)
export {
    ExigenceList,
    JobstList,
    jobFilters,
    levelFilter,
    AvailabilityFilter,
    AllRecentSavedFilter,
    filteredLevelState,
    langFiltreTabValue,
    languageFilter,
    domainesFilter
};
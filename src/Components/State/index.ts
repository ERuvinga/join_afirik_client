const { atom } = require('recoil');

// exigence List State on elie page
const ExigenceList = atom(
    {
        key: 'ExigenceList',
        default: []
    }
);

export { ExigenceList };
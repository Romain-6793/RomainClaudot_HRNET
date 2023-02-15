
const users = [
    {
        firstName: "Qui-Gon",
        lastName: "Jinn",
        startDate: "1977-11-08",
        department: "Legal",
        dateOfBirth: "1943-04-03",
        street: "48 rue de la Patience",
        city: "Girell",
        state: "AL",
        zipCode: 55080,
    },
    {
        firstName: "Darth",
        lastName: "Sidious",
        startDate: "2009-02-03",
        department: "Marketing",
        dateOfBirth: "1951-05-11",
        street: "10 rue des Comploteurs",
        city: "Dant",
        state: "DE",
        zipCode: 79346,
    },
    {
        firstName: "Jar Jar",
        lastName: "Binks",
        startDate: "1969-12-10",
        department: "Engineering",
        dateOfBirth: "1959-12-06",
        street: "389 rue des Boulets",
        city: "Cathulara",
        state: "ID",
        zipCode: 22267,
    },
    {
        firstName: "Nute",
        lastName: "Gunray",
        startDate: "1985-12-02",
        department: "Human Resources",
        dateOfBirth: "1972-11-07",
        street: "418 rue de la Fourberie",
        city: "Pear",
        state: "CO",
        zipCode: 53928,
    },
]


const sorter = {
    stringSort: (values, key) => values.sort((a, b) => b[key].localeCompare(a[key])), // Sort by string
    dateSort: (values, key) => values.sort((a, b) => {
        return new Date(b[key]).getDate() - new Date(a[key]).getDate()
    }) // sort by date
};

const getSort = (key, direction) => {

    const mapper = {
        firstName: 'stringSort',
        lastName: 'stringSort',
        department: 'stringSort',
        dateOfBirth: 'dateSort',
    };

    const sorterFunction = mapper.dateOfBirth;
    const fn = sorter[sorterFunction];
    const res = fn(users, key);
    return Boolean(direction) ? res : res.reverse();
}

const g = getSort('firstName:', 1);
console.log(g)
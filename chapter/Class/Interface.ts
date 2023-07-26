//lesson 40
interface IPerson {
    readonly firstName: string;
    lastName?: string;
    address: string
}

type Person41 = {
    firstName: string;
    lastName: string
}

function getFullName(person: IPerson) {
    return `${person.firstName} ${person.lastName}`;
}

let person40 = {
    firstName: 'Thanh',
    lastName: 'Le',
    address: 'HCM'
};

console.log(getFullName(person40)); 

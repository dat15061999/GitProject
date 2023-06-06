class Agency {
    constructor(agencyCode, agencyName, agencyNumber, address, email) {
        this.agencyCode = agencyCode;
        this.agencyName = agencyName;
        this.agencyNumber = agencyNumber;
        this.address = address;
        this.email = email;
    }
    getPhonenumber() {
        return this.agencyNumber.slice(0, -3) + 'xxx';
    }
    getInfo() {
        return `Code: ${this.agencyCode},Ten:${this.agencyName}, SDt:${this.agencyNumber.slice(0, -3) + 'xxx'}, Dia chi: ${this.address}, Email: ${this.email}`;
    }
}

let david = new Agency('1', 'David BecKham', '0123456778', '28NguyenTriPhuong', 'david@gmail.com')
let male = new Agency('2', 'David Malele', '0123456778', '28NguyenTriPhuong', 'david@gmail.com')
let agencyList = [];
agencyList.push(david, male);

function createAgency(obj) {
    agencyList.push(obj);
    return agencyList;
}
let malen = new Agency('3', 'Malele Son', '0123456778', '28NguyenTriPhuong', 'david@gmail.com')
createAgency(malen);
function removeAgency(data) {
    for (let i = 0; i < agencyList.length; i++) {
        if (data == agencyList[i].agencyCode) {
            agencyList.splice(i, 1);
        }
    }
    return agencyList;
}
console.log(removeAgency('2'));
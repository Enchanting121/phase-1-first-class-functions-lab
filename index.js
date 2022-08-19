const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function returnFirstTwoDrivers(array) {
    let first = []
    for (let person of array) {
        first.push(person)
    }
    first.splice(-2)
    return first
}
returnFirstTwoDrivers(drivers)

function returnLastTwoDrivers(array) {
    let first = []
    for (let person of array) {
        first.push(person)
    }
    return first.splice(2)
}
returnLastTwoDrivers(drivers)

function createFareMultiplier(num1) {
    return function fare(num2) {
        return num1 * num2
    }
}
//const fareMultiplier = createFareMultiplier(2);
//const fareQuintupler = createFareMultiplier(5);

function fareDoubler(num) {
    const double = createFareMultiplier(num)
    return double(2)
}

function fareTripler(num) {
    const triple = createFareMultiplier(num)
    return triple(3)
}

function selectDifferentDrivers(theDrivers, twoDrivers) {
    let first = []
    if (twoDrivers == returnFirstTwoDrivers) {
        first = returnFirstTwoDrivers(theDrivers)
    } else if (twoDrivers == returnLastTwoDrivers) {
        first = returnLastTwoDrivers(theDrivers)

    }
    return first
}
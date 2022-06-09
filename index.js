// Code your solution in this file!

var driversArr = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (driversArr){
    return driversArr.slice(0,2)
}
const returnLastTwoDrivers = function(driverArray){
    return driverArray.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(integer){
    return function (fare){
        return fare * integer;
    }
}
const fareDoubler = (fare) => fare* 2;


const fareTripler = (fare)  => fare*3; 

function selectDifferentDrivers(driversArr, func) {
    return func(driversArr);
}
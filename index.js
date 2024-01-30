// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
    return [array[0], array[1]];
} ;

const returnLastTwoDrivers = function(array) {
    return [array[2], array[3]];
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(mult) {
    return function(fare) {
        return fare * mult;
    }
};
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(array, arrayFunction) {
    return arrayFunction(array);
}
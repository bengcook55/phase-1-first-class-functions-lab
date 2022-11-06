// Code your solution in this file!
const returnFirstTwoDrivers = () => (['Antonia', 'Nuru'])

const returnLastTwoDrivers = () => (['Amari','Mo'])

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (value) => {
    return (fare) => value * fare;
  }

  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driverArray, driverFunction) {
    return driverFunction(driverArray);
}
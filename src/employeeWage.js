const IS_ABSENT = 0;
const PART_TIME = 1;
const FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empCheck = Math.floor(Math.random() * 3);
let empHours = 0;

switch (empCheck) {
    case IS_ABSENT:
        empHours = 0;
        break;
    case PART_TIME:
        empHours = PART_TIME_HOURS;
        break;
    case FULL_TIME:
        empHours = FULL_TIME_HOURS;
        break;
    default:
        empHours = 0;
}

let empWage = empHours * WAGE_PER_HOUR;
console.log(`Employee worked ${empHours} hours and earned $${empWage}`);
function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

while (totalEmpHrs < MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}

let empWage = empDailyWageArr.reduce((total, dailyWage) => total + dailyWage, 0);

console.log(" Total Days: " + totalWorkingDays +
            " | Total Hrs: " + totalEmpHrs +
            " | Emp Wage: " + empWage);
console.log("Daily Wages Array: " + empDailyWageArr);

let totalWage = empDailyWageArr.reduce((total, dailyWage) => total + dailyWage, 0);
console.log("Total Wage using reduce: " + totalWage);

let dailyWageWithDay = empDailyWageArr.map((dailyWage, index) => `Day ${index + 1}: ${dailyWage}`);
console.log("Daily Wage with Day: " + dailyWageWithDay);

let fullTimeWageDays = empDailyWageArr.filter(dailyWage => dailyWage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log("Days with Full Time Wage: " + fullTimeWageDays);

let firstFullTimeWageDay = empDailyWageArr.find(dailyWage => dailyWage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log("First occurrence of Full Time Wage: " + firstFullTimeWageDay);

let allFullTimeWage = empDailyWageArr.every(dailyWage => dailyWage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log("Every element is Full Time Wage: " + allFullTimeWage);

let anyPartTimeWage = empDailyWageArr.some(dailyWage => dailyWage === PART_TIME_HOURS * WAGE_PER_HOUR);
console.log("Any Part Time Wage: " + anyPartTimeWage);

let numOfDaysWorked = empDailyWageArr.length;
console.log("Number of days the Employee Worked: " + numOfDaysWorked);

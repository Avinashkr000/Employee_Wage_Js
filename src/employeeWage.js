const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const WAGE_PER_HOUR = 20;
const MAX_HOURS = 160;
const MAX_DAYS = 20;
const FULL_TIME_WAGE = FULL_TIME_HOURS * WAGE_PER_HOUR;
const PART_TIME_WAGE = PART_TIME_HOURS * WAGE_PER_HOUR;

function getWorkHours(empType) {
    switch (empType) {
        case 1:
            return PART_TIME_HOURS;
        case 2:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

function calculateWage() {
    const IS_PRESENT = Math.random() < 0.5;
    const empType = Math.floor(Math.random() * 3);
    const workHours = IS_PRESENT ? getWorkHours(empType) : 0;

    if (IS_PRESENT) {
        console.log("Employee is Present");
        console.log(`Employee worked ${workHours} hours and earned $${workHours * WAGE_PER_HOUR}`);
    } else {
        console.log("Employee is Absent");
        console.log("No wages, employee was absent.");
    }

    console.log(`Employee worked ${workHours} hours`);
}

function calculateTotalWage(days) {
    let totalWage = 0;
    let dailyWages = [];
    for (let day = 1; day <= days; day++) {
        const dailyHours = getWorkHours(Math.floor(Math.random() * 3));
        const dailyWage = dailyHours * WAGE_PER_HOUR;
        dailyWages.push({ day, hoursWorked: dailyHours, wageEarned: dailyWage });
        totalWage += dailyWage;
    }
    console.log(`Daily Wages: ${JSON.stringify(dailyWages)}`);
    return totalWage;
}

function calculateWageUntilLimit() {
    let totalHours = 0;
    let totalDays = 0;
    let totalWageUntil = 0;
    let dailyWages = [];
    let dailyHoursMap = new Map();

    while (totalHours < MAX_HOURS && totalDays < MAX_DAYS) {
        const dailyHours = getWorkHours(Math.floor(Math.random() * 3));
        const dailyWage = dailyHours * WAGE_PER_HOUR;
        dailyWages.push({ day: totalDays + 1, hoursWorked: dailyHours, wageEarned: dailyWage });
        dailyHoursMap.set(totalDays + 1, dailyHours);
        totalHours += dailyHours;
        totalWageUntil += dailyWage;
        totalDays++;
    }

    console.log(`Daily Wages: ${JSON.stringify(dailyWages)}`);
    console.log(`Total Days: ${totalDays}, Total Hours: ${totalHours}, Total Wage: $${totalWageUntil}`);

    const totalWage = dailyWages.reduce((total, { wageEarned }) => total + wageEarned, 0);
    console.log(`Total Wage using reduce: $${totalWage}`);

    const dayWithWages = dailyWages.map(({ day, wageEarned }) => `Day ${day}: $${wageEarned}`);
    console.log(`Day with Wages: ${dayWithWages}`);

    const fullTimeWageDays = dailyWages.filter(({ wageEarned }) => wageEarned === FULL_TIME_WAGE).map(({ day }) => day);
    console.log(`Days with Full Time Wage: ${fullTimeWageDays.length}`);

    const firstFullTimeWageDay = dailyWages.find(({ wageEarned }) => wageEarned === FULL_TIME_WAGE);
    console.log(`First occurrence of Full Time Wage: Day ${firstFullTimeWageDay ? firstFullTimeWageDay.day : 'None'}`);

    const isEveryFullTimeWage = dailyWages.every(({ wageEarned }) => wageEarned === FULL_TIME_WAGE);
    console.log(`Is every element a Full Time Wage: ${isEveryFullTimeWage}`);

    const isAnyPartTimeWage = dailyWages.some(({ wageEarned }) => wageEarned === PART_TIME_WAGE);
    console.log(`Is there any Part Time Wage: ${isAnyPartTimeWage}`);

    const daysWorked = dailyWages.filter(({ wageEarned }) => wageEarned > 0).length;
    console.log(`Number of days the Employee Worked: ${daysWorked}`);

    const totalWagesAndHours = dailyWages.reduce((acc, { hoursWorked, wageEarned }) => {
        acc.totalWage += wageEarned;
        acc.totalHours += hoursWorked;
        return acc;
    }, { totalWage: 0, totalHours: 0 });
    console.log(`Total Wage: $${totalWagesAndHours.totalWage}, Total Hours: ${totalWagesAndHours.totalHours}`);

    const fullWorkingDays = dailyWages.filter(({ hoursWorked }) => hoursWorked === FULL_TIME_HOURS).map(({ day }) => day);
    const partWorkingDays = dailyWages.filter(({ hoursWorked }) => hoursWorked === PART_TIME_HOURS).map(({ day }) => day);
    const noWorkingDays = dailyWages.filter(({ hoursWorked }) => hoursWorked === 0).map(({ day }) => day);

    console.log(`Full Working Days: ${fullWorkingDays}`);
    console.log(`Part Working Days: ${partWorkingDays}`);
    console.log(`No Working Days: ${noWorkingDays}`);
}

calculateWage();
const totalWage = calculateTotalWage(20);
console.log(`Total Wage for 20 Days: $${totalWage}`);
calculateWageUntilLimit();

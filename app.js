console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
  for (let x = 0; x <= count; x++) {
    if (x % 2 !== 0) {
      console.log(x);
    }
  }
}

printOdds(10);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
  let aboveSixteen = `Congrats ${userName}, you can drive!`;
  let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

  if (age < 16) {
    console.log(belowSixteen);
  } else if (age >= 16) {
    console.log(aboveSixteen);
  }
}

checkAge("Seth", 16);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function quadrant(x1, y1) {
  if (y1 === 0 && (x1 > 0 || x1 < 0)) {
    console.log(`(${x1}, ${y1}) is on the x axis.`);
  } else if (x1 === 0 && (y1 > 0 || y1 < 0)) {
    console.log(`(${x1}, ${y1}) is on the y axis.`);
  } else if (x1 === 0 && y1 === 0) {
    console.log(`(${x1}, ${y1}) is at the origin.`);
  } else if (x1 > 0 && y1 > 0) {
    console.log(`(${x1}, ${y1}) is in Quadrant 1.`);
  } else if (x1 < 0 && y1 > 0) {
    console.log(`(${x1}, ${y1}) is in Quadrant 2.`);
  } else if (x1 < 0 && y1 < 0) {
    console.log(`(${x1}, ${y1}) is in Quadrant 3.`);
  } else if (x1 > 0 && y1 < 0) console.log(`(${x1}, ${y1}) is in Quadrant 4.`);
}

quadrant(24, -17);

// Exercise 4 Section
function triangle(a, b, c) {
  if (a !== b && a !== c && b === c) {
    console.log("Isosceles Triangle.");
  } else if (a === b && b === c && a === c) {
    console.log("Equilateral Triangle");
  } else if (a !== b && b !== c && a !== c) {
    console.log("Scalene Trangle");
  } else if (a + b <= c) {
    console.log("Invalid Triangle.");
  }
}

triangle(3, 1, 1);

/* Isosceles: 1, 2, 2 !!!
- Invalid: 1, 1, 2 !!!
Equilateral: 3, 3, 3!!!
Scalene: 1, 2, 3 !!!*/

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function data(planLimit, day, usage) {
  let avgUse = usage / day;

  let remData = planLimit - usage;

  let daysLeft = 30 - day;

  let recUse = planLimit / 30;

  let currentRateMax = 30 * avgUse;

  let excAmount = currentRateMax - planLimit;

  let safeUse = remData / daysLeft;

  if (currentRateMax > planLimit) {
    console.log(
      `Recommended Average daily use: ${recUse}GB/day. You are EXCEEDING your recommended average use (currently ${avgUse}GB/day). Continuing this high usage, you will exceed your data plan by ${excAmount}GB. To stay below your data plan, use no more than ${safeUse}GB/day.`
    );
  } else if (currentRateMax < planLimit) {
    console.log(
      `Recommended Average daily use: ${recUse}GB/day. You are below your recommended average use (currently ${avgUse}GB/day). Continuing this low usage, you will lose ${remData} GB of unused data. To ensure you are able to take advantage of your remaining data, use at least ${safeUse}GB/day.`
    );
  } else if (currentRateMax == planLimit) {
    console.log(
      `Your current average daily use, ${recUse}GB/day, is the same as your recommended data usage. Continuing to use data at this rate will make full use of the data in your plan.`
    );
  }
  return;
}

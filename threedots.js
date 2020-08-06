const ages = [12, 15, 14 ,19];
const ages2 = [17, 20, 24, 45];
const ages3 = [45, 55, 65];

const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2=[...ages, ...ages2, ...ages3]
// console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 250;
// const maximum = Math.max(business, minister, sochib);
const takaPoisa=[160, 650, 320];
const maximum = Math.max(...takaPoisa);
console.log(maximum)
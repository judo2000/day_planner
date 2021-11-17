myHour = '13:00am'
let currHour =  (moment(parseInt(myHour)));
let hour = (moment().get('hour'));
console.log(currHour);
console.log(hour);
console.log(currHour.isAfter(hour));

// let currHour =  (moment().format("hh:mma"));
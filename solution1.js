
//Q1. How to fetch the millisecond according to universal time from a given Date object?
var dateToday = new Date('October 15, 1996 05:35:32:770 GMT+11:00');
timeInMilliseconds=dateToday.getUTCMilliseconds();
console.log(timeInMilliseconds);
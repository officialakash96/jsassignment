
//Q1. How to fetch the millisecond according to universal time from a given Date object?

function getTimeinUTC(dateObject)
{
    timeInMilliseconds=dateToday.getUTCMilliseconds();
    console.log(timeInMilliseconds);
}
//driver code for function
var dateToday = new Date('October 15, 1996 05:35:32:770 GMT+11:00');
getTimeinUTC(dateToday);


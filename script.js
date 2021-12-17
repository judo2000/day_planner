// get the current day
let myDay = moment().format("dddd, MMMM Do YYYY");
// target current day div
let currentDayEl = $('#currentDay');
// Append the date to current day div
currentDayEl.append(myDay);
// target the time blocks div
let timeBlocksEl = $('#timeBlocks');
let mySched = [];

// get the current hour
let currHour = (moment().get('hour'));

// function to check if the the 
//current hour is before, after, or the same as 
// each hour of the planner and setting the 
// past, present, or future class to the event
function whenIsNow(hour) {
    // this is the hour passed to the function
    let myHour = (moment(parseInt(hour)));
    // compare the hour passed in to the current hour
    // and set the class accordingly
    if (myHour.isSame(currHour)) {
        return 'present';
    } else if (myHour.isBefore(currHour)) {
        return 'past';
    } else  if (myHour.isAfter(currHour)) {
        return 'future';
    }
}

// function to convert hour displayed to 12 hour time 
// and add am or pm.
function convertTime(myHour) {
    if (myHour > 0 && myHour <= 12) {
        myHour = myHour + 'am';
      } else if (myHour > 12) {
        (myHour = myHour - 12 + 'pm');
      } else if (myHour == 0) {
        myHour = 12 + 'am';
      }
      return myHour;
}

// count from 9-18 and create each time block
for (let i = 9; i < 18; i++) {
    // get event[i] from local storage
    let currentEvent = localStorage.getItem(i);
    // if the current event is null set currentEvent to ''
    if (currentEvent == null) {
        currentEvent = '';
    }
    
    // create the timeBlocks
    let timeBlock = $(
        `<div class="row">
            <div id="${i}" class="col-1 d-flex justify-content-center hour">${convertTime(i)}</div>
            <div id="description" class="col-9 description ${whenIsNow(i)}"><textarea class="myText">${currentEvent}</textarea></div>
            <div class="col-2 pl-0"><button class="btn btn-lg saveBtn"><i class="far fa-save"></i></button></div>
        </div>`
    );
    // append time blocks to timeBlocksEl element
    timeBlocksEl.append(timeBlock);
}

// target save buttons in timeBlocksEl
const saveBtn = $(timeBlocksEl);
// create onclick event for save button
saveBtn.on('click', '.saveBtn', function(event) {
    // get event id or index
    let eventId = $(this).parent().parent().children().eq(0).attr('id');
    // get the text entered for the time block
    let eventText = $(this).parent().parent().children().eq(1).children().val();
    // save event to local storage
    localStorage.setItem(eventId, eventText);
});
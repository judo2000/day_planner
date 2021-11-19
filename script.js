let myDay = moment().format("dddd, MMMM Do YYYY");
let day = myDay;
///const today = $('#currentDay');
currentDay.prepend(myDay);
let containerEl = $('.container');
let timeBlockEl = $('.timeBlock')
let myEvents = [];
let eventText = '';

let mySched = [
    {
        hour:  8,
        activity: 'Pain in the ass'
    },
    {
        hour: 9,
        activity: ''
    },
    {
        hour: 10,
        activity: ''
    },
    {
        hour: 11,
        activity: ''
    },
    {
        hour: 12,
        activity: ''
    },
    {
        hour: 13,
        activity: ''
    },
    {
        hour: 14,
        activity: ''
    },
    {
        hour: 15,
        activity: ''
    },
    {
        hour: 16,
        activity: ''
    },
    {
        hour: 17,
        activity: ''
    },
    {
        hour: 18,
        activity: ''
    },
    {
        hour: 19,
        activity: ''
    },
    {
        hour: 20,
        activity: ''
    },
    {
        hour: 21,
        activity: ''
    },
    {
        hour: 22,
        activity: ''
    },
    {
        hour: 23,
        activity: ''
    }
]

//let currHour = moment().format("h a");
//let currHour =  (moment().format("hh:mma"));
let currHour = (moment().get('hour'));
function whenIsNow(hour) {
    myHour = (moment(parseInt(hour)));
    //console.log(hour);
    //console.log(myHour)
    //console.log(myHour.isSame(currHour));
    //myHour = myHour.toString();
    // console.log('Current Hour type ' + typeof currHour);
    // console.log('hour ' + typeof myHour);
    // console.log(hour == currHour);
    // console.log('myhour ' + hour);
    // console.log('currHour ' + currHour);
    // console.log(myHour.isAfter(currHour));
    if (myHour.isSame(currHour)) {
        return 'present';
    } else if (myHour.isBefore(currHour)) {
        return 'past';
    } else  if (myHour.isAfter(currHour)) {
        return 'future';
    }
}

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

for (let i = 9; i < 18; i++) {
    //let myHour = mySched[i].hour;
    
    //console.log(myHour);
    //let convertedHour = convertTime(myHour);
    //console.log(convertedHour);
    let currentEvent = localStorage.getItem(i);
    //console.log(myPlanner);
    if (currentEvent == null) {
        currentEvent = ''
    }
    let timeBlock = $(
        `<div class="row">
            <div id="${i}" class="col-1 d-flex justify-content-center hour">${convertTime(i)}</div>
            <div id="description" class="col-9 description ${whenIsNow(i)}"><textarea class="myText">${currentEvent}</textarea></div>
            <div class="col-2 pl-0"><button class="btn btn-lg saveBtn"><i class="far fa-save"></i></button></div>
        </div>`
    )
    let schedTime = $(`#${i}`);
    schedTime.append(myHour);
    containerEl.append(timeBlock);
}

const saveBtn = $(containerEl);
saveBtn.on('click', '.saveBtn', function(event) {
    // get event id
    
    let eventId = $(this).parent().parent().children().eq(0).attr('id');
    let eventText = $(this).parent().parent().children().eq(1).children().val();
    if (eventText) {
        
    }
    localStorage.setItem(eventId, eventText);
})

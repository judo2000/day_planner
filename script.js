let myDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
///const today = $('#currentDay');
currentDay.prepend(myDay);
let containerEl = $('.container');


let mySched = [
    {
        hour:  8,
        activity: ''
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
    },
    {
        hour: 0,
        activity: ''
    },
    {
        hour: 1,
        activity: ''
    },
    {
        hour: 2,
        activity: ''
    }
]


//let currHour = moment().format("h a");
let currHour =  moment().format("HH");
function whenIsNow(hour) {
    // console.log(currHour);
    // console.log(hour)
    // console.log(hour == currHour);
    if (hour == currHour) {
        return 'present';
    } else if (hour < currHour) {
        return 'past';
    } else  if (hour > currHour) {
        return 'future';
    }

}

function convertTime(myHour) {
    
    if (myHour > 0 && myHour <= 12) {
        myHour = myHour + ' am';
      } else if (myHour > 12) {
        (myHour = myHour - 12 + 'pm');
      } else if (myHour == 0) {
        myHour = 12 + ' am';
      }
      return myHour;
}

for (let i = 0; i < mySched.length; i++) {
    let myHour = mySched[i].hour;
    let convertedHour = convertTime(myHour);
    //console.log(convertedHour);
    let timeBlock = $(
        `<div class="row">
            <div id="${i}" class="col-12 col-md-2 hour">${convertedHour}</div>
            <div id="description" class="col-12 col-md-8 description ${whenIsNow(myHour)}"><textarea name="description">test</textarea></div>
            <div class="col-12 col-md-2 button"></div>
        </div>`
    )
    let schedTime = $(`#${i}`);
    schedTime.append(myHour);
    containerEl.append(timeBlock);
}


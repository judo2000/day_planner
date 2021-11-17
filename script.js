let myDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
///const today = $('#currentDay');
currentDay.prepend(myDay);
let containerEl = $('.container');
let timeBlockEl = $('.timeBlock')


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

for (let i = 0; i < mySched.length; i++) {
    let myHour = mySched[i].hour;
    
    //console.log(myHour);
    //let convertedHour = convertTime(myHour);
    //console.log(convertedHour);
    let timeBlock = $(
        `<div class="row">
            <div id="${i}" class="col-12 col-md-1 hour">${convertTime(moment(myHour, 'h:hh ').get('hour'))}</div>
            <div id="description" class="col-12 col-md-9 p-0 description ${whenIsNow(myHour)}"><textarea id=${i}" name="description">test</textarea></div>
            <div class="col-12 col-md-2 pl-0"><button class="btn btn-lg saveBtn"><i class="far fa-save"></i></button></div>
        </div>`
    )
    let schedTime = $(`#${i}`);
    schedTime.append(myHour);
    containerEl.append(timeBlock);
}

const saveBtn = $(containerEl);
saveBtn.on('click', '.saveBtn', function(event) {
    let toSave = $(event.target);
    let myTextArea = toSave.parent().parent().children().eq(1).children().eq(0).val();
    let myIndex = toSave.parent().parent().children().eq(0).attr('id');
    console.log(myIndex);
    //myTextArea.text(myTextArea);
    console.log(myTextArea);

})

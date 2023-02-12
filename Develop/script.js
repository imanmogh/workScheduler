// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var saveBtn = $('.saveBtn');
var past = $('#past');
var present = $('#present');
var future = $('#future');
var timeBlock = $('.time-block');
var today = dayjs()
var hour = dayjs().hour();

var nineAm = $('#9')
var tenAm = $('#10')
var elevenAm = $('#11')
var twelvePm = $('#12')
var onePm = $('#13')
var twoPm = $('#14')
var threePm = $('#15')
var fourPm = $('#16')
var fivePm = $('#17')

var userInput;
var hourSpan;

  /*
    TODO: Add code to get any user input that was saved in localStorage and set the values 
    of the corresponding textarea elements. HINT: How can the id attribute of each 
    time-block be used to do this?
  */

function getInput() { 
  console.log("Current Hour " + hour);

  var getNineAm = JSON.parse(localStorage.getItem("9AM"));
  nineAm.val(getNineAm);   

  var getTenAm = JSON.parse(localStorage.getItem("10AM"));
  tenAm.val(getTenAm); 

  var getElevenAm = JSON.parse(localStorage.getItem("11AM"));
  elevenAm.val(getElevenAm);    

  var getTwelvePm = JSON.parse(localStorage.getItem("12PM"));
  twelvePm.val(getTwelvePm);  

  var getOnePm = JSON.parse(localStorage.getItem("1PM"));
  onePm.val(getOnePm);  

  var getTwoPm = JSON.parse(localStorage.getItem("2PM"));
  onePm.val(getTwoPm);  

  var getThreePm = JSON.parse(localStorage.getItem("3PM"));
  onePm.val(getThreePm);  

  var getFourPm = JSON.parse(localStorage.getItem("4PM"));
  onePm.val(getFourPm);  

  var getFivePm = JSON.parse(localStorage.getItem("5PM"));
  onePm.val(getFivePm);  
}


  /*
    TODO: Add code to apply the past, present, or future class to each time block by 
    comparing the id to the current hour. HINTS: How can the id attribute of each 
    time-block be used to conditionally add or remove the past, present, and future classes? 
    How can Day.js be used to get the current hour in 24-hour time?
  */
function currentTime() {
      
  $(timeBlock).each(function () {
      var time = parseInt($(this).attr("id"));
      hour = parseInt(hour);

      if (hour > time) {
          $(this).addClass("past");
      } else if (hour < time) {
          $(this).addClass("future");
      } else {
          $(this).addClass("present");
      }
  });
}


$(function () {

    getInput();
    currentTime();

    $(".saveBtn").on("click", function(){
    var userInput = $(this).siblings('.description').val().trim();
    console.log(userInput);
    var hourSpan = $(this).siblings(".hour").text().trim();
    console.log(hourSpan);

    localStorage.setItem(hourSpan, JSON.stringify(userInput));
    
  })

 

  
  // TODO: Add code to display the current date in the header of the page.
  var dayWeek = today.format('[Today is] dddd[,] MMMM DD [-] hh[:]mm');
  $('#currentDay').text(dayWeek);
});

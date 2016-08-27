$(function() {
    var globalDate = new Date();
    var todayDateSlot = document.getElementById('today-date');
    var todayWeekDaySlot = document.getElementById('today-weekday');
    var todayMonthSlot = document.getElementById('today-month');
    var todayYearSlot = document.getElementById('today-year');
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var calendar = {
        yesterdayDate: globalDate.getDate() - 1,
        tomorrowDate: (function() {
           return globalDate.getDate() + 1;
        })(),
        todayDate: globalDate.getDate(),
        weekDay: (function() {
            return days[globalDate.getDay()];
        })(),
        month: (function() {
            return months[globalDate.getMonth()];
        })(),
        year: globalDate.getFullYear()
    }

    todayDateSlot.innerHTML = calendar.todayDate;
    todayWeekDaySlot.innerHTML = calendar.weekDay;
    todayMonthSlot.innerHTML = calendar.month;
    todayYearSlot.innerHTML = calendar.year;

    $('#tomorrow-block').click(function() {
        todayDateSlot.innerHTML = calendar.tomorrowDate;
        tomorrowDateSlot.innerHTML = 
    });

    $('#yesterday-block').click(function() {
        alert('working');
    })

});

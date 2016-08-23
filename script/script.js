$(function() {
    var globalDate = new Date();
    var todayDateSlot = document.getElementById('today-date');
    var todayWeekDaySlot = document.getElementById('today-weekday');
    var todayMonthSlot = document.getElementById('today-month');
    var todayYearSlot = document.getElementById('today-year');
    var calendar = { 
        yesterdayDate: globalDate.getDate() - 1,
        tomorrowDate: globalDate.getDate() + 1,
        todayDate: globalDate.getDate(),
        weekDay: (function() {
        	var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        	return days[globalDate.getDay()];
        })(),
        month: (function() {
        	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        	return months[globalDate.getMonth()];
        })(),
        year: globalDate.getFullYear()
    }
    
    todayDateSlot.innerHTML = calendar.todayDate;
    todayWeekDaySlot.innerHTML = calendar.weekDay;
    todayMonthSlot.innerHTML = calendar.month;
    todayYearSlot.innerHTML = calendar.year;
});

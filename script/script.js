$(function() {
    var globalDate = new Date();
    var todayDateSlot = document.getElementById('today-date');
    var calendar = { 
        yesterdayDate: globalDate.getDate() - 1,
        tomorrowDate: globalDate.getDate() + 1,
        todayDate: globalDate.getDate(),
        weekDay: globalDate.getDay(),
        month: globalDate.getMonth(),
        year: globalDate.getFullYear()
    }
    todayDateSlot.innerHTML = calendar.todayDate;
});

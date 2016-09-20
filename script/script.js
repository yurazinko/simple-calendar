$(function() {
    var globalDate = new Date();
    var calendar = angular.module('calendarApp', []);
    calendar.controller('calendarCtrl', function($scope) {
        $scope.todayDate = globalDate.getDate();
        $scope.test = 'hello world';
    })
})









/*
$(function() {
    var globalDate = new Date();

    var todayDateSlot = document.getElementById('today-date');
    var todayWeekDaySlot = document.getElementById('today-weekday');
    var todayMonthSlot = document.getElementById('today-month');
    var todayYearSlot = document.getElementById('today-year');
    
    var tomorrowDateSlot = document.getElementById('tomorrow-date');

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var yesterdayDate = globalDate.getDate() - 1;
    var tomorrowDate = (function() {
        return globalDate.getDate() + 1;
    })();

    var todayDate = globalDate.getDate();
    var weekDay = (function() {
        return days[globalDate.getDay()];
    })();

    var month = (function() {
        return months[globalDate.getMonth()];
    })();
    var year = globalDate.getFullYear();


    todayDateSlot.innerHTML = todayDate;
    todayWeekDaySlot.innerHTML = weekDay;
    todayMonthSlot.innerHTML = month;
    todayYearSlot.innerHTML = year;

    tomorrowDateSlot.innerHTML = tomorrowDate;

    $('#tomorrow-block').click(function() {
        todayDateSlot.innerHTML = tomorrowDate;

    });

    $('#yesterday-block').click(function() {
        alert('working');
    })

});
*/

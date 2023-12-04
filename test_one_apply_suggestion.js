    //Tab is your new favourite buttons

    
    function calculateDaysBetweenDates(date1, date2) {
        var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        var diffDays = Math.round(Math.abs((date1.getTime() - date2.getTime()) / (oneDay)));
        return diffDays;
    }
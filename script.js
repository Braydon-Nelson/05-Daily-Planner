$(document).ready(function () {

    // Place items in text areas from local storage for each text area
    $("textarea").each(function () {
        var item = localStorage.getItem("area" + $(this).data("field").toString());
        console.log(item);
        $(this).val(item);
    });

    // Save items to loacl storage
    $(".saveBtn").on("click", function () {
        // Select item before button
        var text = $(this).prev().val()
        // Select area's data number
        var textArea = $(this).prev().data("field")
        // Set item in local storage
        localStorage.setItem("area" + textArea, text);
        console.log("Text Area " + textArea + " saved!")
    })

    // keep checking the time and update the page
    function hoursUpdater() {
        // Instantly places day of the week into #currentDay
        $("#currentDay").text(moment().format('dddd'));

        // Check current hour
        var currentHour = moment().hours();

        $(".time-block").each(function () {
            // see what the block's hour is
            var blockHour = parseInt($(this).attr("id").split("-")[1]);
            // compare current our to block's hour and color accordingly
            if (blockHour < currentHour) {
                $(this.children[1]).addClass("past");
            } else if (blockHour > currentHour) {
                $(this.children[1]).addClass("future");
            } else {
                $(this.children[1]).addClass("present");
            }

        })

        console.log("Function ran");
    }

    hoursUpdater();

    // check time every 10 seconds
    var interval = setInterval(hoursUpdater, 10000)

});
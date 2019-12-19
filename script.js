$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        console.log($(this));

    })


    function hoursUpdater() {
        var currentDay = moment().day();
        $("#currentDay").text(moment().format('dddd'));

        var currentHour = moment().hours();

        $(".time-block").each(function () {

            var blockHour = parseInt($(this).attr("id").split("-")[1]);

            if (blockHour < currentHour) {
                $(this.children[1]).addClass("past");
            } else if (blockHour > currentHour) {
                $(this.children[1]).addClass("future");
            } else {
                $(this.children[1]).addClass("present");
            }

        })

        console.log("Function did run");
    }

    hoursUpdater();

    var interval = setInterval(hoursUpdater, 10000)

});
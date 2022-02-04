"use strict";
// ENUM TYPE: Javascript doesn't support enum
var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["Monday"] = 0] = "Monday";
    Weekdays[Weekdays["Tuesday"] = 1] = "Tuesday";
    Weekdays[Weekdays["Wedensday"] = 2] = "Wedensday";
    Weekdays[Weekdays["Thursday"] = 3] = "Thursday";
    Weekdays[Weekdays["Friday"] = 4] = "Friday";
    Weekdays[Weekdays["Saturday"] = 5] = "Saturday";
    Weekdays[Weekdays["Sunday"] = -1] = "Sunday";
})(Weekdays || (Weekdays = {}));
// console.log(Weekdays.Sunday);
// console.log(Weekdays[6]);
console.log(Weekdays);

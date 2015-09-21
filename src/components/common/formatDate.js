"use strict";

function formatDate(dateString){
  var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  var date = new Date(dateString);
  var month = monthNames[date.getMonth()];
  var year = date.getFullYear();
  return month + " " + year;
}


module.exports = formatDate;

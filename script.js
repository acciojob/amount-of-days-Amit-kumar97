//your JS code here. If required.
function daysOfAYear(year) {
	year = parseInt(year);

	if (year % 4 === 0) {
	    if (year % 100 === 0) {
	      if (year % 400 === 0) {
			return 366; // Divisible by 400, so it's a leap year
	      } 
		  else {
		    return 365; // Divisible by 100, not by 400, so it's not a leap year
	      }
		} 
		else {
			return 366; // Divisible by 4, not by 100, so it's a leap year
	    }
	  } 
	else {
	    return 365; // Not divisible by 4, so it's not a leap year
	}
}

let year = prompt("Enter a year: ");
alert(daysOfAYear(year));
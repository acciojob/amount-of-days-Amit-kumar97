//your JS code here. If required.
function daysOfAYear(year) {
	year = parseInt(year);

	if(year%4==0 && year%100==0 && year%400==0){
		return 366;
	}
	else if(year%4==0)
		return 366;
	else
		return 365;
}

let year = prompt("Enter a year: ");
alert(daysOfAYear(year));
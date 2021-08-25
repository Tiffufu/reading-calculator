function calculatePageAmount() {
	var firstPage = parseInt(document.getElementById('firstPage').value);
	var secondPage = parseInt(document.getElementById('secondPage').value);
	var dayNumber = 0;
	var days = parseInt(document.getElementById('days').value);
	var pageDifference = secondPage - firstPage + 1;
	var pagesPerDay = pageDifference / days;
	//Following variables for while loop in ReadingPlan()
	var pagesLeftToRead = pageDifference - 1; //-1 compensates for +1 in original pageDifference variable
	var range1;
	var range2 = firstPage + pagesPerDay;

	if (document.getElementById('result').innerHTML === "" || document.getElementById('plan').innerHTML === "") {
		if (isNaN(firstPage || secondPage) === true) {
			document.getElementById('result').innerHTML = "<p>Please enter a <b>numerical value</b> for your page numbers.</p>";
		} else if (isNaN(pageDifference) === true) {
			document.getElementById('result').innerHTML = "<p>Please enter the page numbers you wish to read.</p><div class='well'><p>Example.</p><p>I need to read between pages <b>33</b> - <b>163</b> in <b>5</b> days.</p>";
		} else if (pagesPerDay < 1) {
			document.getElementById('result').innerHTML = "<h3>You have " + pageDifference + " pages to read, including the first and last page.</h3><p><b style='font-size:large;'>If you read " + pagesPerDay.toFixed(2) + " pages every day, you would finish reading on time.</b></p><p>Looks like you'll be reading less than a page a day at this rate.</p><p>Why not try adjusting the amount of days you plan on reading? You got this!</p>";
		} else {
			document.getElementById('result').innerHTML = "<h3>You have " + pageDifference + " pages to read, including the first and last page.</h3><p><b style='font-size:large;'>If you read " + pagesPerDay.toFixed(2) + " pages every day, you would finish reading in " + days + " days.</b></p><hr><h2>Here's a reading plan:</h2>"
			readingPlan();
		}

		function readingPlan() {
			while (pagesLeftToRead > 0) {
				range1 = firstPage; //establishes original value of range1		
				range2 = firstPage + pagesPerDay - 1; //adds first page input from user to pagesPerDay to read. Calculates original vallue of range2
				firstPage = range2 + 1; //updates first page for next print row. Next row will equal last page read (range2) + 1
				dayNumber++; //adds to day counter
				$("#plan").before("<p><b>Day " + dayNumber + ":</b> Read pages " + range1.toFixed(0) + " to " + range2.toFixed(0) + "</p>");
				/*}*/
				pagesLeftToRead = (pagesLeftToRead - pagesPerDay);
			}
		}
	} else {
		document.getElementById('result').innerHTML = ""
		document.getElementById('plan').innerHTML = ""
	}

}
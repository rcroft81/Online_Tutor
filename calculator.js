function problemM()
	//completes the designated mathematical equation
	//gives a result and a congrats or wrong answer alert 

	{var newProblem, newProblem2

	newProblem = Math.floor(Math.random() * 12);
	newProblem = parseFloat(newProblem);
	document.getElementById('equationBox').value = newProblem;

	newProblem2 = Math.floor(Math.random() * 12);
	newProblem2 = parseFloat(newProblem2);
	document.getElementById('equationBox2').value = newProblem2;
}
function problem()
	//completes the designated mathematical equation
	//gives a result and a congrats or wrong answer alert 

	{var newProblemAS, newProblemAS2
	newProblemAS = Math.floor(Math.random() * 24);
	newProblemAS = parseFloat(newProblemAS);
	document.getElementById('equationBox').value = newProblemAS;

	newProblemAS2 = Math.floor(Math.random() * 24);
	newProblemAS2 = parseFloat(newProblemAS2);
	document.getElementById('equationBox2').value = newProblemAS2;
	
	}

function multiply() 
	//completes the designated mathematical equation
	//gives a result and a congrats or wrong answer alert 	
	
	{var newProblem, newProblem2, check, answer
	
	newProblem = document.getElementById('equationBox').value;
	newProblem = parseFloat(newProblem);

	newProblem2 = document.getElementById('equationBox2').value;
	newProblem2 = parseFloat(newProblem2);
	answer = (newProblem * newProblem2);

	check = document.getElementById('inputBox').value;
	check = parseFloat(check);

	if (check == answer){
		alert("Congratulations!! " +newProblem+ "*" +newProblem2+ "=" +check+ " is correct");
			if (check == answer){
			document.getElementById('answersRight').value = 
				parseFloat(document.getElementById('answersRight').value) +1;
			}
	}
	else{
		alert("I'm sorry " +check+ " is wrong. The correct Answer is " +newProblem+ "*" +newProblem2+ "=" +answer+ ".");
		}
	
	if (check != answer){
		document.getElementById('answersWrong').value =
			parseFloat(document.getElementById('answersWrong').value) +1;
		}
	
}

function subtract() 
	//completes the designated mathematical equation
	//gives a result and a congrats or wrong answer alert 	
	
	{var newProblem, newProblem2, check, answer
	
	newProblemAS = document.getElementById('equationBox').value;
	newProblemAS = parseFloat(newProblemAS);

	newProblemAS2 = document.getElementById('equationBox2').value;
	newProblemAS2 = parseFloat(newProblemAS2);
	answer = (newProblemAS - newProblemAS2);

	check = document.getElementById('inputBox').value;
	check = parseFloat(check);

	if (check == answer){
		alert("Congratulations!! " +newProblemAS+ "-" +newProblemAS2+ "=" +check+ ".");
			if (check == answer){
			document.getElementById('answersRight').value = 
				parseFloat(document.getElementById('answersRight').value) +1;
			}
	}
	else{
		alert("I'm sorry " +check+ " is wrong. The correct Answer is " +newProblemAS+ "-" +newProblemAS2+ "=" +answer+ ".");
		}
	
	if (check != answer){
		document.getElementById('answersWrong').value =
			parseFloat(document.getElementById('answersWrong').value) +1;
		}
	
}

function add() 
	//completes the designated mathematical equation
	//gives a result and a congrats or wrong answer alert 	
	
	{var newProblemAS, newProblemAS2, check, answer
	
	newProblemAS = document.getElementById('equationBox').value;
	newProblemAS = parseFloat(newProblemAS);

	newProblemAS2 = document.getElementById('equationBox2').value;
	newProblemAS2 = parseFloat(newProblemAS2);
	answer = (newProblemAS + newProblemAS2);

	check = document.getElementById('inputBox').value;
	check = parseFloat(check);

	if (check == answer){
		alert("Congratulations!! " +newProblemAS+ "+" +newProblemAS2+ "=" +check+ ".");
			if (check == answer){
			document.getElementById('answersRight').value = 
				parseFloat(document.getElementById('answersRight').value) +1;
			}
	}
	else{
		alert("I'm sorry " +check+ " is wrong. The correct Answer is " +newProblemAS+ "+" +newProblemAS2+ "=" +answer+ ".");
		}
	
	if (check != answer){
		document.getElementById('answersWrong').value =
			parseFloat(document.getElementById('answersWrong').value) +1;
		}
	
}


function reset()
	//completes the designated mathematical equation
	//gives a result and a congrats or wrong answer alert 	
{
	document.getElementById("inputBox").value = 0;
	document.getElementById("answersRight").value = 0;
	document.getElementById("answersWrong").value = 0;
	

}
	

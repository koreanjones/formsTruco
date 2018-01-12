alert("working");
// create function to populate

function populate(s1,s2){
	var s1 = document.getElementById(s1);
	var s2 = document.getElementById(s2);
	s2.innerHTML = "";
	if(s1.value == "CAFE"){
		var optionArray = ["|","2.0|2.0 oz","3.125|3.125 oz","8|8 oz","8.25|8.25 oz","12|12 oz","12.5|12.5 oz","13|13 oz","16|16 oz","18|18 oz","20|20 oz","24|24 oz","28|28 oz"];
	} else if(s1.value == "CANT MED"){
		var optionArray = ["|","16|16 oz","20|20 oz","24|24 oz","47|47 oz"];
	} else if(s1.value == "CANT MILD"){
		var optionArray = ["|","16|16 oz","20|20 oz","24|24 oz","47|47 oz"];
	} else if(s1.value == "CHKY MED"){
		var optionArray = ["|","16|16 oz","19.0|19.0 oz"];
	} else if(s1.value == "CHKY MED CUP"){
		var optionArray = ["|","16|16 oz","20|20 oz","24|24 oz","47|47 oz"];
	} else if(s1.value == "CHKY MILD"){
		var optionArray = ["|","4|4 oz"];
	} else if(s1.value == "FDC CF"){
		var optionArray = ["|","16|16 oz"];
	} else if(s1.value == "FIESTA DIPPIN CHIPS"){
		var optionArray = ["|","9|9 oz","13|13 oz"];
	} else if(s1.value == "HOLIDAY"){
		var optionArray = ["|","12|12 oz","14|14 oz"];
	} else if(s1.value == "NACHO"){
		var optionArray = ["|","1|1 oz","2.0|2.0 oz","2.875|2.875 oz","9.5|9.5 oz","13|13 oz"];
	} else if(s1.value == "O.CHKY MED"){
		var optionArray = ["|","16|16 oz"];
	} else if(s1.value == "O.CHKY MILD"){
		var optionArray = ["|","16|16 oz"];
	} else if(s1.value == "ORG BLUE"){
		var optionArray = ["|","8|8 oz","24|24 oz"];
	} else if(s1.value == "ORG PURP STRIP"){
		var optionArray = ["|","22|22 oz"];
	} else if(s1.value == "ORG YELLOW"){
		var optionArray = ["|","8|8 oz"];
	} else if(s1.value == "ORIG HOT"){
		var optionArray = ["|","16|16 oz","20|20 oz","24|24 oz"];
	} else if(s1.value == "ORIG MED"){
		var optionArray = ["|","16|16 oz","20|20 oz","24|24 oz","47|47 oz"];
	} else if(s1.value == "ORIG MILD"){
		var optionArray = ["|","16|16 oz","20|20 oz","24|24 oz"];
	} else if(s1.value == "RANCH"){
		var optionArray = ["|","1|1 oz","2.0|2.0 oz","2.875|2.875 oz","9.5|9.5 oz", "13|13 oz"];
	} else if(s1.value == "ROUNDS"){
		var optionArray = ["|","8.25|8.25 oz","11.5|11.5 oz","12.5|12.5 oz","13|13 oz","16|16 oz"];
	} else if(s1.value == "SALSA VERDE"){
		var optionArray = ["|","15|15 oz"];
	} else if(s1.value == "STRIPS"){
		var optionArray = ["|","12|12 oz","16|16 oz"];
	} else if(s1.value == "THINS"){
		var optionArray = ["|","8.25|8.25 oz","10|10 oz","16|16 oz"];
	} else if(s1.value == "WHT QUESO"){
		var optionArray = ["|","15.5|15.5 oz","17.5|17.5 oz"];
	} else if(s1.value == "YLW QUESO"){
		var optionArray = ["|","20|20 oz","23|23 oz"];
	} else if(s1.value == "YLW QUESO CUP"){
		var optionArray = ["|","3.625|3.625 oz"];
	}
	for(var option in optionArray){
		var pair = optionArray[option].split("|");
		var newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		s2.options.add(newOption);
	}
}



var room = document.getElementById("objects");

document.getElementById("fancyBox").style.display = "none";
document.getElementById("cardBox").style.display = "none";
document.getElementById("madlibBox").style.display = "none";


var ww = 0;


var tempIMG = 0;
var tempP = 0;

for(var i = 0; i < furnitureArray.length; i++)
{
	tempP += 50;
	tempIMG = tempP + 50;
	room.innerHTML += "<p style='position:absolute; left: " + ww + "px; top:" + tempP + "px'>" + furnitureArray[i].name + "</p>";
	room.innerHTML += "<b>";
	room.innerHTML += "<img alt='" + furnitureArray[i].name + "' src='" + furnitureArray[i].image + "' id='furniture" + i + "' class = 'furnitureObjs' style='position:absolute; left: " + ww + "px; top: " + tempIMG + "px'/>";
	room.innerHTML += "<b>";
	tempP = tempIMG; 
}

for(var i = 0; i < furnitureArray.length; i++)
{
	var idName = "furniture" + String(i);
	var placeholder = document.getElementById(idName);
	
	placeholder.addEventListener("mousedown", handleMouseDown, false);
}



var mouseX = 0;
var mouseY = 0;
var eleMouseX = 0;
var eleMouseY = 0;

function handleMouseMove(evt)
{
	evt.preventDefault();

	var diffX = evt.clientX - eleMouseX;
   	var diffY = evt.clientY - eleMouseY;

	ele.style.left = diffX + 'px';
	ele.style.top = diffY + 'px';
    	
  	ele.style.cursor = "move";
  
 	image.style.zIndex= "1";
}

function handleMouseDown(evt) 
{ 
	mouseX = evt.clientX;
    	mouseY = evt.clientY;
  
	ele = this;

	eleMouseX = mouseX - ele.offsetLeft;
    	eleMouseY = mouseY - ele.offsetTop;

	ele.style.zIndex= "1";
	ele.style.cursor = "move";

 	document.addEventListener("mousemove", handleMouseMove, false);
}



function handleMouseUp() 
{
	document.removeEventListener("mousemove", handleMouseMove);
	ele.style.cursor = "default";
	ele.style.zIndex= "0";
}


window.addEventListener('mouseup', handleMouseUp, false);





function restartFunc()
{
	var room = document.getElementById("objects");

	room.innerHTML = "";

	var tempIMG = 0;
	var tempP = 0;
	for(var i = 0; i < furnitureArray.length; i++)
	{
		tempP += 50;
		tempIMG = tempP + 50;
		room.innerHTML += "<p style='position:absolute; left: " + ww + "px; top:" + tempP + "px'>" + furnitureArray[i].name + "</p>";
		room.innerHTML += "<b>";

		room.innerHTML += "<img alt='" + furnitureArray[i].name + "' src='" + furnitureArray[i].image + "' id='furniture" + i + "' class = 'furnitureObjs' style='position:absolute; left: " + ww + "px; top: " + tempIMG + "px'/>";

		room.innerHTML += "<b>";

		tempP = tempIMG;
	}


	for(var i = 0; i < furnitureArray.length; i++)
	{
		var idName = "furniture" + String(i);
		var placeholder = document.getElementById(idName);
	
		placeholder.addEventListener("mousedown", handleMouseDown, false);
	}
}


function cleanUpFunc()
{
	var dormRoom = document.getElementById("dormRoom");

	var tempIMG = 0;
	var tempP = 0;

	for(var i = 0; i < furnitureArray.length; i++)
	{
		tempP += 50;
		tempIMG = tempP + 50;
		var idName = "furniture" + String(i);
		var obj = document.getElementById(idName);
	
	
		if(!((obj.offsetLeft + obj.offsetWidth) < (dormRoom.offsetLeft + dormRoom.offsetWidth) && (obj.offsetTop + obj.offsetHeight) < (dormRoom.offsetTop + dormRoom.offsetHeight)))
		{

			obj.style.top = tempIMG + "px";
			obj.style.left = ww + "px";
		}
		else if(!((obj.offsetLeft) > (dormRoom.offsetLeft) && (obj.offsetTop) > (dormRoom.offsetTop)))
		{

			obj.style.top = tempIMG + "px";
			obj.style.left = ww + "px";
		}

		tempP = tempIMG;
	}
}



var onec = false;
var oneh = false;
var twoc = false;
var twoh = false;
var threec = false;
var threeh = false;
var temp = false;
var counter = 0;


function change1c() 
{
	if(counter < 3)
	{
		document.getElementById('1c').src='img/1clubs.png';
		onec = true;
		counter += 1;
		if(counter == 2)
		{
			isMatch();
			if (temp === false)
			{
				counter = 3;
				setTimeout(() => { backsofcards();}, 1500);
			}
		}
	}
	
}


function change1h() 
{
	if(counter < 3)
	{
		document.getElementById('1h').src='img/1hearts.png';
		oneh = true;
		counter += 1;
		if(counter == 2)
		{
			isMatch();
			if (temp === false)
			{
				counter = 3;
				setTimeout(() => { backsofcards();}, 1500);
			}			
		}
	}
	
}



function change2c() 
{

	if(counter < 3)
	{
		document.getElementById('2c').src='img/2clubs.png';
		twoc = true;
		counter += 1;
		if(counter == 2)
		{
			isMatch();
			if (temp === false)
			{
				counter = 3;
				setTimeout(() => { backsofcards();}, 1500);
			}			
		}
	}

}


function change2h() 
{
	
	if(counter < 3)
	{
		document.getElementById('2h').src='img/2hearts.png';
		twoh = true;
		counter += 1;
		if(counter == 2)
		{
			isMatch();
			if (temp === false)
			{
				counter = 3;
				setTimeout(() => { backsofcards();}, 1500);
			}			
		}
	}

}



function change3c() 
{
	
	if(counter < 3)
	{
		document.getElementById('3c').src='img/3clubs.png';
		threec = true;
		counter += 1;
		if(counter == 2)
		{
			isMatch();
			if (temp === false)
			{
				counter = 4;
				setTimeout(() => { backsofcards(); }, 1500);
			}
		}
	}
	
}



function change3h() 
{
	
	if(counter < 3)
	{
		document.getElementById('3h').src='img/3hearts.png';
		threeh = true;
		counter += 1;
		if(counter == 2)
		{
			isMatch();
			if (temp === false)
			{
				counter = 4;
				setTimeout(() => { backsofcards();}, 1500);
			}			
		}
	}
	
}



function isMatch()
{
	if(onec === true && oneh === true)
	{
		counter = 4;
  		setTimeout(() => 
		{
     			document.getElementById('1c').style.visibility = "hidden";
    			document.getElementById('1h').style.visibility = "hidden";
			counter = 0;
  		}, 1500);
	
		temp = true;
	}


	if(twoc  === true && twoh === true)
	{
		counter = 4;
  		setTimeout(() => 
		{
     			document.getElementById('2c').style.visibility = "hidden";
    			document.getElementById('2h').style.visibility = "hidden";
			counter = 0;
  		}, 1500);
		
		temp = true;
	}


	if(threec  === true && threeh === true)
	{
		counter = 4;
  		setTimeout(() => 
		{
     			document.getElementById('3c').style.visibility = "hidden";
    			document.getElementById('3h').style.visibility = "hidden";
			counter = 0;
  		}, 1500);

		temp = true;
	}
	

	else
	{
		counter += 1;
		temp = false;
	}
}




function backsofcards()
{
	document.getElementById('1c').src='img/back.png';
	document.getElementById('1h').src='img/back.png';
	document.getElementById('2c').src='img/back.png';
	document.getElementById('2h').src='img/back.png';
	document.getElementById('3c').src='img/back.png';
	document.getElementById('3h').src='img/back.png';
	
	
	onec = false;	
	oneh = false;
	twoc = false;
	twoh = false;
	threec = false;
	threeh = false;

	counter = 0;
}



function restart() 
{
	backsofcards();
  	var cardobj = document.getElementsByClassName("card");
  	for(var cobj of cardobj) 
	{
  		var rand = Math.floor(Math.random() * Math.floor(7));
		cobj.style.order = rand;
  	}
	
	document.getElementById('1c').style.visibility = "visible";
	document.getElementById('1h').style.visibility = "visible";
	document.getElementById('2c').style.visibility = "visible";
	document.getElementById('2h').style.visibility = "visible";
	document.getElementById('3c').style.visibility = "visible";
	document.getElementById('3h').style.visibility = "visible";

	backsofcards();

}

window.onload = restart;




function makeMadLib() 
{
	var TABox = document.getElementById("userInput");

  	var str = TABox.value;
  
  	var ele = document.getElementById("responseList");

	ele.innerHTML = "";  

	var counter = 0;

	var start = 0;
	var end = 0;


  	for(var i = 0; i < str.length; i++)
  	{
		if(!str[i].includes("_") && !str[i].includes(" "))
        	{
			if(counter == 0)
			{
        			ele.innerHTML += "<p style='display:inline'>" + str[i] + "</p>";
			}
        	}
		else if(!str[i].includes("_") && str[i].includes(" "))
		{ 
			if(counter == 0)
			{
        			ele.innerHTML += "<p style='display:inline'>" + " " + "</p>";
			} 
		}
        	else if(str[i].includes("_"))
        	{
			counter++;
			if (counter == 1)
			{ 
				start = i; 
			}
			else if (counter == 2)
			{
				end = i;
				var betweenWords = str.substring(start,end);				
			
				var ph = betweenWords.replace(/_/g,"");
        			ele.innerHTML += "<input type = 'text'; class = 'response'; placeholder='" + ph + "'>";

				counter = 0;
			}
        	}	
  	}
}

  
function showResult()
{
	var TABox = document.getElementById("userInput");

  	var str = TABox.value;
  	var res = str.split(" ");
  
  	var elem = document.getElementById("responseResult");

    
  	elem.innerHTML = "";
  
  	var userResponse = document.getElementsByClassName("response");


	var counter = 0;

	for(var i = 0; i < res.length; i++)
  	{
  		if(res[i].includes("_"))
        	{
        		res[i] = userResponse[counter].value; 
            		counter++;
        	}
        	elem.innerHTML += "<p style='display:inline'>" + res[i] + " " + "</p>";
	}
}


function cardsFunc() 
{
  	document.getElementById("fancyBox").style.display = "none";
	document.getElementById("madlibBox").style.display = "none";
	document.getElementById("cardBox").style.display = "block";
	document.getElementById("directions").style.display = "none";

  	document.getElementById("roomDirectionsBox").style.display = "none";
	document.getElementById("cardsDirectionsBox").style.display = "none";
	document.getElementById("madlibDirectionsBox").style.display = "none";
}

function roomFunc() 
{
  	document.getElementById("fancyBox").style.display = "block";
	document.getElementById("cardBox").style.display = "none";
	document.getElementById("madlibBox").style.display = "none";
	document.getElementById("directions").style.display = "none";

  	document.getElementById("roomDirectionsBox").style.display = "none";
	document.getElementById("cardsDirectionsBox").style.display = "none";
	document.getElementById("madlibDirectionsBox").style.display = "none";
}
function madlibFunc() 
{
  	document.getElementById("fancyBox").style.display = "none";
	document.getElementById("cardBox").style.display = "none";
	document.getElementById("madlibBox").style.display = "block";
	document.getElementById("directions").style.display = "none";

  	document.getElementById("roomDirectionsBox").style.display = "none";
	document.getElementById("cardsDirectionsBox").style.display = "none";
	document.getElementById("madlibDirectionsBox").style.display = "none";
}

function directionsFunc() 
{
  	document.getElementById("fancyBox").style.display = "none";
	document.getElementById("cardBox").style.display = "none";
	document.getElementById("madlibBox").style.display = "none";
	document.getElementById("directions").style.display = "block";

  	document.getElementById("roomDirectionsBox").style.display = "none";
	document.getElementById("cardsDirectionsBox").style.display = "none";
	document.getElementById("madlibDirectionsBox").style.display = "none";

	
}


function roomDirectionsFunc() 
{
  	document.getElementById("roomDirectionsBox").style.display = "block";
	document.getElementById("cardsDirectionsBox").style.display = "none";
	document.getElementById("madlibDirectionsBox").style.display = "none";
	document.getElementById("directions").style.display = "none";

  	document.getElementById("fancyBox").style.display = "none";
	document.getElementById("cardBox").style.display = "none";
	document.getElementById("madlibBox").style.display = "none";
}


function cardsDirectionsFunc() 
{
  	document.getElementById("roomDirectionsBox").style.display = "none";
	document.getElementById("cardsDirectionsBox").style.display = "block";
	document.getElementById("madlibDirectionsBox").style.display = "none";
	document.getElementById("directions").style.display = "none";

  	document.getElementById("fancyBox").style.display = "none";
	document.getElementById("cardBox").style.display = "none";
	document.getElementById("madlibBox").style.display = "none";


}


function madlibDirectionsFunc() 
{
  	document.getElementById("roomDirectionsBox").style.display = "none";
	document.getElementById("cardsDirectionsBox").style.display = "none";
	document.getElementById("madlibDirectionsBox").style.display = "block";
	document.getElementById("directions").style.display = "none";

  	document.getElementById("fancyBox").style.display = "none";
	document.getElementById("cardBox").style.display = "none";
	document.getElementById("madlibBox").style.display = "none";


}



"use strict";

var counter = 0;

function rightAction()
{
	if (counter < photoArray.length)
	{
		if (counter == 2)
		{
			counter = 0;
			document.getElementById('photo').src = photoArray[counter].filename;
			document.getElementById('caption').innerHTML = photoArray[counter].caption;
		}
		else 
		{
			counter++;
			document.getElementById('photo').src = photoArray[counter].filename;
			document.getElementById('caption').innerHTML = photoArray[counter].caption;
		}
	}
} 

function leftAction()
{
	if (counter < photoArray.length)
	{
		if (counter == 0)
		{
			counter = 2;
			document.getElementById('photo').src = photoArray[counter].filename;
			document.getElementById('caption').innerHTML = photoArray[counter].caption;
		}
		else 
		{
			counter--;
			document.getElementById('photo').src = photoArray[counter].filename;
			document.getElementById('caption').innerHTML = photoArray[counter].caption;
		}
	}
} 







var MDcounter = 0;

function MDrightAction()
{
	if (MDcounter < MDphotoArray.length)
	{
		if (MDcounter == 4)
		{
			MDcounter = 0;
			document.getElementById('MDphoto').src = MDphotoArray[MDcounter].filename;
			document.getElementById('MDcaption').innerHTML = MDphotoArray[MDcounter].caption;
		}
		else 
		{
			MDcounter++;
			document.getElementById('MDphoto').src = MDphotoArray[MDcounter].filename;
			document.getElementById('MDcaption').innerHTML = MDphotoArray[MDcounter].caption;
		}
	}
} 

function MDleftAction()
{
	if (MDcounter < MDphotoArray.length)
	{
		if (MDcounter == 0)
		{
			MDcounter = 4;
			document.getElementById('MDphoto').src = MDphotoArray[MDcounter].filename;
			document.getElementById('MDcaption').innerHTML = MDphotoArray[MDcounter].caption;
		}
		else 
		{
			MDcounter--;
			document.getElementById('MDphoto').src = MDphotoArray[MDcounter].filename;
			document.getElementById('MDcaption').innerHTML = MDphotoArray[MDcounter].caption;
		}
	}
} 









var DRcounter = 0;

function DRrightAction()
{
	if (DRcounter < DRphotoArray.length)
	{
		if (DRcounter == 2)
		{
			DRcounter = 0;
			document.getElementById('DRphoto').src = DRphotoArray[DRcounter].filename;
			document.getElementById('DRcaption').innerHTML = DRphotoArray[DRcounter].caption;
		}
		else 
		{
			DRcounter++;
			document.getElementById('DRphoto').src = DRphotoArray[DRcounter].filename;
			document.getElementById('DRcaption').innerHTML = DRphotoArray[DRcounter].caption;
		}
	}
} 

function DRleftAction()
{
	if (DRcounter < DRphotoArray.length)
	{
		if (DRcounter == 0)
		{
			DRcounter = 4;
			document.getElementById('DRphoto').src = DRphotoArray[DRcounter].filename;
			document.getElementById('DRcaption').innerHTML = DRphotoArray[DRcounter].caption;
		}
		else 
		{
			DRcounter--;
			document.getElementById('DRphoto').src = DRphotoArray[DRcounter].filename;
			document.getElementById('DRcaption').innerHTML = DRphotoArray[DRcounter].caption;
		}
	}
} 








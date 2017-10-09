function changeText() {
document.getElementById("textChange").innerHTML="thanks for liking my Website"; 
}

var space = " " ;
var pos = 0 ;
var msg= "WHAAATTTT SSSSSSSSSSUUUUUUUUUUUUUUUUUUUUUUUPPPPPPPPPPPPPPPP";

function Scroll () {
	document.title = msg.substring(pos, msg.length) + space + msg.substring(0,pos);
	
		pos++;
		if (pos >msg.length) pos =0;
		window.setTimeout("Scroll()",99);
		}
		Scroll();
	
		
	function size(){
		
		var checkbox = document.getElementById("bling").checked;

		document.getElementById("text").style.fontSize = "24pt";

		if(checkbox == true){

			document.getElementById("text").style.textDecoration = "underline";
			document.getElementById("text").style.color = "green";
			document.getElementById("text").style.fontWeight = "bold";
			document.getElementById("text").style.fontFamily = "Algerian";

		}
		else
		{
			document.getElementById("text").style.textDecoration = "none";
			document.getElementById("text").style.color = "#000";
			document.getElementById("text").style.fontWeight = "normal";
			document.getElementById("text").style.fontFamily = "Arial";
		}
	}


	function snoopify(){
		
			document.getElementById("text").style.textTransform = "capitalize";

			var text = document.getElementById("text").value;

			var parts = text.split("\n");


			for (i=0; i < parts.length; i++)
			{
				if(parts[i] != "")
					parts[i] = parts[i].concat("-izzle");
			}

			text =  parts.join("\n");

		 document.getElementById("text").value = text;


	}
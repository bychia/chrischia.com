// JavaScript Document
function getXMLHTTPRequest(){
	var req = false;
	try{
		req = new XMLHttpRequest(); //Firefox
	}
	catch(err1)
		{
			try{
				req = new ActiveXObject("Msxml2.XMLHTTP"); // some versions of IE
			}
			catch(err2)
				{
					try{
						new ActiveXObject("Microsoft.XMLHTTP"); // some versions of IE
					}
					catch(err3)
						{
							req = false;
						}
				}
		}
	return req;
}

var http = getXMLHTTPRequest();


//function needed to verify the password
function photo_cc(galleryName){
	var url = "scripts/ajax_photo.php";
	var myRand = parseInt(Math.random()*999999999999999);
	var parameters = "gallery=" + encodeURI( galleryName );

	var modurl = url + "?rand="+myRand;

		http.open("GET", modurl, true);

		http.onreadystatechange = function(){
			if(http.readyState == 4){
				if(http.status == 200){
					var idValue = http.responseText;
							document.getElementById("hidden-container").innerHTML = idValue;
							return document.getElementById(galleryName).onclick()
				}
			}
		}
    	http.send(parameters);
}

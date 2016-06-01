// JavaScript Document updatebutton.js

// Use ActiveX to call your button's argument XML file
var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
xmlDoc.async="false";
xmlDoc.load("C:\\ProgramData\\CDP\\SnapBack\\APPs\\mypcupdate\\btn0arguments.xml");

var arguments = xmlDoc.getElementsByTagName('argument');
var programs = xmlDoc.getElementsByTagName('program');
var actions = xmlDoc.getElementsByTagName('action');

// Script what you want to happen based upon the arguments returned
if ( xmlDoc.getElementsByTagName("argument").length == 0 ){
	var wsh = new ActiveXObject("WScript.Shell");
	wsh.popup( "No programs were selected to be updated automatically. Please select some options and run the app again.", 5, "Update My PC" );

	wsh = null;
}

else if (arguments){

	for (var i = 0; i < arguments.length; i++) {
		var argument = arguments[i];	
		var program = programs[i].firstChild.nodeValue;
		var action = actions[i].firstChild.nodeValue;
		// Note: The "program" name must match the Arguments Values you defined in applib.js
		// Note: The "action" will either always be "cdpcertified" or "updateasap"
		
		// Windows Updates
			// Windows Updates
			if (program == "Windows Updates" && action == "cdpcertified"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Windows Updates selected to auto update after CDP certification", 5, "Update My PC" );

				wsh = null;
			}
			else if (program == "Windows Updates" && action == "updateasap"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Windows Updates selected to auto update as soon as update is made available", 5, "Update My PC" );

				wsh = null;
			}
		
		// Browsers
			// Chrome
			else if (program == "Chrome" && action == "cdpcertified"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Chrome selected to auto update after CDP certification", 5, "Update My PC" );

				wsh = null;
			}
			else if (program == "Chrome" && action == "updateasap"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Chrome selected to auto update as soon as update is made available", 5, "Update My PC" );

				wsh = null;
			}
			// Firefox
			else if (program == "Firefox" && action == "cdpcertified"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Firefox selected to auto update after CDP certification", 5, "Update My PC" );

				wsh = null;
			}
			else if (program == "Firefox" && action == "updateasap"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Firefox selected to auto update as soon as update is made available", 5, "Update My PC" );

				wsh = null;
			}
			// Edge
			else if (program == "Edge (Internet Explorer)" && action == "cdpcertified"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Edge selected to auto update after CDP certification", 5, "Update My PC" );

				wsh = null;
			}
			else if (program == "Edge (Internet Explorer)" && action == "updateasap"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Edge selected to auto update as soon as update is made available", 5, "Update My PC" );

				wsh = null;
			}
			// Opera
			else if (program == "Opera" && action == "cdpcertified"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Opera selected to auto update after CDP certification", 5, "Update My PC" );

				wsh = null;
			}
			else if (program == "Opera" && action == "updateasap"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Opera selected to auto update as soon as update is made available", 5, "Update My PC" );

				wsh = null;
			}
			// Vivaldi
			else if (program == "Vivaldi" && action == "cdpcertified"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Vivaldi selected to auto update after CDP certification", 5, "Update My PC" );

				wsh = null;
			}
			else if (program == "Vivaldi" && action == "updateasap"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Vivaldi selected to auto update as soon as update is made available", 5, "Update My PC" );

				wsh = null;
			}
			
		// Office 365
			// Office 365 Home
			else if (program == "Office 365 Home" && action == "cdpcertified"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Office 365 Home selected to auto update after CDP certification", 5, "Update My PC" );

				wsh = null;
			}
			else if (program == "Office 365 Home" && action == "updateasap"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Office 365 Home selected to auto update as soon as update is made available", 5, "Update My PC" );

				wsh = null;
			}
			// Office 365 Business
			else if (program == "Office 365 Business" && action == "cdpcertified"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Office 365 Business selected to auto update after CDP certification", 5, "Update My PC" );

				wsh = null;
			}
			else if (program == "Office 365 Business" && action == "updateasap"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Office 365 Business selected to auto update as soon as update is made available", 5, "Update My PC" );

				wsh = null;
			}
			// Office 365 Business Premium
			else if (program == "Office 365 Business Premium" && action == "cdpcertified"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Office 365 Business Premium selected to auto update after CDP certification", 5, "Update My PC" );

				wsh = null;
			}
			else if (program == "Office 365 Business Premium" && action == "updateasap"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Office 365 Business Premium selected to auto update as soon as update is made available", 5, "Update My PC" );

				wsh = null;
			}
			// Office 365 Business Essentials
			else if (program == "Office 365 Business Essentials" && action == "cdpcertified"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Office 365 Business Essentials selected to auto update after CDP certification", 5, "Update My PC" );

				wsh = null;
			}
			else if (program == "Office 365 Business Essentials" && action == "updateasap"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Office 365 Business Essentials selected to auto update as soon as update is made available", 5, "Update My PC" );

				wsh = null;
			}
		
		// Productivity Suites
			// OpenOffice
			else if (program == "OpenOffice" && action == "cdpcertified"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "OpenOffice selected to auto update after CDP certification", 5, "Update My PC" );

				wsh = null;
			}
			else if (program == "OpenOffice" && action == "updateasap"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "OpenOffice selected to auto update as soon as update is made available", 5, "Update My PC" );

				wsh = null;
			}
			// Google Apps
			else if (program == "Google Apps" && action == "cdpcertified"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Google Apps selected to auto update after CDP certification", 5, "Update My PC" );

				wsh = null;
			}
			else if (program == "Google Apps" && action == "updateasap"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Google Apps selected to auto update as soon as update is made available", 5, "Update My PC" );

				wsh = null;
			}
			
		// Communication/Messaging Programs
			// Skype
			else if (program == "Skype" && action == "cdpcertified"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Skype selected to auto update after CDP certification", 5, "Update My PC" );

				wsh = null;
			}
			else if (program == "Skype" && action == "updateasap"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Skype selected to auto update as soon as update is made available", 5, "Update My PC" );

				wsh = null;
			}

		// Sync Programs
			// BitTorrent Sync
			else if (program == "BitTorrent Sync" && action == "cdpcertified"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "BitTorrent Sync selected to auto update after CDP certification", 5, "Update My PC" );

				wsh = null;
			}
			else if (program == "BitTorrent Sync" && action == "updateasap"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "BitTorrent Sync selected to auto update as soon as update is made available", 5, "Update My PC" );

				wsh = null;
			}
			// GoodSync
			else if (program == "GoodSync" && action == "cdpcertified"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "GoodSync selected to auto update after CDP certification", 5, "Update My PC" );

				wsh = null;
			}
			else if (program == "GoodSync" && action == "updateasap"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "GoodSync selected to auto update as soon as update is made available", 5, "Update My PC" );

				wsh = null;
			}
			// SugarSync
			else if (program == "SugarSync" && action == "cdpcertified"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "SugarSync selected to auto update after CDP certification", 5, "Update My PC" );

				wsh = null;
			}
			else if (program == "SugarSync" && action == "updateasap"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "SugarSync selected to auto update as soon as update is made available", 5, "Update My PC" );

				wsh = null;
			}
			// Dropbox
			else if (program == "Dropbox" && action == "cdpcertified"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Dropbox selected to auto update after CDP certification", 5, "Update My PC" );

				wsh = null;
			}
			else if (program == "Dropbox" && action == "updateasap"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Dropbox selected to auto update as soon as update is made available", 5, "Update My PC" );

				wsh = null;
			}
			// Google Drive
			else if (program == "Google Drive" && action == "cdpcertified"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Google Drive selected to auto update after CDP certification", 5, "Update My PC" );

				wsh = null;
			}
			else if (program == "Google Drive" && action == "updateasap"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Google Drive selected to auto update as soon as update is made available", 5, "Update My PC" );

				wsh = null;
			}
			
		// Popular Dependencies
			// Java
			else if (program == "Java" && action == "cdpcertified"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Java selected to auto update after CDP certification", 5, "Update My PC" );

				wsh = null;
			}
			else if (program == "Java" && action == "updateasap"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Java selected to auto update as soon as update is made available", 5, "Update My PC" );

				wsh = null;
			}
			// Adobe Flash
			else if (program == "Adobe Flash" && action == "cdpcertified"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Adobe Flash selected to auto update after CDP certification", 5, "Update My PC" );

				wsh = null;
			}
			else if (program == "Adobe Flash" && action == "updateasap"){
				var wsh = new ActiveXObject("WScript.Shell");
				wsh.popup( "Adobe Flash selected to auto update as soon as update is made available", 5, "Update My PC" );

				wsh = null;
			}
			
			
	}
	

}
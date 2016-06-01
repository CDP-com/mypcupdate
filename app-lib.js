//***** Use this file to set up your buttons and include any custom functions for your app *****
// 
var development = 1;						// 1 this app is in development, 0 this app is in production
//var currentUserDefaultCaution = "0";		// **This is the global Throw caution to the wind flag for the current use

/*-----------------------------------------------------*/
/*-------------- Standard App Variables ---------------*/
/*-----------------------------------------------------*/

var appname = "mypcupdate";				// This app's name / folder name which must be unique
var apptitle = "Update My PC";			// This display title written to the HTML
var connect_link = "http://factory.snapback-apps.com/app/update-my-pc/";     // The link to your App's Connect Page in the SnapBack Apps Factory 
var group_name ="App Helpers";				// The group or individual responsible for this app

/*-----------------------------------------------------*/
/*---------------------- Buttons ----------------------*/
/*-----------------------------------------------------*/

var btncount = 1;                            // This is the number of buttons on the App Home tab in main.html

// Setup for Button0 (The First Button)
var btn0_Title = "Update My PC";		// This is what is displayed on the button.
var btn0_MouseOver = "Clicking this button will ensure that your selected programs will always remain up-to-date with your preferred update options.";	// This is what appears upon mouseover for the button.
var btn0_Description = "Select the programs you wish to update or schedule to update below. Simply click the 'Update My PC' button afterwards and your selected programs will be kept up-to-date based upon your preferences.";		// Use this to explain to an end user why they would want to run this button.
var btn0_Why = "Run this button to see the end results of the options you chose.";		// Use this to explain to an end user why they would want to run this button.
var btn0_Command = "updatebutton.js";	// This is the actual script the button will be calling.
var btn0_Source = "updatebutton.txt";    // Duplicate the above script as a .txt file so that the source code can be shown on the How it Works tab.
var btn0_id="btn0";							// The unique ID of the button.  Please follow the format provided.

// Button0 Arguments
var btn0_arguments=7; 						// Must specify if your button has any arguments, even if its 0 (zero) 

var btn0_arguments0DisplayName = "Windows Updates";	// The name of your argument option which is displayed to the user
var btn0_arguments0Description = "<p>Windows Updates are specific patches pushed out by Microsoft to your machines operating system (OS). These updates are often for enhancements, security patches, and other critical features.</p>";	// The textual description for this argument
var btn0_arguments0Values = ["Windows Updates"];	// The values for this argument, which are in an array
var btn0_arguments0Default = ["Windows Updates"];		// The default value which is selected upon page load and before the button is ever run
var btn0_arguments0Fixed = [""];			// Are any of the values fixed, meaning they cannot be changed by the user?  If so, include them in an array.  If not, leave blank.

var btn0_arguments1DisplayName = "Browsers";	// The name of your argument option which is displayed to the user
var btn0_arguments1Description = "<p>A browser is a specific program or application which enables you to visit various websites.</p>";	// The textual description for this argument
var btn0_arguments1Values = ["Chrome","Firefox","Edge (Internet Explorer)","Opera","Vivaldi"];	// The values for this argument, which are in an array
var btn0_arguments1Default = ["Chrome","Firefox"];		// The default value which is selected upon page load and before the button is ever run
var btn0_arguments1Fixed = [""];			// Are any of the values fixed, meaning they cannot be changed by the user?  If so, include them in an array.  If not, leave blank.

var btn0_arguments2DisplayName = "Office 365";	// The name of your argument option which is displayed to the user
var btn0_arguments2Description = "<p>Office 365, previously Microsoft Office in previous iterations, is a productivity suite containing a number of well-known programs such as Word, Excel, and Powerpoint.</p>";	// The textual description for this argument
var btn0_arguments2Values = ["Office 365 Home","Office 365 Business","Office 365 Business Premium","Office 365 Business Essentials"];	// The values for this argument, which are in an array
var btn0_arguments2Default = ["Office 365 Home"];		// The default value which is selected upon page load and before the button is ever run
var btn0_arguments2Fixed = [""];			// Are any of the values fixed, meaning they cannot be changed by the user?  If so, include them in an array.  If not, leave blank.

var btn0_arguments3DisplayName = "Productivity Suites";	// The name of your argument option which is displayed to the user
var btn0_arguments3Description = "<p>Productivity Suites, like Office 365, are packages of programs including document editors, spreadsheet programs, slide presentations, and more.</p>";	// The textual description for this argument
var btn0_arguments3Values = ["OpenOffice","Google Apps"];	// The values for this argument, which are in an array
var btn0_arguments3Default = [""];		// The default value which is selected upon page load and before the button is ever run
var btn0_arguments3Fixed = [""];			// Are any of the values fixed, meaning they cannot be changed by the user?  If so, include them in an array.  If not, leave blank.

var btn0_arguments4DisplayName = "Communication/Messaging Programs";	// The name of your argument option which is displayed to the user
var btn0_arguments4Description = "<p>Communication/Messaging programs either allow you to instant message other users over the internet or chat over video/audio.</p>";	// The textual description for this argument
var btn0_arguments4Values = ["Skype"];	// The values for this argument, which are in an array
var btn0_arguments4Default = ["Skype"];		// The default value which is selected upon page load and before the button is ever run
var btn0_arguments4Fixed = [""];			// Are any of the values fixed, meaning they cannot be changed by the user?  If so, include them in an array.  If not, leave blank.

var btn0_arguments5DisplayName = "Sync Programs";	// The name of your argument option which is displayed to the user
var btn0_arguments5Description = "<p>Sync programs allow you to connect directly to the cloud and, even, other machines. These programs allow you to sync your data to servers in the cloud as well as to other devices. Sync important documents, photos, music, and more.</p>";	// The textual description for this argument
var btn0_arguments5Values = ["BitTorrent Sync","GoodSync","SugarSync","Dropbox","Google Drive"];	// The values for this argument, which are in an array
var btn0_arguments5Default = [""];		// The default value which is selected upon page load and before the button is ever run
var btn0_arguments5Fixed = [""];			// Are any of the values fixed, meaning they cannot be changed by the user?  If so, include them in an array.  If not, leave blank.

var btn0_arguments6DisplayName = "Popular Dependencies";	// The name of your argument option which is displayed to the user
var btn0_arguments6Description = "<p>Dependencies are, essentially, libraries that are stored on your computer and which a number of programs utilize. For example, Java is a programming language a wide number of programs use. Adobe Flash is a library often used to play video content in your browser.</p>";	// The textual description for this argument
var btn0_arguments6Values = ["Java","Adobe Flash"];	// The values for this argument, which are in an array
var btn0_arguments6Default = ["Java","Adobe Flash"];		// The default value which is selected upon page load and before the button is ever run
var btn0_arguments6Fixed = [""];			// Are any of the values fixed, meaning they cannot be changed by the user?  If so, include them in an array.  If not, leave blank.


// Permissions for Button0 to be set in HKEY_LOCAL_MACHINE 
// Don't forget to edit the complementary app-reg.reg file and run it as an administrator
var btn0_KeyValue="button0"; 				// Key value name for the registry
var btn0_DefaultEnableButton=1;
var btn0_CurrentEnableButton=1;        		// Display on Permissions tab.  Only an admin can modify current values 
var btn0_LastModifiedEnableButton="";  		// Update timestamp if admin modifies current value
var btn0_DefaultAllowUser=1;
var btn0_CurrentAllowUser=1;         		// Display on Permissions tab.  Only an admin can modify current values 
var btn0_LastModifiedAllowUser="";   		// Update timestamp if admin modifies current value
var btn0_DefaultCaution=1;
var btn0_CurrentCaution=1;           		// Display on Permissions tab.  Only an admin can modify current values 
var btn0_LastModifiedCaution="";     		// Update timestamp if admin modifies current value

// Service Information for Button0
// This is used in production only and verified by the Certification Committee
// Do not edit if you are unfamiliar with the SnapBack Apps Service
var btn0_ServiceName="";                    // A unique name if using the service.  Need by service in xml file for button 
var btn0_ElevateNeeded=0;                  	// Does this button need elevation? Needed by service in xml file for button
var btn0_ScriptHasUI=0;                    	// Does the script have an UI? Needed by service in xml file for button

// Run Button Function
// This runs your button when it is clicked
// Add any functions or calls you wish to make before or after the primary "RunApps" function
function RunBtn0( AppName, ButtonNum, Computername, CurrentUser, sCmd ){
	alertConfirmation( AppName, ButtonNum, Computername, CurrentUser, sCmd );
}




	
/*-----------------------------------------------------*/
/*----------------- Custom Functions ------------------*/
/*-----------------------------------------------------*/	
//***** Use the below area for your common functions *****

// Function to gather all selected update values, get confirmation from the user, and run the button script	
function alertConfirmation( AppName, ButtonNum, Computername, CurrentUser, sCmd ){
	$("button").click(function(){
		var updatePrograms = [];
		$.each($("input[name='autoupdate']:checked"), function(){            
			updatePrograms.push($(this).val());
		});
		
		var cdpCertifiedUpdates = [];
		$.each($("input[class='cdpcertified']:checked"), function(){            
			cdpCertifiedUpdates.push($(this).val());
		});
		
		var asapUpdates = [];
		$.each($("input[class='updateasap']:checked"), function(){            
			asapUpdates.push($(this).val());
		});
		
		var userConfirm = confirm("You have selected to auto update: " + updatePrograms.join(", ") + "\n\nYou have selected to auto update via CDP Certified options: " + cdpCertifiedUpdates.join(", ") + "\n\nYou have selected to auto update as soon as its available: " + asapUpdates.join(", ") + "\n\nPlease confirm your selections by clicking 'Okay' or click 'Cancel' to stop the process and reselect.");
		if (userConfirm == true) {
			RunApps( AppName, ButtonNum, Computername, CurrentUser, sCmd );		// This function executes your script.  Do not edit this line
			location.reload();
		} else {
			return false;
		}
	});
}

// Function to Display the Button and Its Arguments - This Overwrites the Common Function in btnpermlogic.js
function CreateButtonPCUpdate()
{	
	for (i=0,j=1; i<btncount; i++,j++){
		var s="<table class='main-table'>";
		
		// Create main button
		s+="<td style='width: 32%;'>";
		s+="<div id='cdpbutton"+j+"' class='button-wrapper'>";
		s+="<button package='";
		btnPackage="appname";
		s+=eval(btnPackage);
		s+="' title='";
		btnMouse="btn"+i+"_MouseOver";
		s+=eval(btnMouse);
		s+="' onclick='javascript:RunBtn"+i+"(appname, "+i+", DName, UName, btn"+i+"_Command)'>";
		btnTitle="btn"+i+"_Title";
		s+=eval(btnTitle);
		s+="</button>";
		s+="</div>";
		s+="<a href='#' id='button"+i+"job' class='add-to-job-img' title='Add this Button to your Job List'></a><a id='button"+i+"why' class='whyButton why-run-img'></a><div class='whyDialog'>";
		btnWhy="btn"+i+"_Why";
		s+=eval(btnWhy);
		s+="</div></a>";		
		s+="</td>";
		s+="<td><div class='more'>"
		btnDescription="btn"+i+"_Description";
		s+=eval(btnDescription);
		s+="</div></td>";
		s+="</tr>";
		s+="</table>";
		s+="<p>Note: You will only be able to update programs you already have installed. These programs will be marked by being bold and having the text ''(Installed)'' next to the program name.</p>";
		
		// Add select all checkbox
		s+="<div style='float: right;'><input type='checkbox' onclick='checkAll(this)'> Select All Available Programs</div>";
		s+="<div style='clear: both;'></div>";
		
		// Load any arguments specified
		try {
			var btnarguments="btn"+i+"_arguments";
			var btnargumentsNum=eval(btnarguments); 		
			if (btnargumentsNum > 0) {	
				for (n=0,o=1; n<btnargumentsNum; n++,o++){
					s+="<div id='btn"+i+"_arguments' class='btn_arguments'>";
					s+="<div class='accordion'>";
					s+="<h3>";
					s+=eval("btn"+i+"_arguments"+n+"DisplayName");
					s+="</h3>";
					s+=eval("btn"+i+"_arguments"+n+"Description");
					s+="</div>";
					s+="<table class='update_table'>";
					s+="<tr><th class='program_heading'>Program Name</th><th class='other_heading'>Auto Update</th><th class='other_heading'>Install When CDP Certified</th><th class='other_heading'>Install As Soon As Available</th></tr>";
					var argumentsValue = eval("btn"+i+"_arguments"+n+"Values");
					for (v = 0; v < argumentsValue.length; v++) {
						
						// Try and Load any arguments which are fixed
						try {
							var valuesFixed = eval("btn"+i+"_arguments"+n+"Fixed");
							if( $.inArray(argumentsValue[v], valuesFixed) != -1){
								s+="<tr>";
									s+="<td class='table_name_td'>";
									s+=argumentsValue[v];
									s+="</td>";
									
									s+="<td class='table_other_td'>";
										s+="<input disabled checked id='argument";
										s+=n;
										s+="_value";
										s+=v;
										s+="' class='autoupdate' type='checkbox' name='autoupdate' value='";
										s+=argumentsValue[v];
										s+="' title='You cannot auto update a program you do not have installed.' onClick='javascript:uncheckRadioButtons(this);'>";
									s+="</td>";
									
									s+="<td class='table_other_td'>";
										s+="<input disabled checked id='argument";
										s+=n;
										s+="_value";
										s+=v;
										s+="_cdpcertified' class='cdpcertified' type='radio' name='";
										s+=argumentsValue[v];
										s+="_updateschedule' value='";
										s+=argumentsValue[v];
										s+="'>";
									s+="</td>";
									
									s+="<td class='table_other_td'>";
										s+="<input disabled checked id='argument";
										s+=n;
										s+="_value";
										s+=v;
										s+="_updateasap' class='updateasap' type='radio' name='";
										s+=argumentsValue[v];
										s+="_updateschedule' value='";
										s+=argumentsValue[v];
										s+="'>";
									s+="</td>";
								s+="</tr>";
							}
							
							// Else if no values are fixed							
							else {
								s+="<tr>";
									s+="<td class='table_name_td'>";
									s+=argumentsValue[v];
									s+="</td>";
								
									s+="<td class='table_other_td'>";
										s+="<input disabled id='argument";
										s+=n;
										s+="_value";
										s+=v;
										s+="' class='autoupdate' type='checkbox' name='autoupdate' value='";
										s+=argumentsValue[v];
										s+="' title='You cannot auto update a program you do not have installed.' onClick='javascript:uncheckRadioButtons(this);'>";
									s+="</td>";
									
									s+="<td class='table_other_td'>";
										s+="<input disabled id='argument";
										s+=n;
										s+="_value";
										s+=v;
										s+="_cdpcertified' class='cdpcertified' type='radio' name='";
										s+=argumentsValue[v];
										s+="_updateschedule' value='";
										s+=argumentsValue[v];
										s+="'>";
									s+="</td>";

									s+="<td class='table_other_td'>";
										s+="<input disabled id='argument";
										s+=n;
										s+="_value";
										s+=v;
										s+="_updateasap' class='updateasap' type='radio' name='";
										s+=argumentsValue[v];
										s+="_updateschedule' value='";
										s+=argumentsValue[v];
										s+="'>";
									s+="</td>";		
								s+="</tr>";
							}
						}
						
						// Catch if running in browser
						catch (e) {
							s+="<tr>";
								s+="<td class='table_name_td'>";
								s+=argumentsValue[v];
								s+="</td>";
							
								s+="<td class='table_other_td'>";
									s+="<input disabled id='argument";
									s+=n;
									s+="_value";
									s+=v;
									s+="' class='autoupdate' type='checkbox' name='autoupdate' value='";
									s+=argumentsValue[v];
									s+="' title='You cannot auto update a program you do not have installed.' onClick='javascript:uncheckRadioButtons(this);'>";
								s+="</td>";
								
								s+="<td class='table_other_td'>";
									s+="<input disabled id='argument";
									s+=n;
									s+="_value";
									s+=v;
									s+="_cdpcertified' class='cdpcertified' type='radio' name='";
									s+=argumentsValue[v];
									s+="_updateschedule' value='";
									s+=argumentsValue[v];
									s+="'>";
								s+="</td>";	

								s+="<td class='table_other_td'>";
									s+="<input disabled id='argument";
									s+=n;
									s+="_value";
									s+=v;
									s+="_updateasap' class='updateasap' type='radio' name='";
									s+=argumentsValue[v];
									s+="_updateschedule' value='";
									s+=argumentsValue[v];
									s+="'>";
									s+="</td>";	
							s+="</tr>";
						}	
					}
					s+="</table>";
					s+="</div>";					
				}			
			}
		}
		catch (e) {
		
		}
		
	}
	
	document.write(s);
}

// Function to Write Arguments in a XML File for Each Button - This Overwrites the Common Function in jslib.js
function writeArguementsXML(ButtonNum){
	try {
		var btnarguments="btn"+ButtonNum+"_arguments";
		var btnargumentsNum=eval(btnarguments); 		
		if (btnargumentsNum > 0) {
			var curDateTime = new Date();
			var modTime = curDateTime.toUTCString();
			
			//Create new file to write to
			var fso = new ActiveXObject("Scripting.FileSystemObject");
			var FILENAME="..\\"+ appname +"\\btn"+ ButtonNum +"arguments.xml";
			var file = fso.CreateTextFile(FILENAME, true);
			
			file.WriteLine('<?xml version="1.0" encoding="utf-8"?>\n');
			file.WriteLine('<btn'+ ButtonNum + 'arguments>');
			
			//For each argument selected, create its own section
			$("#btn"+ ButtonNum + "_arguments input:radio:checked").each(function (index, value) {
				file.WriteLine('     <argument>');
				file.WriteLine('          <program>'+ $(this).val() +'</program>');
				file.WriteLine('          <action>'+ $(this).attr("class") +'</action>');
				file.WriteLine('          <modtime>' + modTime + '</modtime>');
				file.WriteLine('     </argument>');
			});
			
			file.WriteLine('</btn'+ ButtonNum + 'arguments>');
			file.Close();
		}
	}
	catch (e){
		return;
	}
}

// Function to Load Default Argument Values - This Overwrites the Common Function in templib.js
$(document).ready(function() {
	try {
		// Loop through all buttons
		for (i=0,j=1; i<btncount; i++,j++){
		
			// See if any arguments are specified
			var btnarguments="btn"+i+"_arguments";
			var btnargumentsNum=eval(btnarguments);
			
			// Loop through all arguments
			if (btnargumentsNum > 0) {	
				for (n=0,o=1; n<btnargumentsNum; n++,o++){
				
					// Try to see if we're running in an HTA
					try {
					
						// Load btn0installedprograms.xml which lists the programs we've detected are installed
						var xmlDefaultExists;
						xmlDefaultExists = new ActiveXObject("Scripting.FileSystemObject");
						
						if(xmlDefaultExists.FileExists("..\\"+ appname +"\\btn"+i+"installedprograms.xml")){
							var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
							xmlDoc.async="false";
							xmlDoc.load("..\\"+ appname +"\\btn"+i+"installedprograms.xml");
							var installedPrograms = xmlDoc.getElementsByTagName("installed"); 

							// If a program is detected to have been installed
							if (installedPrograms){
								for (var i = 0; i < installedPrograms.length; i++) { 
									var installedProgramTag = installedPrograms[i].getElementsByTagName("program");
									var installedProgram = installedProgramTag[0].firstChild.nodeValue;
									
									try {
										// Enable Auto Update checkbox for installed program 
										$("input[type='checkbox'][class='autoupdate'][value='"+installedProgram+"']").attr('disabled', false).attr('title', 'Click to enable auto updates for this program');
										
										// Add css rules and text for installed program 
										$(".table_name_td:contains("+installedProgram+")").css('font-weight', 'bold').append(' (Installed)');
										
										// Check for and then load btn0arguments.xml which lists the programs a user has selected to auto update
										var xmlExists;
										xmlExists = new ActiveXObject("Scripting.FileSystemObject");
										if(xmlExists.FileExists("..\\"+ appname +"\\btn"+i+"arguments.xml")){
											var xmlArgDoc = new ActiveXObject("Microsoft.XMLDOM");
											xmlArgDoc.async="false";
											xmlArgDoc.load("..\\"+ appname +"\\btn"+i+"arguments.xml");
											var argumentsDefault = xmlArgDoc.getElementsByTagName("argument"); 
											
											// If a program is detected to have been previously selected
											if (argumentsDefault){
												for (var n = 0; n < argumentsDefault.length; n++) { 
													var programTag = argumentsDefault[n].getElementsByTagName("program");
													var defaultProgram = programTag[0].firstChild.nodeValue;
													try {
														var actionTag = argumentsDefault[n].getElementsByTagName("action");
														var selectedAction = actionTag[0].firstChild.nodeValue;
														// Programatically check program user has selected
														$("input[type='checkbox'][class='autoupdate'][value='"+defaultProgram+"']").prop("checked",true);
														
														// Programatically check update option user has selected
														$("input[type='radio'][class='"+selectedAction+"'][value='"+defaultProgram+"']").prop("checked",true);
													}
													catch(e){
													
													}
												}
											}	
										}
									}
									catch(e){
									
									}
									
								}
							}
						}				
					}
					
					// Catch if running in any other browser and load default values specified in app-lib.js
					catch (e){
						var defaultsCoded = eval("btn"+i+"_arguments"+n+"Default");
						jQuery.each(defaultsCoded, function(index, item) {
							$("input[type='checkbox'][name='autoupdate'][value='"+item+"']").attr('disabled', false).prop("checked",true);
							$("input[type='radio'][class='cdpcertified'][value='"+item+"']").prop("checked",true);
						});
					}
				}		
			}
		}
	}
	catch (e) {
	
	}
});

// If, on page load, an autoupdate option is checked by default, enable the remaining radio buttons
$(document).ready(function() {
	try {
		//Loop through all buttons
		for (i=0,j=1; i<btncount; i++,j++){
		
			//See if any arguments are specified
			var btnarguments="btn"+i+"_arguments";
			var btnargumentsNum=eval(btnarguments);
			
			//Loop through all arguments
			if (btnargumentsNum > 0) {	
				for (n=0,o=1; n<btnargumentsNum; n++,o++){
					var argumentsValue = eval("btn"+i+"_arguments"+n+"Values");
					for (v = 0; v < argumentsValue.length; v++) {
					
						if ($('#argument'+n+'_value'+v+'').is(':checked')) {
							// Enable Radio Button Option for "Install When CDP Certified"
							$('#argument'+n+'_value'+v+'_cdpcertified').removeAttr('disabled').attr("title", 'Check this box to force the program to auto update based upon SnapBack community expert recommendations.');
							
							// Enable Radio Button Option for "Install As Soon As Available"
							$('#argument'+n+'_value'+v+'_updateasap').removeAttr('disabled').attr("title", 'Check this box to force the program to auto update as soon as a new update release is available.');
						} else {
							// Disable Radio Button Option for "Install When CDP Certified"
							$('#argument'+n+'_value'+v+'_cdpcertified').attr('disabled', true).attr("title", 'You cannot select to auto update a program based upon community recommendations if the auto update checkbox is not selected.');
							
							// Disable Radio Button Option for "Install As Soon As Available"
							$('#argument'+n+'_value'+v+'_updateasap').attr('disabled', true).attr("title", 'You cannot select to auto update a program as soon as an update is available if the auto update checkbox is not selected.');
						}
					}
				}
			}
		}
	}
	catch (e) {
	
	}
});

// Function to enable the update radio button options if the autoupdate option is checked
function uncheckRadioButtons(obj){
	if (obj.checked == true){
		var radioboxID = $(obj).attr('id');
		
		// Enable Radio Button Option and Select as Default Option
		$('#' + radioboxID + '_cdpcertified').removeAttr('disabled').attr("title", 'Check this box to force the program to Auto Update via SnapBack and based upon CDP certification.').attr("checked", true);
		
		// Enable Radio Button Option
		$('#' + radioboxID + '_updateasap').removeAttr('disabled').attr("title", 'Check this box to force the program to Auto Update via SnapBack and based upon the first availability.');
	}
	if (obj.checked == false){
		var radioboxID = $(obj).attr('id');
		
		// Disable Radio Button Option
		$('#' + radioboxID + '_cdpcertified').prop('checked', false).attr('disabled', true).attr("title", 'You cannot select to auto update a program based upon community recommendations if the auto update checkbox is not selected.');
		
		// Disable Radio Button Option
		$('#' + radioboxID + '_updateasap').prop('checked', false).attr('disabled', true).attr("title", 'You cannot select to auto update a program as soon as an update is available if the auto update checkbox is not selected..');
	}
}

// Function to select all available programs, mark them for auto update, and give the default value to update when CDP certified
function checkAll(bx) {
	var cbs = document.getElementsByTagName('input');
	for (var i=0; i < cbs.length; i++) {
	
    if (cbs[i].type == 'checkbox' && cbs[i].disabled == false) {
		cbs[i].checked = bx.checked;
		if (cbs[i].checked) {
			var radioSelectAllID = $(cbs[i]).attr('id');
			
			// Enable Radio Button Option and Select as Default Option
			$('#' + radioSelectAllID + '_cdpcertified').removeAttr('disabled').attr("title", 'Check this box to force the program to Auto Update via SnapBack and based upon CDP certification.').attr("checked", true);
			
			// Enable Radio Button Option
			$('#' + radioSelectAllID + '_updateasap').removeAttr('disabled').attr("title", 'Check this box to force the program to Auto Update via SnapBack and based upon the first availability.');
		}
		else {
			var radioSelectAllID = $(cbs[i]).attr('id');
			
			// Disable Radio Button Option
			$('#' + radioSelectAllID + '_cdpcertified').prop('checked', false).attr('disabled', true).attr("title", 'You cannot select to auto update a program based upon community recommendations if the auto update checkbox is not selected.');
			
			// Disable Radio Button Option
			$('#' + radioSelectAllID + '_updateasap').prop('checked', false).attr('disabled', true).attr("title", 'You cannot select to auto update a program as soon as an update is available if the auto update checkbox is not selected..');
		}
    }
  }
}

// Set different row colors for ease of reading
$(document).ready(function()
{
  $(".update_table tr:nth-child(even)").css("background-color", "#e3e3e3");
});

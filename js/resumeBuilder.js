/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
 var bio = {
    "name" : "Tito Santiago",
    "role" : "webDep",
    "contacts" : {
          "mobile": "938 500 500",
          "email": "titosantiago@hotmail.com",
          "github": "https://github.com/ultratlantic",
          //"linkedin": "https://pt.linkedin.com/in/titosantiago",
          "location": "Bragança, Portugal"
	},
	"biopic": "images/Tito.jpg",
 	"welcomeMessage": "Welcome (:", 
    "skills": ["MatLab", "C/C++", "C#", "Java", "HTML", "JavaScript", "PHP", "CSS"],
    //biopic: url
    //display: function taking no parameters
	}

var education = {
	"schools": [
		{
		"name": "Escola Superior de Tecnologia e Gestão - Instituto Politécnico de Bragança",
        "schoolDegree": "Engenharia Informática",
		"years": 0,
		"location": "Bragança, Portugal"
		},
	],
	"onlineCourses": [
	{
		"name": "Udacity",
		"course": "JavaScript"
	}
	]
}
	
var work = {
	"jobs": [
		{
			"start": " ",
			"position": " ",
			"employer": " ",
			"years": " ",
			"location": " ",
			"description": " "
		},
        		{
			"start": " ",
			"position": " ",
			"employer": " ",
			"years": " ",
			"location": " ",
			"description": " "
		}

	]
}	


	
var projects = {
	"examples": [
		{
			"name": "Internet das Coisas (IoT) – Máquina de vendas",
			"description": "Analise e desenvolvimento da aplicação web para um sistema embebido (mbed, maquina de vendas).Tecnologias usadas: PHP 5, JavaScript, HTML, MySQL 5.x, Apache HTTP Server, C/C++.",
			"year": "2014"
		},
		{	
			"name": "ESTIG - IPB - Fundamentos de Robótica",
			"description": "Lego MindStorms NXT, Robot procura a saída do Labirinto. Linguagem utilizada: JAVA.",
			"name": "Fundamentos de Robótica",
			"year": "2014"
		},
		{	
            "name": " ",
			"description": " ",
			"year": " "
		},
		{	
            "name": " ",
			"description": " ",
			"year": " "
		}]
	}	
	
	
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
$("#footerContacts").prepend(formattedMobile);

var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGitHub);
$("#footerContacts").prepend(formattedGitHub);

//var formattedLinkedIn = HTMLlinkedIn.replace("%data%", bio.contacts.linkedin);
//$("#topContacts").append(formattedLinkedIn);
//$("#footerContacts").prepend(formattedLinkedIn);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
$("#footerContacts").prepend(formattedEmail);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);
$("#footerContacts").prepend(formattedLocation);

var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedwelcomeMessage);

var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedImage);


if(bio.skills !== null) {

	$("#header").append(HTMLskillsStart);
	var skillsLength = (bio.skills.length -1);
	for(var x = 0; x <= skillsLength; x++) {
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[x]);
		$("#skills").append(formattedSkills);	
	
	}
	
} else {
	console.log("no skills!");
}





projects.display = function() {

	for(name in projects.examples) {
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.examples[name].name);
		var formattedDesc = HTMLprojectDescription.replace("%data%", projects.examples[name].description);
		var formattedYear = HTMLprojectDates.replace("%data%", projects.examples[name].year);
		
        
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedYear);
		$(".project-entry:last").append(formattedDesc);

	}
}

projects.display();


education.display = function(){
    
    for( name in education.schools){
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLschoolName.replace("%data%", education.schools[name].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[name].schoolDegree);
        var formattedLocation = HTMLlocation.replace("%data", education.schools[name].location);
        
        $(".education-entry:last").append(formattedTitle);
        $(".education-entry:last").append(formattedSchoolDegree);
        //$(".education-entry:last").append(formattedLocation);
        
    }
      
        for( name_ in education.onlineCourses){
        //$("#education").append(HTMLonlineClasses);
        var formattedName = HTMLonlineTitle.replace("%data%", education.onlineCourses[name_].name);
        var formattedCourse = HTMLonlineSchool.replace("%data%", education.onlineCourses[name_].course);
        
        //$(".education-entry:last").append(formattedName);
       // $(".education-entry:last").append(formattedCourse);
    }
    
}

education.display();


work.display = function(){
    
    for( start in work.jobs){
        $("#workExperience").append(HTMLworkStart);
        //var teste = work.jobs[start].start;
        var formattedStarted = HTMLworkStart.replace("%data%", work.jobs[start].start);
        var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[start].employer);
        var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", work.jobs[start].title);
        var formattedHTMLworkDates = HTMLworkDates.replace("%data%", work.jobs[start].data);
        var formattedHTMLworkLocation = HTMLworkLocation.replace("%data", work.jobs[start].location);
        var formattedHTMLworkDescription = HTMLworkDescription.replace("%data%", work.jobs[start].description);
        
        $(".work-entry:last").append(formattedStarted);
        $(".work-entry:last").append(formattedHTMLworkEmployer);
        $(".work-entry:last").append(formattedHTMLworkTitle);
        $(".work-entry:last").append(formattedHTMLworkDates);
        $(".work-entry:last").append(formattedHTMLworkLocation);
        $(".work-entry:last").append(formattedHTMLworkDescription);
        
    }
}

//work.display();




function initMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.8058200, lng: -6.7571900},
    scrollwheel: false,
    zoom: 14
  });
}
$("#mapDiv").append(googleMap);
initMap();
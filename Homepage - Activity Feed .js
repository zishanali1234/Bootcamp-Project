$(document).ready(function(){
  $(".feedButton").click(function(){
      $("#feed").slideDown();
  });
});

function boxesDissapear(){
  document.getElementById('teamstext').style.display = "none";
  document.getElementById('F1people').style.display = "none";
  document.getElementById('Boxers').style.display = "none";
  document.getElementById('tennisPlayers').style.display = "none";
  document.getElementById('cyclists').style.display = "none";
  document.getElementById('nationalities').style.display = "none";
}
function chosenPreferances() {
    var sport = document.getElementById('sport').value;
    switch (sport) {
      case "Football":
          document.getElementById('teamstext').style.display = "block";
        break;
      case "F1":
          document.getElementById('F1people').style.display = "block";
          break;
      case "Boxing":
          document.getElementById('Boxers').style.display = "block";
          break;
      case "Tennis":
          document.getElementById('tennisPlayers').style.display = "block";
          break;
      case "Cycling":
          document.getElementById('cyclists').style.display = "block";
          break;
      case "Olympics":
          document.getElementById('nationalities').style.display = "block";
          break;
      default:
          window.alert("Please enter a sport");
          break;
    }
}

function subSportChosen() {
  var sport = document.getElementById('sport').value;
  var subSport;
  if (subSport != "") {


  switch (sport) {
    case "Football":
        subSport = document.getElementById('teamstext').value;
        break;
    case "F1":
        subSport = document.getElementById('F1people').value;
        break;
    case "Boxing":
        subSport = document.getElementById('Boxers').value;
        break;
    case "Tennis":
        subSport = document.getElementById('tennisPlayers').value;
        break;
    case "Cycling":
        subSport = document.getElementById('cyclists').value;
        break;
    case "Olympics":
        subSport = document.getElementById('nationalities').value;
        break;
  }
} else {
  window.alert("please enter a sub sport");
}
}

function switchButtons() {
  var sport = document.getElementById('sport').value;
  if (sport != ""){
    document.getElementById('enterPreferances').style.display = "none";
    document.getElementById('enterSubsport').style.display = "block";
  }
}

function toggleOverlay(number){
	var overlay = document.getElementById('overlay');
  var videoBox = "videoBox" + number;
	overlay.style.opacity = .8;
	if(overlay.style.display == "block"){
		overlay.style.display = "none";
		for (i=0; i<=16; i++){
      videoBox = "videoBox" + i;
      document.getElementById(videoBox).style.display = "none";
    }
	} else {
		overlay.style.display = "block";
		document.getElementById(videoBox).style.display = "block";
	}
}

function openNav() {
    document.getElementById("mySidebar").style.width = "25%";
    document.getElementById("main").style.marginLeft = "25%";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

/* Comment expand button jquery here  */
$('.container').hide();
$("div.first").click(function() {
    $(this).next().slideToggle(1000);
});

/*  Writing comments button */

function myComment(number) {

     var skyuser = prompt("Write your comment here");
     var newDiv = document.createElement("div");
     var node = document.createTextNode(skyuser);
     var comment = 'comments' + number;
     newDiv.appendChild(node);
     var element = document.getElementById(comment);
     element.appendChild(newDiv);
}

function startConvo() {

  var user = prompt("Describe yourself here!");


  if (user !="") {
    var user1 = user.substr(0, 140);
    var user2 = user.substr( 140, 200);
    document.getElementById("Bio1").innerHTML =
    user1;
    document.getElementById("Bio2").innerHTML =
    user2;

  }
}

function changeheading() {
  var newName = prompt("Edit your name");
  if (newName !=""){
    document.getElementById('nameEdit').innerHTML = newName;
  }
  if (newName === ""){
       "defaulthead";
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

function changeImage() {
  var imageSource = ["", "", "", ""];
  //make the different parts of the array(starting at 1) the source of the image
  for (i=1; i<=3; i++){
      var number = 'topFav' + i;
      document.getElementById(number).src = imageSource[i];
    }
    for (i=4; i<=6; i++){
      var number = 'middleFav' + (i-3);
      document.getElementById(number).src = img[i];
    }

    for (i=7; i<=9; i++){
      var number = 'bottomFav' + (i-6);
      document.getElementById(number).src = img[i];
    }
}

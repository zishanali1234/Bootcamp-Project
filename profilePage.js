$(document).ready(function() {
$.getJSON('loadFav.php', function (objJSON) {
           var allUrl = objJSON;
           vidAppear(allUrl);
         });


      });

  function vidAppear(totalURL) {
    var url = totalURL.toString();
    var url1;
    var url2;
    var url3;
    var url4;
    var url5;
    var url6;
    var url7;
    var url8;
    var url9;
    var count = 1;
    var count1;
    for (i=0; i<=url.length; i++){
      var character = "";
      character = url.substr(i+1, 1);
      if (character == "," || character == "") {
        switch (count) {
          case 1:
            url1 = url.substring(0,i+1);
            document.getElementById('videoNumber0').src = url1;
            break;
          case 2:
            url2 = url.substring(count1, i+1);
            document.getElementById('videoNumber1').src = url2;
            break;
          case 3:
            url3 = url.substring(count1,i+1);
            document.getElementById('videoNumber2').src = url3;
            break;
          case 4:
            url4 = url.substring(count1, i+1);
            document.getElementById('videoNumber3').src = url4;
            break;
          case 5:
            url5 = url.substring(count1,i+1);
            document.getElementById('videoNumber4').src = url5;
            break;
          case 6:
            url6 = url.substring(count1, i+1);
            document.getElementById('videoNumber5').src = url6;
            break;
          case 7:
            url7 = url.substring(count1,i+1);
            document.getElementById('videoNumber6').src = url7;
            break;
          case 8:
            url8 = url.substring(count1, i+1);
            document.getElementById('videoNumber7').src = url8;
            break;
          case 9:
            url9 = url.substring(count1,i+1);
            document.getElementById('videoNumber8').src = url9;
            break;
          default:

        }
        count++;
        count1 = i+2;
        }
      }
    }
    $(document).ready(function() {
    $.getJSON('loadFavImg.php', function (objJSON) {
               var allUrl = objJSON;
               imgAppear(allUrl);
             });


          });

      function imgAppear(totalURL) {
        var url = totalURL.toString();
        var url1;
        var url2;
        var url3;
        var url4;
        var url5;
        var url6;
        var url7;
        var url8;
        var url9;
        var count = 1;
        var count1;
        for (i=0; i<=url.length + 1; i++){
          var character = "";
          character = url.substr(i+1, 1);
          if (character == "," || character == "") {
            switch (count) {
              case 1:
                url1 = url.substring(0,i+1);
                document.getElementById('Fav0').src = url1;
                break;
              case 2:
                url2 = url.substring(count1, i+1);
                document.getElementById('Fav1').src = url2;
                break;
              case 3:
                url3 = url.substring(count1,i+1);
                document.getElementById('Fav2').src = url3;
                break;
              case 4:
                url4 = url.substring(count1, i+1);
                document.getElementById('Fav3').src = url4;
                break;
              case 5:
                url5 = url.substring(count1,i+1);
                document.getElementById('Fav4').src = url5;
                break;
              case 6:
                url6 = url.substring(count1, i+1);
                document.getElementById('Fav5').src = url6;
                break;
              case 7:
                url7 = url.substring(count1,i+1);
                document.getElementById('Fav6').src = url7;
                break;
              case 8:
                url8 = url.substring(count1, i+1);
                document.getElementById('Fav7').src = url8;
                break;
              case 9:
                url9 = url.substring(count1,i+1);
                document.getElementById('Fav8').src = url9;
                break;
              default:

            }
            count++;
            count1 = i+2;
            }
          }
        }


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


/*function changeImage() {
  var imageSource = ["", "", "", ""];
  var imageSource[0] = "hi";
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
*/

function toggleOverlay(number){
	var overlay = document.getElementById('overlay');
  var videoBox = "videoBox" + number;
	overlay.style.opacity = .8;
	if(overlay.style.display == "block"){
		overlay.style.display = "none";
		for (i=0; i<=8; i++){
      videoBox = "videoBox" + i;
      document.getElementById(videoBox).style.display = "none";
    }
	} else {
		overlay.style.display = "block";
		document.getElementById(videoBox).style.display = "block";
	}
}

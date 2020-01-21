/* hometeam 점수 올리기 */

function OneUpdScore() {
  var homescore= document.getElementById("idhomepoint").innerHTML;
  var oneaddhomesocre= Number(homescore)+1;
  document.getElementById("idhomepoint").innerHTML  = oneaddhomesocre;
}
function TwoUpdScore() {
  var homescore= document.getElementById("idhomepoint").innerHTML;
  var twoaddhomesocre= Number(homescore)+2;
  document.getElementById("idhomepoint").innerHTML  = twoaddhomesocre;
}
function ThreeUpdScore() {
  var homescore= document.getElementById("idhomepoint").innerHTML;
  var threeaddhomesocre= Number(homescore)+3;
  document.getElementById("idhomepoint").innerHTML  = threeaddhomesocre;
}
function DownScore() {
  var homescore= document.getElementById("idhomepoint").innerHTML;
  var downhomesocre= Number(homescore)-1;
  document.getElementById("idhomepoint").innerHTML  = downhomesocre;
}


/* awayteam 점수 올리기 */

function AwayOneUpdScore() {
  var awayscore= document.getElementById("idawaypoint").innerHTML;
  var oneaddawaysocre= Number(awayscore)+1;
  document.getElementById("idawaypoint").innerHTML  = oneaddawaysocre;
}

function AwayTwoUpdScore() {
  var awayscore= document.getElementById("idawaypoint").innerHTML;
  var twoaddawaysocre= Number(awayscore)+2;
  document.getElementById("idawaypoint").innerHTML  = twoaddawaysocre;
}

function AwayThreeUpdScore() {
  var awayscore= document.getElementById("idawaypoint").innerHTML;
  var threeaddawaysocre= Number(awayscore)+3;
  document.getElementById("idawaypoint").innerHTML  = threeaddawaysocre;
}

function DownAwayScore() {
  var awayscore= document.getElementById("idawaypoint").innerHTML;
  var downawaysocre= Number(awayscore)-1;
  document.getElementById("idawaypoint").innerHTML  = downawaysocre;
}


/* hometeam 점수 올리기
$(".homebar .homepoint").on('click', function () {
        addScore(".homebar", 1);
    });
$(".homebar .point .point3").on('click', function () {
        addScore(".homebar", 3);
    });
$(".homebar .point .point2").on('click', function () {
        addScore(".homebar", 2);
    });
$(".homebar .point .point-1").on('click', function () {
        addScore(".homebar", -1);
    });

    function addScore(selector, point) {
        var $homepoint = $(selector + " .homepoint");
        var homepoint = Number($homepoint.text());
        homepoint += point;
        if (homepoint < 0) {
            homepoint = 0;
        }
        if (homepoint < 10) {
            homepoint = '0' + homepoint;
        }
        $homepoint.text(homepoint);
    }
*/

/* awayteam 점수 올리기
$(".awaybar .awaypoint").on('click', function () {
        awayaddScore(".awaybar", 1);
    });
$(".awaybar .point .point3").on('click', function () {
        awayaddScore(".awaybar", 3);
    });
$(".awaybar .point .point2").on('click', function () {
        awayaddScore(".awaybar", 2);
    });
$(".awaybar .point .point-1").on('click', function () {
        awayaddScore(".awaybar", -1);
    });

    function awayaddScore(selector, point) {
        var $awaypoint = $(selector + " .awaypoint");
        var awaypoint = Number($awaypoint.text());
        awaypoint += point;
        if (awaypoint < 0) {
            awaypoint = 0;
        }
        if (awaypoint < 10) {
            awaypoint = '0' + awaypoint;
        }
        $awaypoint.text(awaypoint);
    }
 */



/* 점수 00:00으로 만들기 */
function sync() {
  document.getElementById("idhomepoint").innerHTML = "00";
  document.getElementById("idawaypoint").innerHTML = "00";
}

/* team color 바꾸기 */
function colorChange() {
  if (document.getElementById("idhometeamcolor" ).style.backgroundColor === 'red'){
    document.getElementById("idhometeamcolor" ).style.backgroundColor = 'blue';}
  else if (document.getElementById("idhometeamcolor" ).style.backgroundColor === 'black'){
    document.getElementById("idhometeamcolor" ).style.backgroundColor = 'white';
    document.getElementById("idhometeamcolor" ).style.color = 'black';}
  else if (document.getElementById("idhometeamcolor" ).style.backgroundColor === 'white'){
    document.getElementById("idhometeamcolor" ).style.backgroundColor = 'red';
  document.getElementById("idhometeamcolor" ).style.color = 'white';}
  else document.getElementById("idhometeamcolor" ).style.backgroundColor = 'black';
}

/* awayteam color 바꾸기 */

function awaycolorChange() {
  if (document.getElementById("idawayteamcolor" ).style.backgroundColor === 'red'){
    document.getElementById("idawayteamcolor" ).style.backgroundColor = 'blue';}
  else if (document.getElementById("idawayteamcolor" ).style.backgroundColor === 'black'){
    document.getElementById("idawayteamcolor" ).style.backgroundColor = 'white';
    document.getElementById("idawayteamcolor" ).style.color = 'black';}
  else if (document.getElementById("idawayteamcolor" ).style.backgroundColor === 'white'){
    document.getElementById("idawayteamcolor" ).style.backgroundColor = 'red';
  document.getElementById("idawayteamcolor" ).style.color = 'white';}
  else document.getElementById("idawayteamcolor" ).style.backgroundColor = 'black';
}


/* Team name 입력 */

function nameChange() {
  var name = prompt("Please enter team name", "team name");
  if (name != null) {
    document.getElementById("idhometeamname").innerHTML =
    name;
  }
}

function awaynameChange() {
  var name = prompt("Please enter team name", "team name");
  if (name != null) {
    document.getElementById("idawayteamname").innerHTML =
    name;
  }
}


/* change 바꾸기 */
function exchange() {

  var a= document.getElementById("idhomepoint").innerHTML;
  var b= document.getElementById("idawaypoint").innerHTML;
  var awayBeforeColor = document.getElementById("idawayteamcolor" ).style.backgroundColor;
  var homeBeforeColor = document.getElementById("idhometeamcolor" ).style.backgroundColor;
  var awayBeforeName = document.getElementById("idawayteamname").innerHTML;
  var homeBeforeName = document.getElementById("idhometeamname").innerHTML;

  document.getElementById("idhomepoint").innerHTML  = b;
  document.getElementById("idawaypoint").innerHTML  = a;

  document.getElementById("idhometeamcolor" ).style.backgroundColor = awayBeforeColor;
  document.getElementById("idawayteamcolor" ).style.backgroundColor = homeBeforeColor;

  document.getElementById("idawayteamname").innerHTML = homeBeforeName;
  document.getElementById("idhometeamname").innerHTML = awayBeforeName;
}

/* timer min 증가 +1  */

function minOneUp() {

  var c= document.getElementById("idMin").innerHTML;
  var b= 1;
  var e= Number(c)+1;

  if (document.getElementById("idMin").innerHTML < 9){
    document.getElementById("idMin").innerHTML  = '0'+e;}
  /* 60이상으로 가기 싫을때
  else if (document.getElementById("idMin").innerHTML > 59){
    document.getElementById("idMin").innerHTML  = 10;} */
  else document.getElementById("idMin").innerHTML  = e;
}


/* timer min 증가 +5  */

function minFiveUp() {
   if (document.getElementById("idMin").innerHTML === '00'){
    document.getElementById("idMin").innerHTML = '10';}
  else if (document.getElementById("idMin").innerHTML === '10'){
    document.getElementById("idMin").innerHTML = '20';}
  else if (document.getElementById("idMin").innerHTML === '20'){
    document.getElementById("idMin").innerHTML = '30';}
  else if (document.getElementById("idMin").innerHTML === '30'){
    document.getElementById("idMin").innerHTML = '40';}
  else if (document.getElementById("idMin").innerHTML === '40'){
    document.getElementById("idMin").innerHTML = '50';}
   else if (document.getElementById("idMin").innerHTML === '50'){
    document.getElementById("idMin").innerHTML = '60';}
   else if (document.getElementById("idMin").innerHTML === '60'){
    document.getElementById("idMin").innerHTML = '00';}
  else document.getElementById("idMin").innerHTML = '00';
}


/* timer sec 증가 +1  */

function secOneUp() {

  var c= document.getElementById("idSec").innerHTML;
  var b= 1;
  var e= Number(c)+1;

  if (document.getElementById("idSec").innerHTML < 9){
    document.getElementById("idSec").innerHTML  = '0'+e;}
  /* 60이상으로 가기 싫을때 */
  else if (document.getElementById("idSec").innerHTML > 58){
    document.getElementById("idSec").innerHTML  = 00;}
  else document.getElementById("idSec").innerHTML  = e;
}


/* timer Sec 증가 +5  */

function secFiveUp() {
   if (document.getElementById("idSec").innerHTML === '00'){
    document.getElementById("idSec").innerHTML = '10';}
  else if (document.getElementById("idSec").innerHTML === '10'){
    document.getElementById("idSec").innerHTML = '20';}
  else if (document.getElementById("idSec").innerHTML === '20'){
    document.getElementById("idSec").innerHTML = '30';}
  else if (document.getElementById("idSec").innerHTML === '30'){
    document.getElementById("idSec").innerHTML = '40';}
  else if (document.getElementById("idSec").innerHTML === '40'){
    document.getElementById("idSec").innerHTML = '50';}
   else if (document.getElementById("idSec").innerHTML === '50'){
    document.getElementById("idSec").innerHTML = '00';}
  else document.getElementById("idSec").innerHTML = '00';
}

/* 시간 흐르기 */
    var playing = false;
    var playTime = null;




function timeStart() {
    const idPlay = document.getElementById('idPlay');
    idPlay.classList.toggle("fa-stop");
    if (playing === false)
        {startGame();
          document.getElementById("timectl1").style.display = 'none';
          document.getElementById("timectl2").style.display = 'none';
          document.getElementById("timectl3").style.display = 'none';
          document.getElementById("timectl4").style.display = 'none';
        }
    else stopGame();
 }


    function startGame() {
        playMin = document.getElementById("idMin").innerHTML;
        playSec = document.getElementById("idSec").innerHTML;
        playing = true;
        playTime = setInterval(function () {
            if (playMin <= 0 && playSec <= 0) {
                stopGame();
                return;
            }
            if (playSec <= 0) {
                playSec = 59;
                playMin -= 1;
            } else {
                playSec--;
            }
            $('.timer .min').text(playMin);
            $('.timer .sec').text(playSec);
        }, 1000)
    }

    function stopGame() {
        clearInterval(playTime);
        playing = false;
    }


function timeReset() {
        if (playing === false) {
            stopGame();
            document.getElementById("idSec").innerHTML = '00';
            document.getElementById("idMin").innerHTML = '10';
            document.getElementById("timectl1").style.display = 'inline-block';
            document.getElementById("timectl2").style.display = 'inline-block';
            document.getElementById("timectl3").style.display = 'inline-block';
            document.getElementById("timectl4").style.display = 'inline-block';
            }
        }



/* 소리 나게 만들기 시간 점수 tts */



function PlaySoundFoul() {
          var soundFoul = document.getElementById("audioFoul");
          soundFoul.play()
      }
function PlaySoundStart() {
          var soundStart = document.getElementById("audioStart");
          soundStart.play()
      }

/* 점수 끄기 ok no 누를때 본래의 길 가도록 하기*/

function winOff() {
          if (confirm("Game End?")) {
     location.href = '/';
    }
  }




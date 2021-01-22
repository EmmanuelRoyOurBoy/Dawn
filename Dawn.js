//Almost all the code in this guide is my own, however I will cite certain sources here.
//Code.org for the onEvent, playSound, setScreen, and setImageURL functions.
//The images were generated through an RGB wheel so they don't need citations.
//Music Citations are next. The images are sourced directly from the covers:
//The Whereabouts of Hope/Sora No Kiseki SC/Copyright© Nihon Falcom Corporation
//"Gwyn Lord Of Cinder" Composer: Motoi Sakuraba ℗ Dark Souls™ Ⅲ & ©BANDAI NAMCO Entertainment Inc. / ©2011-2016 FromSoftware, Inc.
//JoJo OP 1 Full Song "Sono Chi no Sadame" by Hiroaki TOMMY Tominaga
//Universal Variables, think songs and button prompts. 
//Songs will be in a list, THESE ARE KEY WORDS FOR THE FUNCTION ARGUMENTS TO PICK THE SONG.
var songs = ["Hope", "Sono", "Gwyn"];
var InputI = ["Red", "Blue", "Green", "Purple"];
var CurrentSong;
var currentimage;
//We are now going to set up the song list and the basic song playback through an onevent and then the function
onEvent("ToSongSelect", "click", function( ) {
  setScreen("SongSelect");
  console.log("Player has entered song select");
});
onEvent("SONOCHI", "click", function( ) {
  //The variable is to later be passed through a function
  CurrentSong = songs[1];
  console.log("You picked jojo's huh.");
  StartGame(CurrentSong);
  StartingImage();
});
onEvent("Cinder", "click", function( ) {
  //The variable is to later be passed through a fun
  CurrentSong = songs[2];
  console.log("Darks souls is hard, but you clearly have good taste.");
  StartGame(CurrentSong);
  StartingImage();
});
onEvent("Hope", "click", function( ) {
  //The variable is to later be passed through a fun
  CurrentSong = songs[0];
  console.log("I'm glad to see you also play kiseki the greatest piece of fiction ever made.");
  StartGame(CurrentSong);
  StartingImage();
});
//Now its function time. We are gonna set up the music playing ascpect first
function StartGame(Song) {
  Song = CurrentSong;
  if (Song === "Hope") {
    playSound("--The-Whereabouts-of-Hope-.mp3", true);
  } else if (Song ==="Sono") {
    playSound("JOJO-SONO-CHINO-SADAME.mp3", true);
  } else if (Song ==="Gwyn") {
    playSound("Gwyn--Lord-of-Cinder.mp3", true);
  }
  setScreen("PlayArea");
}
function StartingImage(randomnum) {
  //Helps correct any potential errors if the user wants to set a seed or any modification of the random number system.
  if (randomnum < 0 || randomnum > 4);
      //Iteration is done here so we can randomize our numbers in a more complex manner.
    for (var i = 0; i < 3; i++) {
    randomnum = randomNumber (0,3);
  }
  //Sorts out the number into actual images that we can set in the game in the GUI.
  if (randomnum == 0) {
    setImageURL("image1", "red.PNG");
    currentimage = "Red";
  } else if ((randomnum == 1)) {
    setImageURL("image1", "blue.PNG");
    currentimage = "Blue";
  } else if (randomnum==2) {
    setImageURL("image1", "green.PNG");
    currentimage = "Green";
  } else {
    setImageURL("image1", "purple.PNG");
    currentimage = "Purple";
  }
  //returns image so we can use it for scoring.
  return currentimage;
}
//Now its time for the colored onevents
var ButtonColor;
onEvent("RED", "click", function( ) {
  //The only difference between the onevents is to set the input to be used for the function. 
  ButtonColor = 0;
  BeginCalc(ButtonColor);
});
onEvent("BLUE", "click", function( ) {
  //The only difference between the onevents is to set the input to be used for the function. 
  ButtonColor = 1;
  BeginCalc(ButtonColor);
});
onEvent("GREEN", "click", function( ) {
  //The only difference between the onevents is to set the input to be used for the function. 
  ButtonColor = 2;
  BeginCalc(ButtonColor);
});
onEvent("Purple", "click", function( ) {
  //The only difference between the onevents is to set the input to be used for the function. 
  ButtonColor = 3;
  BeginCalc(ButtonColor);
});
var Score = 0;
//Now for the calculation function. It basically just checks if the images match and adds a score accordingly.
function BeginCalc(Input) {
  //Sets input to what the arrays color is.
  Input = InputI[ButtonColor];
  //For debugging purposes
  console.log(getText("ScoreNumber"));
  if (Score < 51) {
    if (Input === currentimage) {
      //You can modify the score by adding whatever number instead of 1.
      Score = Score + 1;
      setText("ScoreNumber", Score.toString());
      StartingImage(5);
    } else {
      //You can edit the score lost offest. Just subtract the score instead of adding it.
      setText("ScoreNumber", Score.toString());
      StartingImage(1);
    }
  }
  return Score;
}

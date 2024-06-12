function audioplay(i) {
  let audioPath = "./assest/audio/" + i + ".mp3";
  var audio = new Audio(audioPath);
  var instrument = document.querySelectorAll(".instrument");
  for (var j = 0; j < instrument.length; j++) {
    if (j % 2 == 0) {
      instrument[j].style.backgroundColor = "#fe218b";
    } else {
      instrument[j].style.backgroundColor = "#21b0fe";
    }
  }
  instrument[i].style.backgroundColor = "white";
  audio.play();
}

for (var i = 0; i < document.querySelectorAll(".btn").length; i++) {
  (function (i) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
      audioplay(i);
    });
  })(i);
}

document.addEventListener("keydown", function (event) {
  if (event.key == "w") audioplay(0);
  if (event.key == "a") audioplay(1);
  if (event.key == "s") audioplay(2);
  if (event.key == "d") audioplay(3);
  if (event.key == "i") audioplay(4);
  if (event.key == "j") audioplay(5);
  if (event.key == "k") audioplay(6);
  if (event.key == "l") audioplay(7);
});

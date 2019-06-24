var movies = [
  "Hereditary (2018) dir. Ari Aster",
  "Phantom Thread (2017) dir. Paul Thomas Anderson",
  "La La Land (2016) dir. Damien Chazelle",
  "Spirited Away (2001) dir. Hayao Miyazaki",
  "First Reformed (2017) dir. Paul Schrader",
  "Get Out (2017) dir. Jordan Peele",
  "The Favourite (2018) dir. Yorgos Lanthimos",
  "Eternal Sunshine (2004) dir. Michel Gondry",
  "Perfect Blue (1997) dir. Satoshi Kon",
  "Booksmart (2019) dir. Olivia Wilde"
];

var pics = [];
pics[0] = new Image ();
pics[0].src = "hereditary.jpg";
pics[1] = new Image ();
pics[1].src = "phantomthread.jpg";
pics[2] = new Image ();
pics[2].src = "lalaland.jpg";
pics[3] = new Image ();
pics[3].src = "SpiritedAway.jpg";
pics[4] = new Image ();
pics[4].src = "firstreformed.jpg";
pics[5] = new Image ();
pics[5].src = "getout.jpg";
pics[6] = new Image ();
pics[6].src = "thefav.jpg";
pics[7] = new Image ();
pics[7].src = "eternal.jpg";
pics[8] = new Image ();
pics[8].src = "perfectblue.jpg";
pics[9] = new Image ();
pics[9].src = "booksmart.jpg";

document.getElementById("button").addEventListener("click", function(){
  var num = Math.floor(Math.random() * movies.length);
  document.querySelector("p").innerHTML = movies[num];
  document.querySelector("img").src =pics[num].src;
})

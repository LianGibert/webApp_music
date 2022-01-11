let totesImg = [
    {
        "nom": "THE BEATLES",

        "imatge1": "IMG/1beatles.png",

        "text": "Gènere - Pop-Rock",
        "text2": "Lloc - Liverpool, Anglaterra",
        "text3": "Membres - John Lennon, Paul McCartney, George Harrison i Ringo Starr",
        "audio": "AUDIO/beatles.mp3",
        "video":"VIDEO/beatles.mp4",


    },
    {
        "nom": "BTS",
        "imatge1": "IMG/2bts.png",
        "text": "Gènere - K- Pop",
        "text2": "Lloc - Seül, Corea Sud",
        "text3": "Membres - Kim Taehyung, Suga, RM, Jungkook, J-Hope, Jin, Jimin",
        "audio": "AUDIO/bts.mp3",
         "video":"VIDEO/bts.mp4",
    },
    {
        "nom": "DUKI",

        "imatge1": "IMG/3duki.png",

        "text": " Gènere - Rap",
        "text2": "Lloc - Almagro, Argentina",
        "text3": "Neixement - 24 de Juny del 1996 ",
        "audio": "AUDIO/duki.mp3",
         "video":"VIDEO/duki.mp4",
    },
    {
        "nom": "IMAGINE DRAGONS",

        "imatge1": "IMG/4imagine.png",

        "text": " Gènere - Pop-Rock",
        "text2": "Lloc - Nevada, Estats Units",
        "text3": "Membres - Dan Reynolds, Ben McKee,Daniel Wayne Sermon, Daniel Platzman",
        "audio": "AUDIO/imagine.mp3",
         "video":"VIDEO/imagine.mp4",
    },
    {
        "nom": "JEREMY ZUCKER",

        "imatge1": "IMG/5jeremy.png",

        "text": "  Gènere - Indietrònica i Hip Hop",
        "text2": "Lloc - Fran. Lakes, Nova Jersey",
        "text3": "Neixement - 3 de Març del 1996 ",
        "audio": "AUDIO/jeremy.mp3",
         "video":"VIDEO/jeremy.mp4",
    },
    {
        "nom": "ROSALÍA",

        "imatge1": "IMG/6rosalia.png",

        "text": "Gènere - Pop / Flamenc",
        "text2": "Lloc - Barcelona, Catalunya",
        "text3": "Neixement - 25 de Setembre del 1992 ",
        "audio": "AUDIO/rosalia.mp3",
         "video":"VIDEO/rosalia.mp4",
    },
    {
        "nom": "SOPA DE CABRA",

        "imatge1": "IMG/7sopa.png",

        "text": " Gènere - Rock Català",
        "text2": "Lloc - Girona, Catalunya",
        "text3": "Membres - Gerard Quintana, Josep Thió, Francesc Lisicic, Josep Bosch, Jaume Soler, Valen Nieto, Ricard Sohn",
        "audio": "AUDIO/sopa.mp3",
         "video":"VIDEO/sopa.mp4",
    },

    {
        "nom": "STAY HOMAS",

        "imatge1": "IMG/8stayhomas.png",

        "text": " Gènere - Pop/ Música Catalana",
        "text2": "Lloc - Barceona, Catalunya",
        "text3": "Membres - Klaus Stroink, Guillem Boltó Grande, Rai Benet",
        "audio": "AUDIO/stay.mp3",
         "video":"VIDEO/stay.mp4",

    },
    {
        "nom": "ZETAZEN",

        "imatge1": "IMG/9zetazen.png",

        "text": " Gènere - Rap, R &B",
        "text2": "Lloc - Madird, Espanya",
        "text3": "Neixement - 7 d’Agost del 1993 ",
        "audio": "AUDIO/zetazen.mp3",
         "video":"VIDEO/zetazen.mp4",
    },

    {
        "nom": "MARC SEGUI",

        "imatge1": "IMG/10marc.png",

        "text": "Gènere - Indietrònica i Hip H op",
        "text2": "Lloc - Palma de MAllorca, Espanya",
        "text3": "Neixement - 22 d’Abril del 1998 ",
        "audio": "AUDIO/marc.mp3",
         "video":"VIDEO/marc.mp4",

    }
];

let mostrada = 0;


let myElement = document.getElementById('pantalla');

// create a simple instance
// by default, it only adds horizontal recognizers
let mc = new Hammer(myElement);



// listen to events...
mc.on("swipeleft", function (ev) {

    // Aqui posem el codi que s'executarà quan es faci un pan horitzontal.
    //Següent imatge.

    mostrada++;
    //    mostrada = mostrada+1;

    if (mostrada >= totesImg.length) {
        mostrada = 0;
    }

    mostrarPerfil();


});


function mostrarPerfil() {
    document.getElementById("img1").src = totesImg[mostrada].imatge1;
    document.getElementById("musica").src = totesImg[mostrada].audio;
    document.getElementById("nom").innerHTML = totesImg[mostrada].nom;
    document.getElementById("text").innerHTML = totesImg[mostrada].text;
    document.getElementById("text2").innerHTML = totesImg[mostrada].text2;
    document.getElementById("text3").innerHTML = totesImg[mostrada].text3;
    document.getElementById("rutaVideo").src = totesImg[mostrada].video;
    document.getElementById("vi").load();
    document.getElementById("vi").play();
    
}

mc.on("swiperight", function (ev) {

    // Aqui posem el codi que s'executarà quan es faci un pan horitzontal.
    // Imatge anterior.


    mostrada--;
    //    mostrada = mostrada-1;


    if (mostrada < 0) {
        mostrada = totesImg.length - 1;
    }

    //    document.getElementById("img1").src = totesImg[mostrada];
    mostrarPerfil();
});



// listen to events...
let myElement2 = document.getElementById('img1');

// create a simple instance
// by default, it only adds horizontal recognizers
let mc2 = new Hammer(myElement);

mc2.on("doubletap", function (ev) {

    setTimeout(mostrarPerfil, 1000);

});

document.getElementById("so").onclick = playPauseAudio;

function playPauseAudio() {
    //    document.getElementById("musica").muted = false;


    if (document.getElementById("musica").paused) {
        document.getElementById("musica").play();
        document.getElementById("so").src = "IMG/audio.png";
    } else {
        document.getElementById("musica").pause();
        document.getElementById("so").src = "IMG/NOAudio.png";
    }
}


setTimeout(function () {

        document.getElementById("pantalla").style.zIndex = 15;
        document.getElementById("musica").pause();
    }, 4000

);

//
//var myElement = document.getElementById('myElement');
//
//// create a simple instance
//// by default, it only adds horizontal recognizers
//var mc = new Hammer(myElement);

// let the pan gesture support all directions.
// this will block the vertical scrolling on a touch-device while on the element
mc.get('pan').set({
    direction: Hammer.DIRECTION_ALL
});

// listen to events...
mc.on("panup", function (ev) {
   document.getElementById("rutaVideo").src = totesImg[mostrada].video;
   document.getElementById("video1").style.opacity = 0.5;
   document.getElementById("img1").style.opacity = 0;
    
    document.getElementById("musica").pause();
    document.getElementById("vi").play();
});


mc.on("pandown", function (ev) {
   document.getElementById("video1").style.opacity = 0;
   document.getElementById("img1").style.opacity = 0.5;
    
    document.getElementById("musica").play();
    document.getElementById("vi").pause();
});

// myFunction to manipulate nav bar
function myFunction() {
    var x = document.getElementById("nav_bar");

    if(x.className === "nav_bar") {
        x.className += " responsive"
    }

    else{
        x.className = "nav_bar"
    }
}

// aboutReadMore Functions

// MISSION
function missionReadMore() {
    var dotsOne = document.getElementById("dots1");
    var moreTextOne = document.getElementById("more1");
    var missionText = document.getElementById("mission");

    if(dotsOne.style.display === "none") {
        dotsOne.style.display = "inline";
        missionText.innerHTML = "Read more";
        moreTextOne.style.display = "none";
    }
    
    else{
        dotsOne.style.display = "none";
        missionText.innerHTML = "Read less";
        moreTextOne.style.display = "inline";
    }
}

// VISION
function visionReadMore() {
    var dotsTwo = document.getElementById("dots2");
    var moreTextTwo = document.getElementById("more2");
    var visionText = document.getElementById("vision");

    if(dotsTwo.style.display === "none") {
        dotsTwo.style.display = "inline";
        visionText.innerHTML = "Read more";
        moreTextTwo.style.display = "none";
    }
    
    else{
        dotsTwo.style.display = "none";
        visionText.innerHTML = "Read less";
        moreTextTwo.style.display = "inline";
    }
}


// PRIVACY
function privacyReadMore() {
    var dotsThree = document.getElementById("dots3");
    var moreTextThree = document.getElementById("more3");
    var privacyText = document.getElementById("privacy");

    if(dotsThree.style.display === "none") {
        dotsThree.style.display = "inline";
        privacyText.innerHTML = "Read more";
        moreTextThree.style.display = "none";
    }
    
    else{
        dotsThree.style.display = "none";
        privacyText.innerHTML = "Read less";
        moreTextThree.style.display = "inline";
    }
}


// GOOGLE MAP SECTION
function myMap() {
    var mapProp = {
        center : new google.maps.LatLng(51.508742, -0.120850),
        zoom:5,
    };

    var map = new google.maps.Map(document.getElementById("google_map"), mapProp);
}
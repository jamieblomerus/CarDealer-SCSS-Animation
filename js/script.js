/*
Author:         Jamie Blomerus
Last updated:   2022-10-31
*/

const models = {
    "red": {
        "imageurl": "https://openclipart.org/download/61201/simple-travel-car-top-view.svg",
        "name": "Red Car",
        "description": "A red car",
        "price": 1000
    },
    "pink": {
        "imageurl": "https://openclipart.org/download/190174/SimplePinkCarTopView.svg",
        "name": "Pink Car",
        "description": "A pink car",
        "price": 2000
    },
    "orange": {
        "imageurl": "https://openclipart.org/download/190175/SimpleOrangeCarTopView.svg",
        "name": "Orange Car",
        "description": "An orange car",
        "price": 2500
    },
}

var cars = document.getElementsByClassName("road").item(0).getElementsByClassName("car");
var modeloverlay = document.getElementsByClassName("modeloverlay").item(0);

Array.from(cars).forEach(function(car) {
    var model = car.id;
    car.addEventListener("click", function() { showOverlay(model); });
});

function showOverlay(model) {
    if (models[model]) {
        var modelData = models[model];
    } else {
        console.warn("Model '" + model + "' not found");
        return;
    }

    modeloverlay.getElementsByClassName("modelimg").item(0).src = modelData.imageurl;
    modeloverlay.getElementsByClassName("modelname").item(0).innerText = modelData.name;
    modeloverlay.getElementsByClassName("modeldescription").item(0).innerText = modelData.description;
    modeloverlay.getElementsByClassName("modelprice").item(0).innerText = modelData.price;
    modeloverlay.style.display = "flex";
    modeloverlay.style.animation = "fadein 0.5s";
}

function hideOverlay() {
    modeloverlay.style.animation = "fadeout 0.5s";
    setTimeout(function() {
        modeloverlay.style.display = "none";
    }, 500);
}

// Our models
var modelswidget = document.getElementsByClassName("models").item(0);
var modelswidgetcontent = modelswidget.getElementsByClassName("grid").item(0);

Object.entries(models).forEach(function(model) {
    var newmodel = document.createElement("a");
    newmodel.innerHTML = `
        <img src="`+model[1].imageurl+`"></img>
        <p>`+model[1].name+`</p>
    `;
    newmodel.addEventListener("click", function() { showOverlay(model[0]); });
    modelswidgetcontent.appendChild(newmodel);
});

// Our models button reveal
var modelsbutton = document.getElementsByClassName("modelsbtn").item(0);

modelsbutton.addEventListener("click", function() {
    modelswidget.style.display = "block";
    modelswidget.style.animation = "fadein 0.5s";
});

function closemodelswidget() {
    modelswidget.style.animation = "fadeout 0.5s";
    setTimeout(function() {
        modelswidget.style.display = "none";
    }, 500);
}

// Announcement button reveal
var announcementbutton = document.getElementsByClassName("announcementsbtn").item(0);
var announcement = document.getElementsByClassName("announcements").item(0);

announcementbutton.addEventListener("click", function() {
    announcement.style.display = "block";
    announcement.style.animation = "fadein 0.5s";
});

function closeannouncementswidget() {
    announcement.style.animation = "fadeout 0.5s";
    setTimeout(function() {
        announcement.style.display = "none";
    }, 500);
}

//Credit
var madeby = document.createElement("p");
madeby.classList.add("madeby");
madeby.innerHTML = "Made with ❤️ by <a href='https://jamie.blomerus.se/'>Jamie Blomerus</a>";
document.body.appendChild(madeby);
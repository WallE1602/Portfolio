document.addEventListener("DOMContentLoaded", function () {
    mapTechData();
});

function mapTechData() {
    let tech = [
        {
            "name": "Python",
            "icon": "images/tech/python.png",
            "type": "ai-tech"
        },
        {
            "name": "Tensorflow",
            "icon": "images/tech/tf.png",
            "type": "ai-tech"
        },

        {
            "name": "Jupyter Notebook",
            "icon": "images/tech/Jupyter.png",
            "type": "ai-tech"
        },

        {
            "name": "Pytorch",
            "icon": "images/tech/pytorch.png",
            "type": "ai-tech"
        },

        {
            "name": "OpenCV",
            "icon": "images/tech/opencv.png",
            "type": "ai-tech"
        },

        {
            "name": "Keras",
            "icon": "images/tech/keras.png",
            "type": "ai-tech"
        },


        {
            "name": "Flutter",
            "icon": "images/tech/flutter.svg",
            "type": "mobile-tech"
        },
        {
            "name": "Dart",
            "icon": "images/tech/dart.svg",
            "type": "mobile-tech"
        },
        {
            "name": "HTML 5",
            "icon": "images/tech/html.svg",
            "type": "web-tech"
        },
        {
            "name": "CSS 3",
            "icon": "images/tech/css.svg",
            "type": "web-tech"
        },
        {
            "name": "Bootstrap",
            "icon": "images/tech/bootstrap.svg",
            "type": "web-tech"
        },
        {
            "name": "Javascript",
            "icon": "images/tech/js.svg",
            "type": "web-tech"
        },

        {
            "name": "WordPress",
            "icon": "images/tech/wp.png",
            "type": "web-tech"
        },

        {
            "name": "REST APIs",
            "icon": "images/tech/api.svg",
            "type": "server-tech"
        },
        {
            "name": "Postman",
            "icon": "images/tech/postman.png",
            "type": "server-tech"
        },

        {
            "name": "Firebase",
            "icon": "images/tech/firebase.svg",
            "type": "database-tech"
        },
        {
            "name": "MongoDB",
            "icon": "images/tech/mongo.svg",
            "type": "database-tech"
        },
        {
            "name": "MySQL",
            "icon": "images/tech/mysql.png",
            "type": "database-tech"
        },

        {
            "name": "Postgres SQL",
            "icon": "images/tech/sql.svg",
            "type": "database-tech"
        },

        {
            "name": "Tableau",
            "icon": "images/tech/tableau.png",
            "type": "dataviz-tech"
        },

        {
            "name": "bi",
            "icon": "images/tech/bi.png",
            "type": "dataviz-tech"
        },



        {
            "name": "GitHub",
            "icon": "images/tech/github.svg",
            "type": "vc-tech"
        },

        {
            "name": "Figma",
            "icon": "images/tech/figma.svg",
            "type": "design-tech"
        },
        {
            "name": "Adobe XD",
            "icon": "images/tech/adobexd.svg",
            "type": "design-tech"
        }
    ];

    for (var i = 0; i < tech.length; i++) {
        // div
        var techDiv = document.createElement("div");
        techDiv.className = "tech";

        // icon
        var techIconImg = document.createElement("img");
        techIconImg.className = "tech-icon";
        if (tech[i]["name"] == "Node.js" || tech[i]["name"] == "Dart Frog") {
            techIconImg.style.height = "25px";
        }

        // tech name
        var techName = document.createElement("span");
        techName.className = "tech-label";

        techIconImg.src = tech[i]["icon"];
        techIconImg.alt = tech[i]["name"];

        techName.innerHTML = tech[i]["name"];

        var relatedDiv = document.getElementById(tech[i]["type"]);

        techDiv.appendChild(techIconImg);
        techDiv.appendChild(techName);
        relatedDiv.appendChild(techDiv);
    }
}
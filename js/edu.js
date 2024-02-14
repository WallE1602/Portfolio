document.addEventListener("DOMContentLoaded", function () {
    mapEduLinksData();
});


function mapEduLinksData() {
    let edusocials = [
        {
            "icon": "fa-solid fa-user-graduate",
            "value": "http://iub.ac.bd/academics/departments/cse"
        },
        {
            "icon": "fa fa-github",
            "value": "https://github.com/WallE1602"
        },

    ];

    // icons in top section
    for (var i = 0; i < edusocials.length; i++) {
        var anchor = document.createElement("a");
        anchor.className = "social-icon-wrapper";

        var icon = document.createElement("i");
        icon.className = "social-icon " + edusocials[i]["icon"];

        var link = edusocials[i]["value"];
        anchor.href = link;
        anchor.target = "_blank";

        anchor.appendChild(icon);

        var socialHandles = document.getElementById("edu-handles");
        socialHandles.appendChild(anchor);
    }
}
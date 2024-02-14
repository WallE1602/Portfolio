document.addEventListener("DOMContentLoaded", function () {
    mapCommunityData();
});

function mapCommunityData() {

    let communities = [
        {
            "name": "IEEE Computer Society IUB SBC",
            "role": "Student Mentor",
            "session": "Feb 2020 – Feb 2022",
            "logo": "images/community/ieee.png",
            "link": "",
            "details": "Supervised the present executive committee as it develops and organizes various events and activities. Provided guidance in decision-making situations for organizational tasks."
        },
        {
            "name": "IEEE Computer Society IUB SBC",
            "role": "Treasurer",
            "session": "Feb 2022 – Feb 2023",
            "logo": "images/community/ieee.png",
            "link": "",
            "details": "Budget preparation and management. Acted as a liaison between the department and the organization. Reported on official activities and events in IEEE vTools. We won 'Best CS Student Branch Chapter' in 2020, 2021. ",

        },
        {
            "name": "IEEE Computer Society IUB SBC",
            "role": "IT & Communication Coordinator",
            "session": " Nov 2018 – Feb 2020",
            "logo": "images/community/ieee.png",
            "link": "",
            "details": "Assisted with different organizational responsibilities such as event management, IT, and logistics. Maintained various data in spreadsheets and email management. Other responsibilities include event brainstorming and research for possible event sponsors. During this time, We won 'Outstanding Participation in IEEE Computer Society Events' in 2018 and 'Best IEEE Computer Society Student Chapter Award' (on Activities in 2018)",

        },
        

    ];

    for (var i = 0; i < communities.length; i++) {
        var com = communities[i];
        var name = com.name;
        var role = com.role;
        var session = com.session;
        var logo = com.logo;
        var link = com.link;
        var details = com.details;

        var card = document.createElement("a");
        card.className = "community-card";

        var image = document.createElement('img');
        image.className = "community-logo";
        image.src = logo;
        image.alt = name;

        var info = document.createElement("div");
        info.className = "community-info";

        var cName = document.createElement("p");
        cName.className = "body1 c-title";
        cName.textContent = name;

        var cRole = document.createElement("span");
        cRole.className = "body2 c-position";
        cRole.innerHTML = role;

        var cSession = document.createElement("p");
        cSession.className = "label c-session";
        cSession.textContent = session;

        info.appendChild(cName);
        info.appendChild(cRole);
        info.appendChild(cSession);

        card.appendChild(image);
        card.appendChild(info);

        card.href = link;
        card.target = "_blank";

        var communitiesDiv = document.getElementById("communities");
        communitiesDiv.append(card);

        var point = document.createElement("li");
        point.className = "body2 cw-point";
        point.innerHTML = details;

        var points = document.getElementById("cw-points");
        points.appendChild(point);
    }
}
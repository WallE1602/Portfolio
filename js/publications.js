document.addEventListener("DOMContentLoaded", function () {
    mapPublicationsData();
});

function mapPublicationsData() {
    let publications = [
        {
            "title": "Kidney Tumor Recognition from Abdominal CT Images using Transfer Learning",
            "subtitle": "2023 IEEE 53rd International Symposium on Multiple-Valued Logic (ISMVL)",
            "image": "images/projects/ktr.png",
            "type": "Conference Paper",
            "labels": [
                {
                    "title": "IEEE",
                    "link": "https://ieeexplore.ieee.org/document/10153815"
                },
                {
                    "title": "ResearchGate",
                    "link": "https://www.researchgate.net/publication/371906153_Kidney_Tumor_Recognition_from_Abdominal_CT_Images_using_Transfer_Learning"
                },
                {
                    "title": "GoogleScholar",
                    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=jjaMIgYAAAAJ&citation_for_view=jjaMIgYAAAAJ:u-x6o8ySG0sC"
                },
            ]
        },
        {
            "title": "Investigation of a Cow Urine-Based Power Generation Technology model for a Cost-Effective and Sustainable Energy Source",
            "subtitle": "International Journal of Innovation and Applied Studies",
            "image": "images/projects/urine.png",
            "type": "Journal Article",
            "labels": [

                {
                    "title": "ResearchGate",
                    "link": ""
                },
                {
                    "title": "GoogleScholar",
                    "link": ""
                },
            ]
        },
        {
            "title": "Automated semantic segmentation of pelvic bones and fracture diagnosis from radiographic images [2024]",
            "subtitle": "Submitted at Scientific Reports [In Review]",
            "image": "images/projects/pubprogress.png",
            "type": "Journal Article",
            "labels": [

                {
                    "title": "ResearchGate",
                    "link": ""
                },
                {
                    "title": "GoogleScholar",
                    "link": ""
                },
            ]
        },
        {
            "title": "A Deep Learning Approach for Cyst and Tumor-Cyst Classification using VGG-16 Architecture on Abdominal CT Images [2024]",
            "subtitle": "Submitted at (ICAEEE 2024) [In Review]",
            "image": "images/projects/pubprogress.png",
            "type": "Conference Paper",
            "labels": [
            ]
        },
        {
            "title": "Kidney Tumor Localization from Abdominal CT Images [2024]",
            "subtitle": "In Progress",
            "image": "images/projects/pubprogress.png",
            "type": "Journal Article",
            "labels": [

                {
                    "title": "ResearchGate",
                    "link": ""
                },
                {
                    "title": "GoogleScholar",
                    "link": ""
                },
            ]
        },
    ];

    for (var i = 0; i < publications.length; i++) {
        var publication = publications[i];
        var title = publication.title;
        var subtitle = publication.subtitle;
        var type = publication.type;
        var image = publication.image;

        var card = document.createElement('div');
        card.className = "publication-card";

        var imageDiv = document.createElement('div');
        imageDiv.className = "pub-image";
        var publicationLabel = document.createElement("div");
        publicationLabel.className = "label pub-type";
        publicationLabel.innerHTML = type;

        var publicationImg = document.createElement("img");
        publicationImg.className = "pub-image-bg";
        publicationImg.src = image;
        publicationImg.alt = title;

        imageDiv.appendChild(publicationLabel);
        imageDiv.appendChild(publicationImg);

        var publicationName = document.createElement("p");
        publicationName.className = "body1 pub-title";
        publicationName.innerHTML = title;

        var publicationSubtitle = document.createElement("p");
        publicationSubtitle.className = "subtitle pub-subtitle";
        publicationSubtitle.innerHTML = subtitle;

        var labels = document.createElement("div");
        labels.className = "pub-labels";

        for (var j = 0; j < publication.labels.length; j++) {
            var title = publication.labels[j]["title"];
            var link = publication.labels[j]["link"];

            var label = document.createElement('a');
            label.className = "pub-label";
            var labelIcon = document.createElement("i");

            if (title == "IEEE") {
                labelIcon.className = "pub-label-icon fa-solid fa-book-atlas";
            } else if (title == "ResearchGate") {
                labelIcon.className = "pub-label-icon fa-brands fa-researchgate";
            } else if (title == "GoogleScholar") {
                labelIcon.className = "pub-label-icon fa-brands fa-google-scholar";
            } else if (title == "GitHub") {
                labelIcon.className = "pub-label-icon fa fa-github";
            } else if (title == "Package") {
                labelIcon.className = "pub-label-icon material-icons";
                labelIcon.innerHTML = "widgets";
                labelIcon.style.fontSize = "16px";
            }

            var labelText = document.createElement("span");
            labelText.className = "label pub-label-text";
            labelText.innerHTML = title;

            label.href = link;
            label.target = "_blank";

            label.appendChild(labelIcon);
            label.appendChild(labelText);

            labels.appendChild(label);
        }


        card.appendChild(publicationLabel);
        card.appendChild(publicationImg);
        card.appendChild(publicationName);
        card.appendChild(publicationSubtitle);
        card.appendChild(labels);

        var publicationsDiv = document.getElementById("projects1");
        publicationsDiv.appendChild(card);
    }
}
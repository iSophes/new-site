const galleryData = {
    "Island-Tycoon-Gallery": [
        'assets/gallery/island-tycoon/Fishing.png', 
        'assets/gallery/island-tycoon/TreeChopping.png', 
        'assets/gallery/island-tycoon/TycoonClaiming.png'
    ],
    "Playverse-Gallery": [
        'assets/gallery/playverse/presidents-shop.png'
    ]
};

const altTexts = {
    "Island-Tycoon-Gallery": [
        'An Image of Sophie Fishing in Island Tycoon',
        'Tree Chop!', 
        'Claiming a tycoon!'
    ],
    "Playverse-Gallery": [
        'The shop + UI of Presidents! It is all fully functional and is powered by Fusion\n0.3 by Elttob.',
    ]
}

const Indexes = {
    "Island-Tycoon-Gallery": 1,
    "Playverse-Gallery": 1
};

function start(){
    for (x in galleryData){
        const gallery = document.getElementById(`${x}-image`);
        const altText = document.getElementById(`${x}-text`);
        const images = galleryData[x];
        const alts = altTexts[x];

        gallery.src = images[0];
        gallery.altText = alts[0];
        altText.innerText = alts[0];
    };
};

function moveImage(sectionId, direction) {
    const gallery = document.getElementById(`${sectionId}-image`);
    const altText = document.getElementById(`${sectionId}-text`);
    const images = galleryData[sectionId];
    const alts = altTexts[sectionId];
    Indexes[sectionId];

    if (direction === 'next') {
        if (Indexes[sectionId] === images.length){
            Indexes[sectionId] = 1; 
        }
        else {
            Indexes[sectionId] = Indexes[sectionId] + 1;
        };

    } else if (direction === 'prev') {
        if (Indexes[sectionId] === 1){
            Indexes[sectionId] = images.length; 
        }
        else {
            Indexes[sectionId] = Indexes[sectionId] - 1;
        }; 
    }

    gallery.src = images[Indexes[sectionId] - 1];
    gallery.altText = alts[Indexes[sectionId] - 1];
    altText.innerText = alts[Indexes[sectionId] - 1];

}

start();
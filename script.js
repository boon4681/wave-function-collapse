let sampleImage;
let canvas;
let WFC;
let sprite = {}

let readyToGenerate = false;
let finished = false;

let steps = 100;
let avg_steps = 0;
let rendered_frames = 0;
let url_params;

let drawCell;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    url_params = getURLParams();
    displayBackgroundTiles = Number(url_params.dbt || "0");
    createDrawCell();
    const imagePath = `data/wfc.png`;

    sprite[[75, 105, 47]] = loadImage('/assets/sprite_0.png');
    sprite[[95, 205, 228]] = loadImage('/assets/sprite_1.png');
    sprite[[99, 155, 255]] = loadImage('/assets/sprite_2.png');
    sprite[[55, 148, 110]] = loadImage('/assets/sprite_3.png');
    sprite[[153, 229, 80]] = loadImage('/assets/sprite_4.png');
    sprite[[0, 0, 0]] = loadImage('/assets/sprite_5.png');
    sprite[[172, 50, 50]] = loadImage('/assets/sprite_6.png');
    sprite[[217, 87, 99]] = loadImage('/assets/sprite_7.png');
    sampleImage = loadImage(imagePath, createField, () => {
        alert("Image couldn't be loaded );");
    });

}

function draw() {
    if (readyToGenerate) {
        let time_start = performance.now();
        for (let row of WFC.grid) for (let elt of row) elt.display();
        let i = 0;
        if (!finished) {
            while (i++ < 1000) {
                WFC.updateStep();

                if (i % 10 == 0) if (performance.now() - time_start > 33.3) break;
            }
        }
        avg_steps += i;
        rendered_frames++;
    } else {
        background(0, 10, 60);
    }
}

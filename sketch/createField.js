createField = async (_) => {
    const N = 4;
    const symmetry = 0;
    Field.createFromImage(
        sampleImage,
        N,
        symmetry,
        (w =
            floor(floor(width / widthDivider) / sampleImage.width + 1) *
            sampleImage.width),
        (h = floor(height / heightDivider))
    ).then((field) => {
        WFC = field;
        WFC.seed();

        readyToGenerate = true;
        background(background_color);

        tileW = width / floor(width / widthDivider);
        tileH = height / floor(height / heightDivider);
        tileSpacing = min(tileH, tileW) / 8;
        tileBorderRadius = tileSpacing * 1.3;
        sw = (tileW - tileSpacing) / 4;

        console.log("Succesfully finished loading...");
        console.log({ width: WFC.W, height: WFC.H });
        main_timer -= performance.now();
    });
};

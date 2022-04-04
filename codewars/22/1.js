function recycle(array) {
    // paper, glass, organic, and plastic
    let paper = [];
    let glass = [];
    let organic = [];
    let plastic = [];
    let materials =  [paper, glass, organic, plastic];
    let materialsNames =  ["paper", "glass", "organic", "plastic"];

    // console.dir(paper);
    if( array.length ==0){
        return materials;
    }

    array.forEach(m=>{
        materials[materialsNames.indexOf(m.material)].push(m.type);
        if (m.secondMaterial) {
            materials[materialsNames.indexOf(m.secondMaterial)].push(m.type);
        }
    });

    console.log(materials);
    return materials;
}

let input = [
    {"type": "rotten apples", "material": "organic"},
    {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
    {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
    {"type": "amazon box", "material": "paper"},
    {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
];
recycle(input);

// input = [
//     {"type": "rotten apples", "material": "organic"},
//     {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
//     {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
//     {"type": "amazon box", "material": "paper"},
//     {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
// ]
//
// output = [
//     ["wine bottle", "amazon box", "beer bottle"],
//     ["wine bottle", "beer bottle"],
//     ["rotten apples", "out of date yogurt"],
//     ["out of date yogurt"]
// ]
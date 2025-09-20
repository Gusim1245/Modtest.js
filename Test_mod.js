mod.info = {
    name: "Test",
    author: "Gusim_dograu",
    version: "1.0",
    description: "Um teste feio por mim"
};

// Elemento petrolium
elements.petrolium = {
    color: ["#4c4c4c", "#242424"],
    behavior: [
        "XX|XX|XX",
        "XX|LIQUID|XX",
        "XX|XX|XX"
    ],
    category: "liquids",
    state: "liquid",
    tempHigh: 250,
    behaviorOnHighTemp: function(pixel) {
        if(Math.random() < 0.5) {  
            changePixel(pixel, "plastic");  
        }
    }
};

// Elemento microOrganism
elements.microOrganism = {
    color: ["#26b65a", "#266b08"],
    behavior: [
        "XX|XX|XX",
        "MOVE|XX|MOVE",
        "XX|MOVE|XX"
    ],
    category: "life",
    state: "powder",
    tempHigh: 50,
    behaviorOnHighTemp: function(pixel) {
        if(Math.random() < 0.5) {  
            changePixel(pixel, "petrolium");  
        }
    }
};

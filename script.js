const sliders = document.querySelectorAll(".slider");
const numberBoxes = document.querySelectorAll(".numberBox");

sliders.forEach((slider, index) => {
    const numberBox = numberBoxes[index];

    // Slider moves → update number box
    slider.addEventListener("input", () => {
        numberBox.value = slider.value;
    });

    // Number box changes → update slider
    numberBox.addEventListener("input", () => {
        let val = Number(numberBox.value);
        if (val < 0) val = 0;
        if (val > 100) val = 100;

        numberBox.value = val;
        slider.value = val;
    });
});

document.querySelectorAll(".Political label, .Economic label, .Socio-Cultural label, .Technological label, \
    .Ecological label, .Legal label, .RivalryAmongExistingCompetitors label, .ThreatOfNewEntrants label, \
     .BargainingPowerOfBuyers label, .ThreatOfSubstitutes label, .BargainingPowerOfSuppliers label").forEach(label => {
    label.addEventListener("click", () => {
        const section = label.parentElement;
        const definition = section.querySelector(".definition");
        definition.classList.toggle("active");
    });
});

function reachTargets() {
    let majorFactorSum = 0;
    let minorFactorSum = 0;

    // Sum major factors
    document.querySelectorAll(".MajorFactorSliders .numberBox").forEach(input => {
        majorFactorSum += Number(input.value);
    });
    majorFactorSum *= 0.16;

    // Sum minor factors
    document.querySelectorAll(".MinorFactorsSliders .numberBox").forEach(input => {
        minorFactorSum += Number(input.value);
    });
    minorFactorSum *= 1/30;

    // Combined factor
    let totalFactorValue = majorFactorSum + minorFactorSum;

    const targetValue = Number(document.querySelector(".targetToReach").value);

    const result = targetValue / totalFactorValue * 100;

    document.getElementById("valueComparedToTarget").textContent = result.toFixed(2);
}
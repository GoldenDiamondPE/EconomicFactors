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

function reachTarget() {
    const targetValue = Number(document.querySelector(".targetToReach").value);

    // Collect major and minor inputs
    const majorInputs = document.querySelectorAll(".MajorFactorSliders .numberBox");
    const minorInputs = document.querySelectorAll(".MinorFactorsSliders .numberBox");

    // Sum values
    let majorSum = 0;
    majorInputs.forEach(input => majorSum += Number(input.value));

    let minorSum = 0;
    minorInputs.forEach(input => minorSum += Number(input.value));

    // Max possible values
    const majorMax = majorInputs.length * 100;
    const minorMax = minorInputs.length * 100;

    // Scale to 80% major, 20% minor
    const majorScaled = (majorSum / majorMax) * 0.80;
    const minorScaled = (minorSum / minorMax) * 0.20;

    // Combined factor (max 1.0 total)
    const totalFactorValue = majorScaled + minorScaled;

    // Compare against target
    const result = totalFactorValue * targetValue;


    document.getElementById("valueComparedToTarget").textContent = result.toFixed(2);
}

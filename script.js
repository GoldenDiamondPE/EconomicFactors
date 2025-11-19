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
        if (val < 1) val = 1;
        if (val > 100) val = 100;

        numberBox.value = val;
        slider.value = val;
    });
});


document.querySelectorAll(".RivalryAmongExistingCompetitors, .ThreatOfNewEntrants, .BargainingPowerOfBuyers, .ThreatOfSubstitutes, .BargainingPowerOfSuppliers, .Legal, .Ecological, .Technological, .Socio-Cultural, .Economic, .Political").forEach(section => {
    section.addEventListener("click", () => {
        const definition = section.querySelector(".definition");
        definition.classList.toggle("active");
    });
});

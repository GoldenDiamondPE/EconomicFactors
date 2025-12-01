const sliders = document.querySelectorAll(".slider");
const numberBoxes = document.querySelectorAll(".numberBox");
let numberTotal = 0;

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

    numberTotal += numberBox.value;
    
});


sliders.forEach((slider, index) => {
    const numberBox = numberBoxes[index];
    numberTotal += numberBox.value;
    console.log(numberTotal);
});

/*

For each box, add to total

if click button
    from total check to see if greater than 100


*/
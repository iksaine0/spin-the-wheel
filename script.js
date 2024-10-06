const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");
const resultDiv = document.getElementById("result");
const desiredOptionInput = document.getElementById("desiredOption");

spinBtn.addEventListener("click", () => {
    const desiredOption = desiredOptionInput.value; // Get the desired option from the input field
    const options = ["800", "600", "400", "200", "100"];
    
    if (!options.includes(desiredOption)) {
        resultDiv.innerText = "Invalid option! Please enter a valid option.";
        return;
    }

    const index = options.indexOf(desiredOption); // Find the index of the desired option
    const anglePerOption = 360 / options.length;
    const desiredDegree = index * anglePerOption; // Calculate the angle for the desired option
    const randomSpinMultiplier = Math.floor(Math.random() * 5) + 5; // Spin multiple times

    // Set the total spin angle
    const totalSpinAngle = desiredDegree + randomSpinMultiplier * 360;

    wheel.style.transform = `rotate(${totalSpinAngle}deg)`;

    // Set result after spin duration
    setTimeout(() => {
        resultDiv.innerText = `You landed on: ${desiredOption}`;
    }, 4000); // Match this timeout with the duration of the spin
});

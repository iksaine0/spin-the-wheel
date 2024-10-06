const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");
const resultDiv = document.getElementById("result");

spinBtn.addEventListener("click", () => {
    const randomDegree = Math.floor(Math.random() * 360 + 360 * 5); // Spin multiple times
    wheel.style.transform = `rotate(${randomDegree}deg)`;

    // Calculate the winning option based on the random degree
    const result = calculateResult(randomDegree);
    setTimeout(() => {
        resultDiv.innerText = `You landed on: ${result}`;
    }, 4000); // Adjust timeout to match the spin duration
});

function calculateResult(degree) {
    // Here, you can customize your options and their corresponding angles
    const options = ["1,000", "750", "500", "200", "100"];
    const totalOptions = options.length;
    const anglePerOption = 360 / totalOptions;

    const index = Math.floor(((degree % 360) / anglePerOption));
    return options[index];
}

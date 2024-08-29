window.onload = function () {
    const containerDiv = document.createElement("div");
    containerDiv.className = "container mx-auto flex justify-center items-center flex-col gap-8 h-screen";
    document.body.appendChild(containerDiv);
    const heading = document.createElement("h1");
    heading.textContent = "Dice Game";
    heading.className = "heading";
    containerDiv.appendChild(heading);
    const desc = document.createElement("p");
    desc.textContent = "Lets Play a Dice Game";
    containerDiv.appendChild(desc);
    const playArea = containerDiv.appendChild(document.createElement("div"));
    playArea.className = "flex gap-8  w-full justify-evenly"
    const playerOneArea = playArea.appendChild(document.createElement("div"));
    const diceArea = playArea.appendChild(document.createElement("div"));
    const playerTwoArea  = playArea.appendChild(document.createElement("div"));


    // playerOneArea.innerText = "player 1"
    diceArea.innerText = "Dice"
    // playerTwoArea.innerText = "player 2"

    const playerOneHeading = playerOneArea.appendChild
        (document.createElement("h2"));
    playerOneHeading.innerText = "Player 1";
    playerOneHeading.className = "text-3xl font-bold text-blue-500";

    const playerTwoHeading = playerTwoArea.appendChild(
        document.createElement("h2")
        );
    playerTwoHeading.innerText = "Player 2";
    playerTwoHeading.className = "text-3xl font-bold text-red-500";

    const playerOneScore = playerOneArea.appendChild(
      document.createElement("p")
    );
    playerOneScore.innerText = "0";
    playerOneScore.className = "text-5xl font-bold text-center";


    const playerTwoScore = playerTwoArea.appendChild(
      document.createElement("p")
    );
    playerTwoScore.innerText = "0";
    playerTwoScore.className = "text-5xl font-bold text-center";


    const playerOneButton = playerOneArea.appendChild(
        document.createElement("button")
    );
    playerOneButton.innerText = "Roll Now";
    playerOneButton.className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";

    const playerTwoButton = playerTwoArea.appendChild(
        document.createElement("button")
    );
    playerTwoButton.innerText = "Roll Now";
    playerTwoButton.className =
        "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
    
    
    const diceImage = diceArea.appendChild(document.createElement("img"));
    diceImage.className = "w-12 h-12";
    diceImage.src = "./public/inverted-dice-1.png";


    const resetBtn = containerDiv.appendChild(document.createElement("button"));
    resetBtn.innerText = "Reset Game";
    resetBtn.className = "bg-gray-550 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-8";
    







};







// const myInput = document.querySelector("#input1");
// console.log(myInput);

// myInput.addEventListener("input", function () {
//     console.log("Getting some input:::", myInput.value);
// })

// myInput.addEventListener("change", function () {
//     console.log("value changed :::", myInput.value);
// });

// const myButton = document.getElementById("button1");
// myButton.addEventListener("click", () => {
//     console.log('button clicked');

//     myInput.focus();
// });

// myButton.ondblclick = function (event) {
//     console.log ("winter is coming")
// }
function rollDie(sides = 6) {
    return Math.floor(Math.random() * sides) + 1;
}

function rollPairOfDice(sides = 6) {
    return rollDie() + rollDie();
}

function initializeCountArray() {
    let array = [];
    for (let i = 0; i <= 12; i++) {
        array.push(0);
    }
    return array;
}

function countDiceValues(totalNumberOfRoles) {
    let count = initializeCountArray();
    for (let i = 0; i < totalNumberOfRoles; i++) {
        count[rollPairOfDice()]++;
    }
    return count;
}


function displayFullResults(totalNumberOfRoles) {
    let count = countDiceValues(totalNumberOfRoles);
    for (let i = 2; i < count.length; i++) {
        displayIndividualResult(i, count[i], totalNumberOfRoles);
    }
}

function displayIndividualResult(diceRoll, numberOfTimes, totalNumberOfRoles) {
    let workingDiv = document.createElement("div");
    let paragraph = document.createElement("p");
    // paragraph.style.display = "inline-block";
    let text = document.createTextNode(diceRoll + ": " + numberOfTimes);
    paragraph.appendChild(text);
    workingDiv.appendChild(paragraph);
    workingDiv.appendChild(getDisplayBar(numberOfTimes, totalNumberOfRoles));
    appendToPage(workingDiv);   
}

function getDisplayBar(countOfThisResult, totalNumberOfRoles) {
    let workingDiv = document.createElement("div");
    workingDiv.style.backgroundColor = "blue";
    workingDiv.style.height = '20px';
    // debugger;
    // workingDiv.style.width = (.8 / totalNumberOfRoles * countOfThisResult) * 100;
    workingDiv.style.width = (80 * countOfThisResult / totalNumberOfRoles) + '%';
    workingDiv.style.display = 'inline-block';
    return workingDiv;
}

function appendToPage(element) {
    let pageDiv = document.getElementById("results");
    pageDiv.appendChild(element);
}


displayFullResults(1000);
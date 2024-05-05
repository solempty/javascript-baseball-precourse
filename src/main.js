export function randomNumber() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const randomNumbers = [];
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    randomNumbers.push(numbers[randomIndex]);
    numbers.splice(randomIndex, 1);
  }
  return randomNumbers.join("");
}

export function avoidDuplicates(input) {
  return new Set(input).size !== input.length;
}

export function checkNum(ranNum) {
  const userInput = document.getElementById("userInput").value;
  if (
    !/^\d{3}$/.test(userInput) ||
    avoidDuplicates(userInput) ||
    userInput.includes("0")
  ) {
    alert("1~9까지의 수를 중복없이 3개 입력해주세요.");
    document.getElementById("userInput").value = "";
    return;
  }

  const result = calculate(ranNum, userInput);
  const resultDiv = document.getElementById("result");
  if (result === "낫싱") {
    resultDiv.innerHTML += "낫싱<br>";
  } else {
    const { strikes, balls } = result;
    resultDiv.innerHTML += `${balls}볼 ${strikes}스트라이크<br>`;
  }
  if (result.strikes === 3) {
    document.getElementById("restartButton").style.display = "block";
  }
}

export function restartGame() {
  location.reload();
}

function calculate(ranNum, userInput) {
  let strikes = 0;
  let balls = 0;
  for (let i = 0; i < 3; i++) {
    if (ranNum[i] === userInput[i]) {
      strikes++;
    } else if (ranNum.includes(userInput[i])) {
      balls++;
    }
  }
  if (strikes === 0 && balls === 0) {
    return "낫싱";
  }
  return { strikes, balls };
}

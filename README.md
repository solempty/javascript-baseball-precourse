# javascript-baseball-precourse

1. 수 입력
>사용자로부터 세 자리 수를 입력받는다

      <input type="text" id="userInput" maxlength="3" />

2. 수 확인
>입력된 수가 유효한지 확인한다. (입력값이 '세'자리 '숫자'인지, 입력값이 중복되지 않는지, 입력값에 0이 포함되지 않는지)

      function avoidDuplicates(input) {
        return new Set(input).size !== input.length;
      }

      function checkNum() {
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
      }
3. 랜덤 수 생성
>사용자가 맞출 랜덤한 수를 생성한다.

      function randomNumber() {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const randomNumbers = [];
        for (let i = 0; i < 3; i++) {
          const randomIndex = Math.floor(Math.random() * numbers.length);
          randomNumbers.push(numbers[randomIndex]);
          numbers.splice(randomIndex, 1);
        }
        return randomNumbers.join("");
      }
4. 스트라이크, 볼, 낫싱 계산
>같은 자리/ 같은 수이면 스트라이크, 다른 자리/같은 수이면 볼, 모두 다 다르면 낫싱이 되도록 계산한다.

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
5. 출력, 반복
>계산을 출력하고 정답을 맞출 때까지 랜덤 수를 유지하고 입력을 받는다.

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
          gameEnded = true;
        }
6. 재시작
>정답을 맞췄다면 게임 재시작 버튼을 만든다. 게임 재시작 버튼을 누르면 새로고침 되도록 한다.

    <div id="restartButton" style="display: none">
      <b><br />&#x1F389정답을 맞추셨습니다!&#x1F389<br /></b>
      <p>게임을 새로 시작하시겠습니까?<br /></p>
      <button onclick="restartGame()">게임 재시작</button>
    </div>

    function restartGame() {
        location.reload();
    }
7.  요구 사항 수정
> html만 사용해 코드를 작성하였기 때문에 js를 이용하고 import문을 사용하여 스크립트를 모듈화하여 가져올 수 있도록 코드를 수정한다.

    <script type="module">
      import { randomNumber, checkNum, restartGame } from './src/main.js';

      let ranNum = randomNumber();
      document.getElementById("checkButton").addEventListener("click", () => {
        checkNum(ranNum);
      });

      document.getElementById("restartGameButton").addEventListener("click", restartGame);
    </script>
----
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
            if (!/^\d{3}$/.test(userInput) || avoidDuplicates(userInput) || userInput.includes("0")) {
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

# javascript-baseball-precourse

1.  수 입력

    > 사용자로부터 세 자리 수를 입력받는다

          <input type="text" id="userInput" maxlength="3" />

2.  유효한 수인지 확인하기

    > 입력된 수가 유효한지 확인한다. (입력값이 '세'자리 '숫자'인지, 입력값이 중복되지 않는지, 입력값에 0이 포함되지 않는지)

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

3.  랜덤 수 생성하기

    > 사용자가 맞출 랜덤한 수를 생성한다.

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

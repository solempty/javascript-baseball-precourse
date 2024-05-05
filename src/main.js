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
let name,
  age,
  balance = 100;

function startGame() {
  name = document.getElementById("nameInput").value || "Guest";
  document.getElementById("welcome-message").textContent = `Welcome ${name}`;
  age = prompt("Enter your age:");

  if (age < 18) {
    document.getElementById("age-check").style.display = "block";
    return;
  }

  document.getElementById("intro-section").style.display = "none";
  document.getElementById("game-section").style.display = "block";
  updateBalance();
}

function playRound() {
  if (balance <= 0) {
    alert("You have no money left.");
    return;
  }

  balance -= 1;
  const num = Math.floor(Math.random() * 101);
  const bet = document.getElementById("betType").value;

  let message = `The number is ${num}. `;
  if (num === 0) {
    message += "You lose!";
  } else if (num % 2 === 0 && bet === "e") {
    message += "You win 1.9€!";
    balance += 1.9;
  } else if (num % 2 !== 0 && bet === "o") {
    message += "You win 1.9€!";
    balance += 1.9;
  } else {
    message += "You lose!";
  }

  document.getElementById("result").textContent = message;
  updateBalance();

  if (balance > 0) {
    document.getElementById("continue-button").style.display = "block";
  } else {
    alert("You have no money left.");
  }
}

function updateBalance() {
  document.getElementById("balance").textContent = `Balance: ${balance.toFixed(
    2
  )}€`;
}

function continuePlaying() {
  document.getElementById("result").textContent = "";
  document.getElementById("continue-button").style.display = "none";
}


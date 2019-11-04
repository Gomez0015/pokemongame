function playPokemon() {
  function choosePokemon() {
    var playerPokemon = "";

    if (confirm("Press OK for Charmander and Cancel for Squirtle")) {
      playerPokemon = "Charmander";
    } else {
      playerPokemon = "Squirtle";
    }

    return playerPokemon;
  }

  function changeImages(playerPokemon, enemyPokemon) {
    document.getElementById("playerImage").src = "images/" + playerPokemon + ".png";
    document.getElementById("playerImage").style.visibility = 'visible';
    document.getElementById("playerImage").style.display = 'inline';
    document.getElementById("playerImage").style.transform = 'scaleX(-1)';
    document.getElementById("enemyImage").src = "images/" + enemyPokemon + ".png";
    document.getElementById("enemyImage").style.visibility = 'visible';
    document.getElementById("enemyImage").style.display = 'inline';
    document.getElementById("btn-1").style.visibility = 'hidden';
    document.getElementById("btn-1").style.display = 'none';
    document.getElementById("btn-2").style.visibility = 'visible';
    document.getElementById("btn-2").style.display = 'inline';
  }

  alert("Pokemon battle will start now!")
  alert("Choose your pokemon!")

  // Call choosePokemon function and store it.
  var playerPokemon = choosePokemon();

  // Set Enemy Pokemon To Opposite
  if (playerPokemon == "Charmander") {
    var enemyPokemon = "Squirtle";
  } else {
    enemyPokemon = "Charmander";
  }

  // Make Image Appear Depending On Pokemon
  changeImages(playerPokemon, enemyPokemon);
}

function playPokemon2() {
  function calculateStats() {
    var playerHealth = prompt("How much hp would you like your pokemon to have");
    if (playerHealth == null || playerHealth == 0) {
      return null;
    }
    var min = playerHealth / -25;
    var max = playerHealth / 25;
    var playerAttack = Math.floor((playerHealth / 5) + Math.random() * (max - min + 1) + min);
    alert("Your pokemon's hp is " + playerHealth);
    alert("Your pokemon's attack is " + playerAttack);

    var enemyHealth = playerHealth;
    enemyHealth = (enemyHealth * 1) + Math.floor(Math.random() * (max - min + 1) + min);
    var enemyAttack = Math.floor((enemyHealth / 5) + Math.random() * (max - min + 1) + min);
    alert("Your enemy's hp is " + enemyHealth);
    alert("Your enemy's attack is " + enemyAttack);

    var stats = [playerHealth, playerAttack, enemyHealth, enemyAttack];

    return stats;
  }

  function takeDamage(playerHealth, enemyAttack) {
    playerHealth = playerHealth - enemyAttack;

    if (playerHealth <= 0) {
      playerHealth = 0;
    }

    return playerHealth;
  }

  function attack(playerAttack, enemyHealth) {
    enemyHealth = enemyHealth - playerAttack;

    if (enemyHealth <= 0) {
      enemyHealth = 0;
    }

    return enemyHealth;
  }

  function startBattle(playerHealth, playerAttack, enemyHealth, enemyAttack) {
    playerHealth = takeDamage(playerHealth, enemyAttack);
    enemyHealth = attack(playerAttack, enemyHealth);

    battle = "You have " + playerHealth + " hp left. Enemy has " + enemyHealth + " hp left.";

    alert(battle);

    var stats = [playerHealth, playerAttack, enemyHealth, enemyAttack];

    return stats;
  }

  var stats = calculateStats();

  if (stats == null) {
    return;
  }

  while (stats[0] != 0 || stats[2] != 0) {
    if (stats[0] <= 0 || stats[2] <= 0) {
      break;
    }

    stats = startBattle(stats[0], stats[1], stats[2], stats[3]);
  }

  if (stats[0] <= 0 && stats[2] <= 0) {
    alert("Tie!")
  } else if (stats[0] <= 0) {
    alert("Enemy has won!")
  } else if (stats[2] <= 0) {
    alert("Player has won!")
  }

  document.getElementById("playerImage").src = "#";
  document.getElementById("playerImage").style.visibility = 'hidden';
  document.getElementById("playerImage").style.display = 'none';
  document.getElementById("playerImage").style.transform = 'scaleX(0)';
  document.getElementById("enemyImage").src = "#";
  document.getElementById("enemyImage").style.visibility = 'hidden';
  document.getElementById("enemyImage").style.display = 'none';
  document.getElementById("btn-1").style.visibility = 'visible';
  document.getElementById("btn-1").style.display = 'inline';
  document.getElementById("btn-2").style.visibility = 'hidden';
  document.getElementById("btn-2").style.display = 'none';

}

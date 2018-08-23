# unit-4-game

FINAL FANTASY VII RPG GAME!

This program is a fan-made, basic RPG Game based off the 1997 Playstation title, Final Fantasy VII.

Goal of the game is to select a character and then defeat all remaining charcters.

Game starts when players select one of five characters (Cloud, Barret, Tifa, Aeris, Vincent). 

Player clicks on a character which then designates the remaining charcters into the "enemy" section. 

Once the player selects their first opponent, that icon will move to the "defender" section.

User clicks the "Attack" button to attack, and the enemy will provide a counter-attack. 

User character will attack, and after each turn, the attack points will increment to their base attack points.

Once the enemy is defeated, the user must select another character until there are no more opponents to fight.

No more opponents = victory!

Deployed version of this current app can be found [here](https://rs01247.github.io/ffvii-rpg-game/)

*** THIS GAME IS A NON-PROFIT FAN-MADE PROJECT AND IN NO WAY CONNECTED TO SQUARE ENIX ***

5/13/19 CURRENT BUGS

- CANNOT PROPERLY LOG ENEMY HEALTH ON CHAR-HEALTH DIV
- AFTER FIRST OPP DEFEAT, SELECTING A NEW OPP BRINGS ALL CHARACTERS TO FIRST DIV
- NEED TO FIND A WAY TO CLEAR MESSAGE DIV
- GAME CURRENTLY SET TO VICTORY ON (enemies.length == 3) JUST TO SHOW OFF VICTORY SCREEN

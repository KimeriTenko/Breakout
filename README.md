# Breakout
Breakout is a 1976 Puzzle Game by Atari. Originally designed as a single-player version of Pong, it involves moving a paddle back and forth to break bricks with a ball. When all the bricks are destroyed, a second wall will appear. Destroy that and you win the game.

The game was very popular in arcades, and inspired legions of imitators. Its creators, Steve Jobs and Steve Wozniak, were inspired to go and found their own company, Apple.

It had three official sequels. Super Breakout featured multiple paddles and balls, balls trapped above the bricks, and an advancing wall. It was an Endless Game with infinite new walls. 
    ~ Excerpt from the staff at TVTropes https://tvtropes.org/pmwiki/pmwiki.php/VideoGame/Breakout

# Game Logic
Player uses the paddle element to break through several rows of colored bricks.
# MVP Criteria
Player's "paddle" will move left and right, start ball movement and repell ball collisions. Gmae will have a score.

# Post-MVP Plans
I would like to give the game elements a neon glow and simple outlines for a pleasant, modern feel. It would also be nice to make a custom art title screen. I would like to add other modes of game play ala Super Breakout style.

# Project Planning
Breakout will use plain JavaScript, CSS, and HTML5 to render and animate the game. The game's main components will be broken down as follows:

index.html: this file will construct the basic html and link the css and javascript files.
style.css: this file will hold stylesheet characteristics.
javascript.js: this file will contain basic methods for collision detection and movements of objects. 
# Date Goals
Thu. 06/23 Create GitHub repository. Complete README.md.

Sun. 06/26 Layout the skeleton for field.js to render and interact with the canvas, initializing a game loop that will requestAnimationFrame() and allow for animations. Once animations can be drawn, create bugblaster.js and have it respond to keypresses to move Player left and right, then create blaster.js and have bug blaster be able to shoot.

Tue. 06/28 Create bugs with enemies.js and have them enter the screen and go towards an empty space in the formation and remain in formation according to type. Create divergent spider,scorpion, and flea patterns. Implement dart collision detection so that enemies are destroyable and grant points.

Thu. 06/30 Introduce the capability for centipede to break formation, regrow head, and pursue separate paths downward toward the bug blaster with potential to cause a game over. Have the enemy re-enter formation if the attack misses. Polish the background and add in sound effects for blaster shots, dart collision, bug to blaster collision, and the main Centipede theme song.

Sun. 07/03 Deploy MVP to GitHub Pages.

Tue. 07/05 Submit completed project. Project presentations.
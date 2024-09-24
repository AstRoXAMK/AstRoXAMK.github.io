---
title: alus.
publishDate: 2023-09-12
img_card: /images/gameicon.png
img: /images/gameicon.png
img_alt: A game made with haste
description: |
  Game made for school course Ecosystems of games
tags:
  - Game Programming
  - Unity WebGL
  - Mobile games
---

<div class="game">
  <iframe frameborder="0" src="https://itch.io/embed/2414367?border_width=2&amp;bg_color=06b6d4&amp;fg_color=333&amp;link_color=9333ea&amp;border_color=fff" width="554" height="169"><a href="https://rhjastren.itch.io/alus-mobile" target="_blank">alus. (mobile) by RhjAstren</a></iframe>
</div>

## alus.

>A lone ship escaping the authorities in a vast void of space. <br><span class="additional">One twist: You are Magnetic</span><br>Take advantage of your power and try to get as far as possible

<ul>
  <li class="worker">
    Roope Astrén - Programming
  </li>
  <li class="worker">
    Markus Torkkell - UI/UX designer & Music
  </li>
  <li class="worker">
    Marko Salo - Game Art & Video Editing
  </li>
</ul>

### Description

An endless runner game. Goal of the game is to get as far as possible. Avoid the objects and the authorities.

A flappy bird and Jetpack Joyride inspired game, with an added function of shooting.

### Progress

The work started by making a Unity project as all other light weight work starts with. First of it was important to have a player that can be used as a placeholder for the main sprite. Making all placeholder sprites for the game took no time to make as they would be replaced in no time.

After the placeholders were made, it was time to start working on the actual game. Started by making the main scripts (Playercontroller, enemy, and object movement) scripts.

Work on the player script started off by making the player move and creating a "switch" -type control so that the player would change the direction of the movement by pressing a button. This is the main way of movement in the game.

After that, I started the work on projectile scripts. Intantiate from the tip of the character and destroy it after a certain amount of time to avoid overloading the game. With that, the enemy script was the next thing I tackeled. Making the projectile and enemy destroy each other simultaneously was the point. The obstacle instead would only destroy the projectile if hit.

With the main players out of the way, it wastime to look into the barriers on the top and the bottom of the screen. Making the polarity switch at the same time as the movement of the player, was the main point.

Now the game was running well. The next stop would be the to implement the score functions to keep track of how far a player was able to go and to increase the difficulty of the game as it progressed.

At this point the game was in its final stretch so I made the executive decision to make the game a Web and a mobile versions of the game. This was a good decision as the game would be a good game for PC and Mobile.

Adding the sounds and music to the game was quite simple thanks to an easy to follow tutorial by Brackey. No problems here.

And with that the game was complete.

### Problems

Here's the part what I dreaded the most. All of the problems that I encountered on my journey:

<span class="additional">The movement switch</span>: I had already an idea for how this could be accomplished with a boolean value, but because of my lack of Unity programming I didn't think of using a <code class="code">if(!insert boolean value)</code> if -function. This worked well.

<span class="additional">Random spawn location</span>: While finding the spawn locations for all the enemies/objects was a simple task, making the random spawn location took a bit of time. Using a <code class="code">vector<></code> type list, I was able to take the spawn locations of all initiated game objects and then using a <code class="code">for(int i = 0; i < 4; i++)</code> code line to pick any integer between 0 and 3 to instantiate the enemy onto.

<span class="additional">Score manager</span>: I am not proud of this one, but the lack of UI programming on Unity really showed here. One stupid line of code broke the entire scoring system... that's all it took.

<span class="additional">Player/enemy/obstacle speed-up</span>: This one was a bit different. Making a working function and then applying it to all of the game objects mentioned. This resulted in confusion and making it work properly took quite a while.

<span class="additional">Switching from PC only to Mobile</span>: This is probably the biggest notable problem I faced. Due to how I had written the movement function, it messed with the touch controls for the game. I had to remake the whole movement part of my original script to accommodate the touch control scripts as well. The switch did not go very smoothly at first, but after I had identified what was actually happening, I just toughed my way through it. I managed to make great controls for both the PC and Mobile versions, which I will happily use in other games.

<span class="additional">GitHub</span>: Now by far the biggest cause of hair loss during this project. The version contorl. Not only was the making of a GitHub repository a pain in the ***, but then keeping it updated resulted in other stupid problems. Mainly the fact that the repo had successfully messed up the backgroung. Other teammembers were unable to use the version I had made due to this problem and they had no better way to fix it, other than making a new repository. This was infuriating at the time, but quite comical looking back at it now.

#### Conclusion

The project ended with a(n almost) finished project. On my part the game was ready to be shipped. But now that I have heard feedback from my peers, I will tune the game a little bit to have the game be fully ready. The changes will be logged onto here.

<style>
  .game{
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--accent-purple-3);
    text-decoration: none;
    font-weight: bold;
    font-size: 1.5rem;
  }

  .game a{
    margin-bottom: 1rem;
  }

  .game:hover{
    color: var(--accent-purple-2);
  }

  .additional{
    color: var(--accent-cyan-3);
  }

  .worker{
    font-size: 1.3rem;
  }

  .code{
    color: var(--accent-code);
  }

  @media (max-width: 719px){
    iframe{
      max-width: 90vw;
      margin-bottom: 1rem;
    }
  }

</style>
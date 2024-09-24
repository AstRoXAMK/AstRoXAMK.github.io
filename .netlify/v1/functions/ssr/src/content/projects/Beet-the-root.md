---
title: Beet-The-Root
publishDate: 2023-02-16
img_card: /images/assmoleBanner.png
img: 
img_alt: A game made with haste
description: |
  Game made for the Global GameJam 2023
tags:
  - GameJam
  - Unity
---
<div class="shitClass">
  <div>
    <iframe src="https://www.youtube.com/embed/IoqUq2OSMig" class="video"></iframe>
  </div>
  <div>
    <a class="game" href="https://v3.globalgamejam.org/2023/games/beet-root-6" target="_blank">
    Link to game
    </a>
  </div>
</div>

## Global GameJam 2023 project

> A Finnish Game jam collaboration with other first year students and a second year student.

<div class="list-of-workers">
  <div>
    <ul>
      <li class="worker">
        Roope Astrén - Programming
      </li>
      <li class="worker">
        Janne Sepponen - 3D Modelling, Character Animations & Music
      </li>
      <li class="worker">
        Jesse Hyvönen - UI/UX designer & Music
      </li>
    </ul>
  </div>
  <div>
    <ul>
      <li class="worker">
        Sami Kärkkäinen - Programming
      </li>
      <li class="worker">
        Tomi Mäntynen - 3D Modelling & Character Animations
      </li>
      <li class="worker">
        Elli Riipinen - Game Art & Video Editing
      </li>
    </ul>
  </div>
</div>

## Description

Collect beetroots and avoid the angry Farmer to achieve a High Score

An isometric level survival game. Drives inspiration from old Snake games from those unbreakable Nokia phones. With some spices (abilities) added to the mix to make the game fresh.

### Progress

Work on the game started with a simple look at the theme we were given, ROOTS. After that we began to give each other ideas for what we would like to have in the game.
We came up witht the idea of gathering beetROOTs as a mole. This is as random as it sounds, I know.
The game was done over the course of a weekend at the beginning of February. Our Group consisted of 5 first year students and one second year student. We had also never attended a single Game jam up until this point.

Giving each other the roles was the next step. Most of us already knew what we were good at individually and so, we decided to let everyone work on what their strengths was. Then we began our work on the game.

Below you can see a couple gameplay images:

<div class="list-of-workers">
  <div>
    <img src="/public/images/gameplay1.jpg">
  </div>
  <div>
    <img src="/public/images/gameplay2.jpg">
  </div>
</div>

### Problems

Biggest problem that I came across was definitely using the Linux Operating system in general. The Distro that I used was System76's POP_os Distro. While it was simple and easy to use, downloading and getting Unity 3D running was different beast. Not only does Linux not support Visual Studio 2022/2019, So I was stuck using VS Code for the whole duration of the event. It also did not help that GitHub was a mess to use cross-platform.
After these issues were solved I was able to start working on the game as expected... 4 hours in. Afterwards, there were no real notable problems. The biggest problem was most definitely the fact that most of us were not able to get sufficient amount of sleep over the course of the event.

Afterwards work started to go on smoothly. Some smokebreaks were had, same with lunch and dinner. The first night all of us were allowed to leave the gym and sleep. The second day was by far the most productive of all. We were able make the first playable prototype. After about 12 hours of work, we started to be more tired, but thanks to the power of energy drinks and sheer will, we were able to work through the whole night. At the end of the 48h we were extremely tired and agitated.

But as soon as we tasted the fresh air of the bright outside, we felt happy that we attended the Game jam. 

#### Conclusion

While the game might not look like the masterpiece or Magnum Opus of our group, we were positively surprised that we achieved everything that we set out to do. The music works, the game works (with some bugs) and the game does hold some sort of high score notablility. Overall, we are pleased at how the game turned out and we learned a whole lot from this experience and we are most definitely going to attend other Game Jams in the future.

We have no plans to keep working on the project. It is something that we will look back at and marvel just how we were able to get better from here.

<style>
  .video{
    margin: 0 2rem;
    width: 65vw;
    height: 70vh;
    border: 5px inset var(--accent-cyan-2);
    border-radius: 5%;
  }

  .game{
    margin: 3rem 0;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--accent-purple-3);
    text-decoration: none;
    font-weight: bold;
    font-size: 3rem;
  }

  .game:hover{
    color: var(--accent-purple-2);
  }

  .list-of-workers{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .worker{
    font-size: 1.3rem;
  }

  .additional{
    color: var(--accent-cyan-3);
  }

  img{
    width: 32.5vw;
    height: auto;
  }

  @media (max-width: 719px){
    .video{
      height: 22.5vh;
      width: 90vw;
      margin: 0;
    }

    .list-of-workers{
      grid-template-columns: 1fr;
      gap: 0;
    }

    .worker{
      margin: 1rem 0;
      font-size: 1rem;
    }

    img{
      width: 90vw;
      margin: 1rem 0;
    }
  }

  @media (min-width: 1921px){
    .shitClass{
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .shitClass .game{
      font-size: 12rem;
    }

    .shitClass .video {
      width: 28vw;
      height: 40vh;
    }
  }
</style>
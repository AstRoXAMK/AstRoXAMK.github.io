---
title: Dump Folder
publishDate: 2023-01-12
img_card: /images/Dumpster.png
img: 
img_alt: A game made with haste
description: |
  A library of random small projects that took less than 5 hours
tags:
  - Projects
  - Python
---

## What to expect from this folder website

Random projects I have worked on during XAMK Game Programming Game project courses

### Projects

<div class="projects-container">
  <div class="projects-left">
    <div class="project-item" id="Password-generator">
        <h4>Password Generator with <span>Python 3.11</span></h4>
        <p class="status">Status: <span class="status-completed">Completed</span></p>
        <p>
            A simple password generator that takes 4 values to 
            create a file that contains the passwords.
            In the app you can decide:
            <ul>
                <li>
                    The amount of paswords that you wish to create
                </li>
                <li>
                    The lenght of the passwords
                </li>
                <li>
                    Does the user wish to use numbers
                </li>
                <li>
                    Does the user wish to use special symbols
                </li>
            </ul>
            All of the passwords are the put into a file
            that can be located in the same file folder as the 
            program itself. I have yet to fix this part.
        </p>
        <div class="image-container">
            <img src="/public/images/Password_generator.jpg" alt="img of password generator">
            <img src="/public/images/Password_generator_1.png" alt="filled">
        </div>
        <p>
            I got the idea for this password generator as I was working on the
            Python course provided Helsinki University. I wanted to make it into
            an app, so I did. I used tKinter library from python for the UI
            and made it look as simple and easy-to-use as possible.
        </p>
        <h4>Problems</h4>
        <p>
            I did not remember how to use tKinter as it 
            had been over a year since I last worked on it.
            I watched a part of the tKinter tutorial provided
            by FreeCodeCamp and I was already on my way. 
            I also had problems creating the file for the saved passwords,
            but I am going to fix this issue once I find out how.
        </p>
        <a href="https://github.com/AstRoXAMK/Pyhton-password-generator/tree/main" class="link-text">
            Link to source code
        </a>
    </div>
    <br>
  </div>
  <div class="projects-right">
    <div class="project-item" id="Tetris">
      <h4>Tetris with <span>PyGame</span></h4>
      <p class="status">Status: <span class="status-working">Working on</span></>
      <p>
          A personal game version of tetris. I have plans to use this game file for future ML/AI projects
          of creating bots that can continuesly get better as the game continues.
      </p>
      <div class="image-container">
          <p>
              ---- Pictures to come ----
          </p>
      </div>
      <p>
          I got the Idea from watchin PyGame tutorials and I also saw a deep learning video of
          bots for the game "Jump King". The video creator made his own version of Jump King in JavaScript
          so I am hoping to be able to do the same for Tetris.
      </p>
      <h4>Problems</h4>
      <p>
          I have made just the base game with a tutorial, bu the bots are something that I have yet to work on.
      </p>
      <a href="#" class="link-text" target="_blank">
          Link to source code
      </a>
    </div>
  </div>
</div>

<style>
  .projects-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  .project-item{
    border: 5px solid var(--accent-cyan-2);
    border-radius: 50px;
    padding: 0 1rem 2rem 1rem;
    background-color: var(--accent-gray);
  }

  .status{
    font-size: 1.2rem;
    margin: 1rem 0;
    text-align: center;
  }

  .status-completed{
    color: var(--accent-code);
  }

  .status-working{
    color: var(--accent-working);
  }

  .status-dropped{
    color: var(--accent-dropped);
  }

  .project-item ul{
    margin: 1rem 0;
  }

  .image-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0;
  }

  .link-text{
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--accent-purple-3);
    text-decoration: none;
    font-weight: bold;
    font-size: 1.5rem;
    margin: 1rem 0 0 0;
  }

  .link-text:hover{
    color: var(--accent-purple-2);
  }

  @media (max-width: 719px){
    .projects-container{
      grid-template-columns: 1fr;
    }

    .link-text{
      font-size: 1rem;
    }
  }

</style>
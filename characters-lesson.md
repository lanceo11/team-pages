---
layout: post
title: Gamify Exploration
description: A game design lesson on sprite sheets, chase logic, sprite swapping, and NPC interaction systems
permalink: /characters-lesson/
hide: true
toc: false
author: Lance Oberiano, Yiming Yin, Arjun Ganesh
---

{% capture challenge0 %}
CSSE Zone Game
{% endcapture %}

{% capture code0 %}
import GameControl from '{{site.baseurl}}/assets/js/GameEnginev1.1/essentials/GameControl.js';
import GameLevelAquaticGameLevel from '{{site.baseurl}}/assets/js/projects/characters/levels/GameLevelAquaticGameLevel.js';
import GameLevelSeek from '{{site.baseurl}}/assets/js/projects/characters/levels/GameLevelSeek.js';
import GameLevelBasketball from '{{site.baseurl}}/assets/js/projects/characters/levels/GameLevelBasketball.js';

export const gameLevelClasses = [GameLevelAquaticGameLevel, GameLevelSeek, GameLevelBasketball,];
export { GameControl };
{% endcapture %}

{% include runners/game.html
   runner_id="characters-lesson-stable-0"
   challenge=challenge0
   code=code0
   hide_edit="true"
   width="100%"
   height="500px"
%}

# Basketball — How the Chase Logic Works

A line-by-line breakdown of how Kirby hunts the player in `GameLevelBasketball.js`.

This page is the stable GitHub Pages route for the characters lesson.

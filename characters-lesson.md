---
layout: post
title: Gamify Exploration
description: Team Aquatic lesson launch page
permalink: /characters-lesson/
hide: true
toc: false
---

## Team Aquatic Character Interaction Lesson

This lesson is now connected through a stable page URL for GitHub Pages.

Open the game lesson directly from this page.

{% capture challenge0 %}
CSSE Zone Game
{% endcapture %}

{% capture code0 %}
import GameControl from '/assets/js/GameEnginev1.1/essentials/GameControl.js';
import GameLevelAquaticGameLevel from '/assets/js/projects/characters/levels/GameLevelAquaticGameLevel.js';
import GameLevelSeek from '/assets/js/projects/characters/levels/GameLevelSeek.js';
import GameLevelBasketball from '/assets/js/projects/characters/levels/GameLevelBasketball.js';

export const gameLevelClasses = [GameLevelAquaticGameLevel, GameLevelSeek, GameLevelBasketball];
export { GameControl };
{% endcapture %}
{% include gamebuilder.html challenge=challenge0 code=code0 runner_id='characters-lesson-stable' canvas_width='100%' canvas_height='500px' hide_edit=true %}

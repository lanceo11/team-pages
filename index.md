---
layout: null
permalink: /
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Aquatic-Pages</title>
  <style>
    :root {
      --deep-1: #020912;
      --deep-2: #05335b;
      --deep-3: #0a6ca1;
      --text: #e7fbff;
      --accent: #8deaff;
      --glow: rgba(141, 234, 255, 0.55);
    }

    * { box-sizing: border-box; }

    body {
      margin: 0;
      min-height: 100vh;
      overflow: hidden;
      font-family: Georgia, "Times New Roman", serif;
      color: var(--text);
      background:
        radial-gradient(1400px 700px at 50% 120%, rgba(89, 205, 255, 0.3) 0%, rgba(89, 205, 255, 0) 60%),
        linear-gradient(180deg, var(--deep-1) 0%, var(--deep-2) 50%, var(--deep-3) 100%);
    }

    .ray-layer {
      position: fixed;
      inset: 0;
      pointer-events: none;
      opacity: 0.6;
      background: repeating-linear-gradient(100deg, transparent 0%, rgba(173, 236, 255, 0.08) 1.2%, transparent 3.5%);
      animation: rayShift 11s ease-in-out infinite alternate;
    }

    @keyframes rayShift {
      from { transform: translateX(-2%) skewX(-2deg); }
      to { transform: translateX(2%) skewX(2deg); }
    }

    .content {
      position: relative;
      z-index: 5;
      min-height: 100vh;
      display: grid;
      place-items: center;
      text-align: center;
      padding: 20px;
    }

    .title-wrap {
      max-width: 780px;
      animation: fadeUp 900ms ease 2.4s both;
    }

    h1 {
      margin: 0;
      font-size: clamp(2.2rem, 6vw, 4.6rem);
      letter-spacing: 0.06em;
      text-shadow: 0 0 22px var(--glow), 0 0 48px rgba(30, 185, 255, 0.35);
    }

    p {
      margin: 14px 0 26px;
      font-size: clamp(1rem, 2vw, 1.35rem);
      opacity: 0.9;
    }

    a {
      display: inline-block;
      color: #072132;
      text-decoration: none;
      font-weight: 700;
      background: linear-gradient(90deg, #7ddfff, #b2f7ff);
      border-radius: 999px;
      padding: 12px 24px;
      box-shadow: 0 10px 25px rgba(0, 150, 220, 0.35);
      transition: transform 180ms ease, box-shadow 180ms ease;
    }

    a:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 28px rgba(0, 170, 240, 0.45);
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(22px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .bubble {
      position: fixed;
      bottom: -80px;
      border-radius: 50%;
      background: radial-gradient(circle at 30% 30%, rgba(235, 250, 255, 0.95), rgba(140, 221, 250, 0.3));
      box-shadow: inset -6px -8px 20px rgba(3, 56, 89, 0.28), 0 0 12px rgba(181, 245, 255, 0.45);
      opacity: 0.7;
      animation: rise linear infinite;
      z-index: 2;
    }

    @keyframes rise {
      to { transform: translateY(-120vh) translateX(18px); opacity: 0; }
    }

    #jellyfish {
      position: fixed;
      right: -260px;
      bottom: -260px;
      width: min(38vw, 300px);
      z-index: 4;
      filter: drop-shadow(0 0 24px rgba(190, 159, 255, 0.45)) drop-shadow(0 0 56px rgba(105, 198, 255, 0.25));
      animation: jellyEntrance 3.1s cubic-bezier(0.21, 0.93, 0.34, 1) forwards;
      will-change: transform, right, bottom;
    }

    @keyframes jellyEntrance {
      0% { right: -260px; bottom: -260px; opacity: 0; transform: rotate(-7deg) scale(0.8); }
      40% { opacity: 1; }
      100% { right: 6vw; bottom: 18vh; opacity: 1; transform: rotate(0deg) scale(1); }
    }

    .bell-main { animation: bellPulse 2.1s ease-in-out infinite; transform-origin: center 88px; }
    .inner-aura { animation: auraPulse 2.4s ease-in-out infinite; }

    @keyframes bellPulse {
      0%, 100% { transform: scaleY(1) scaleX(1); }
      50% { transform: scaleY(0.93) scaleX(1.03); }
    }

    @keyframes auraPulse {
      0%, 100% { opacity: 0.55; }
      50% { opacity: 0.95; }
    }

    .tentacle { transform-origin: top center; animation: sway 1.9s ease-in-out infinite alternate; }
    .tentacle.t2 { animation-delay: 140ms; }
    .tentacle.t3 { animation-delay: 260ms; }
    .tentacle.t4 { animation-delay: 90ms; }
    .tentacle.t5 { animation-delay: 210ms; }
    .tentacle.t6 { animation-delay: 170ms; }

    @keyframes sway {
      from { transform: rotate(-8deg) translateY(0); }
      to { transform: rotate(8deg) translateY(2px); }
    }

    @media (max-width: 900px) {
      #jellyfish {
        width: min(56vw, 260px);
        animation-name: jellyEntranceMobile;
      }

      @keyframes jellyEntranceMobile {
        0% { right: -240px; bottom: -220px; opacity: 0; transform: rotate(-7deg) scale(0.78); }
        40% { opacity: 1; }
        100% { right: 50%; bottom: 8vh; opacity: 1; transform: translateX(50%) rotate(0deg) scale(1); }
      }

      .title-wrap { padding-top: 6vh; }
    }
  </style>
</head>
<body>
  <div class="ray-layer"></div>

  <div class="content">
    <div class="title-wrap">
      <h1>Team Aquatic-Pages</h1>
      <p>Drift into ocean adventures built by Team Aquatic.</p>
      <a href="{{ site.baseurl }}/characters-lesson/">Enter the Aquatic World</a>
    </div>
  </div>

  <svg id="jellyfish" viewBox="0 0 360 460" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <radialGradient id="bellGrad" cx="50%" cy="35%" r="68%">
        <stop offset="0%" stop-color="#ffd8ff" stop-opacity="0.95"/>
        <stop offset="55%" stop-color="#c68cff" stop-opacity="0.82"/>
        <stop offset="100%" stop-color="#7f5dff" stop-opacity="0.7"/>
      </radialGradient>
      <radialGradient id="innerGrad" cx="40%" cy="35%" r="75%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9"/>
        <stop offset="100%" stop-color="#9ae7ff" stop-opacity="0.15"/>
      </radialGradient>
      <linearGradient id="tentacleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#ffdcff" stop-opacity="0.9"/>
        <stop offset="100%" stop-color="#76d5ff" stop-opacity="0.45"/>
      </linearGradient>
      <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="6" result="blur"/>
        <feMerge>
          <feMergeNode in="blur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    <g class="inner-aura" filter="url(#softGlow)">
      <ellipse cx="180" cy="130" rx="108" ry="88" fill="#d8f1ff" opacity="0.24"/>
    </g>

    <g class="bell-main">
      <path d="M56 170c0-82 56-134 124-134s124 52 124 134c0 34-17 54-44 66-26 11-53 14-80 14s-54-3-80-14c-27-12-44-32-44-66z" fill="url(#bellGrad)" stroke="#efd4ff" stroke-opacity="0.8" stroke-width="4"/>
      <ellipse cx="180" cy="124" rx="84" ry="58" fill="url(#innerGrad)" class="inner-aura"/>
      <ellipse cx="148" cy="98" rx="26" ry="14" fill="#ffffff" opacity="0.42" transform="rotate(-14 148 98)"/>
      <ellipse cx="222" cy="106" rx="18" ry="11" fill="#ffffff" opacity="0.24" transform="rotate(12 222 106)"/>
      <path d="M96 196c23 14 53 20 84 20s61-6 84-20" fill="none" stroke="#f6e8ff" stroke-opacity="0.62" stroke-width="5" stroke-linecap="round"/>
    </g>

    <g stroke="url(#tentacleGrad)" stroke-linecap="round" fill="none">
      <path class="tentacle t1" d="M122 214C102 270 110 326 90 402" stroke-width="6"/>
      <path class="tentacle t2" d="M142 220C140 276 142 338 128 430" stroke-width="5"/>
      <path class="tentacle t3" d="M164 224C168 278 172 332 166 444" stroke-width="5"/>
      <path class="tentacle t4" d="M186 224C192 274 200 340 206 438" stroke-width="5"/>
      <path class="tentacle t5" d="M210 220C226 278 234 334 252 420" stroke-width="5"/>
      <path class="tentacle t6" d="M236 214C266 262 284 330 306 402" stroke-width="6"/>
    </g>
  </svg>

  <script>
    const bubbleCount = 28;
    for (let i = 0; i < bubbleCount; i++) {
      const b = document.createElement('div');
      b.className = 'bubble';
      const size = 8 + Math.random() * 24;
      const left = Math.random() * 100;
      const duration = 8 + Math.random() * 14;
      const delay = Math.random() * 12;
      b.style.width = `${size}px`;
      b.style.height = `${size}px`;
      b.style.left = `${left}%`;
      b.style.animationDuration = `${duration}s`;
      b.style.animationDelay = `${delay}s`;
      document.body.appendChild(b);
    }
  </script>
</body>
</html>

---
layout: null
permalink: /
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Team Aquatic</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      min-height: 100vh;
      background: linear-gradient(180deg, #020d1f 0%, #041e3a 30%, #063b6b 65%, #0a5a8f 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Segoe UI', sans-serif;
      overflow: hidden;
      position: relative;
    }

    /* ── bubbles ── */
    .bubble {
      position: absolute;
      bottom: -60px;
      border-radius: 50%;
      background: rgba(100, 210, 255, 0.15);
      border: 1px solid rgba(100, 210, 255, 0.3);
      animation: rise linear infinite;
    }
    @keyframes rise {
      to { transform: translateY(-110vh) scale(1.2); opacity: 0; }
    }

    /* ── light rays ── */
    .rays {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background: repeating-linear-gradient(
        105deg,
        transparent 0%,
        rgba(0,180,255,0.04) 1%,
        transparent 2%
      );
      animation: sway 8s ease-in-out infinite alternate;
      pointer-events: none;
    }
    @keyframes sway { from { transform: skewX(-3deg); } to { transform: skewX(3deg); } }

    /* ── jellyfish ── */
    #jellyfish {
      position: fixed;
      width: 130px;
      bottom: -160px;
      right: -160px;
      animation: swim 3s cubic-bezier(.4,0,.2,1) forwards;
      filter: drop-shadow(0 0 18px rgba(160,100,255,0.7));
      z-index: 10;
    }
    @keyframes swim {
      0%   { bottom: -160px; right: -160px; opacity: 0; }
      30%  { opacity: 1; }
      100% { bottom: calc(50vh - 65px); right: calc(50vw - 65px); }
    }

    /* tentacles wiggle */
    .tentacle { transform-origin: top center; animation: wiggle 1.6s ease-in-out infinite alternate; }
    .tentacle:nth-child(2) { animation-delay: .2s; }
    .tentacle:nth-child(3) { animation-delay: .4s; }
    .tentacle:nth-child(4) { animation-delay: .1s; }
    .tentacle:nth-child(5) { animation-delay: .3s; }
    @keyframes wiggle { from { transform: rotate(-8deg); } to { transform: rotate(8deg); } }

    /* jelly pulse */
    .bell { animation: pulse 2s ease-in-out infinite; }
    @keyframes pulse { 0%,100% { transform: scaleY(1); } 50% { transform: scaleY(.92); } }

    /* ── title card ── */
    #card {
      text-align: center;
      opacity: 0;
      animation: fadeIn .8s ease forwards 3.4s;
      z-index: 5;
      position: relative;
    }
    @keyframes fadeIn { to { opacity: 1; } }

    #card h1 {
      font-size: clamp(2.2rem, 6vw, 4rem);
      color: #aef0ff;
      text-shadow: 0 0 30px rgba(0,200,255,.8), 0 0 60px rgba(0,200,255,.4);
      letter-spacing: .15em;
      font-weight: 700;
    }
    #card p {
      margin-top: .8rem;
      color: rgba(180, 230, 255, .75);
      font-size: 1.1rem;
      letter-spacing: .05em;
    }
    #card a {
      display: inline-block;
      margin-top: 2rem;
      padding: .75rem 2.2rem;
      border: 2px solid rgba(0,200,255,.6);
      border-radius: 30px;
      color: #aef0ff;
      text-decoration: none;
      font-size: 1rem;
      letter-spacing: .08em;
      background: rgba(0,100,160,.3);
      backdrop-filter: blur(6px);
      transition: background .3s, box-shadow .3s;
    }
    #card a:hover {
      background: rgba(0,160,220,.45);
      box-shadow: 0 0 20px rgba(0,200,255,.5);
    }
  </style>
</head>
<body>

  <div class="rays"></div>

  <!-- bubbles -->
  <script>
    for (let i = 0; i < 22; i++) {
      const b = document.createElement('div');
      b.className = 'bubble';
      const s = 8 + Math.random() * 28;
      b.style.cssText = `width:${s}px;height:${s}px;left:${Math.random()*100}%;animation-duration:${7+Math.random()*14}s;animation-delay:${Math.random()*12}s;opacity:${0.3+Math.random()*0.5}`;
      document.body.appendChild(b);
    }
  </script>

  <!-- jellyfish SVG -->
  <svg id="jellyfish" viewBox="0 0 100 130" xmlns="http://www.w3.org/2000/svg">
    <!-- bell -->
    <g class="bell">
      <ellipse cx="50" cy="45" rx="38" ry="35" fill="rgba(180,100,255,0.55)" stroke="rgba(220,160,255,0.8)" stroke-width="1.5"/>
      <ellipse cx="50" cy="38" rx="24" ry="18" fill="rgba(220,180,255,0.25)"/>
      <!-- inner glow -->
      <ellipse cx="42" cy="30" rx="8" ry="6" fill="rgba(255,255,255,0.12)" transform="rotate(-15,42,30)"/>
    </g>
    <!-- tentacles -->
    <line class="tentacle" x1="30" y1="78" x2="22" y2="128" stroke="rgba(200,140,255,0.7)" stroke-width="2" stroke-linecap="round"/>
    <line class="tentacle" x1="40" y1="80" x2="36" y2="128" stroke="rgba(200,140,255,0.7)" stroke-width="2" stroke-linecap="round"/>
    <line class="tentacle" x1="50" y1="82" x2="50" y2="130" stroke="rgba(200,140,255,0.7)" stroke-width="2" stroke-linecap="round"/>
    <line class="tentacle" x1="60" y1="80" x2="64" y2="128" stroke="rgba(200,140,255,0.7)" stroke-width="2" stroke-linecap="round"/>
    <line class="tentacle" x1="70" y1="78" x2="78" y2="128" stroke="rgba(200,140,255,0.7)" stroke-width="2" stroke-linecap="round"/>
  </svg>

  <!-- title card -->
  <div id="card">
    <h1>Team Aquatic</h1>
    <p>Welcome to the deep.</p>
    <a href="{{ site.baseurl }}/characters-lesson">Dive In →</a>
  </div>

</body>
</html>

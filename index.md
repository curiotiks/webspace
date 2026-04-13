---
layout: default
title: Home
description: Personal site for G. Curt Fulwider.
---

<section class="hero">
  <p class="eyebrow">Who I am</p>
  <h1>G. Curt Fulwider</h1>
  <p>Data &amp; Learning scientist building interactive, data-driven systems for assessment, motivation, and student growth.</p>
  <p>I work at the intersection of game-based learning, behavioral telemetry, and AI-informed modeling.</p>
  <div class="hero__actions">
    <a class="button button--primary" href="{{ '/contact/' | relative_url }}">Contact for consultation</a>
    <a class="button" href="{{ '/projects/' | relative_url }}">View project statuses</a>
  </div>
</section>

<section class="section">
  <h2>What I do</h2>
  <ul class="chip-list">
    {% for item in site.data.profile.focus %}
      <li>{{ item }}</li>
    {% endfor %}
  </ul>
</section>

<section class="section">
  <h2>Project statuses</h2>
  <div class="grid grid--two">
    {% for project in site.data.projects %}
      {% include project-card.html project=project %}
    {% endfor %}
  </div>
</section>

<section class="section">
  <h2>Contact</h2>
  <p>Open to consultation, research collaboration, and project conversations.</p>
  <div class="inline-links">
    <a class="button button--primary" href="mailto:cfulwider@fsu.edu">cfulwider@fsu.edu</a>
    <a class="button" href="mailto:curiotiks@icloud.com">curiotiks@icloud.com</a>
  </div>
</section>

---
layout: default
title: Who I am
description: Background, education, and research areas.
---

<section class="page-card project-page">
  <p class="eyebrow">Who I am</p>
  <h1>G. Curt Fulwider</h1>
  <p>{{ site.data.profile.tagline }}</p>

  <h2>Research areas</h2>
  <ul class="chip-list">
    {% for item in site.data.profile.focus %}
      <li>{{ item }}</li>
    {% endfor %}
  </ul>

  <h2>Education</h2>
  <ul class="list-clean education-list">
    {% for item in site.data.profile.education %}
      <li>
        <strong>{{ item.degree }}</strong><br>
        {{ item.institution }} · {{ item.year }}
      </li>
    {% endfor %}
  </ul>
</section>

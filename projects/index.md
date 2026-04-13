---
layout: default
title: Project statuses
description: Current and past project pages.
---

<section class="page-card project-page">
  <p class="eyebrow">Project statuses</p>
  <h1>Current and past work</h1>
  <p>Each project has its own page with a short status note and summary.</p>

  <div class="grid">
    {% for project in site.data.projects %}
      {% include project-card.html project=project %}
    {% endfor %}
  </div>
</section>

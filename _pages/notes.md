---
layout: page
title: Notes
permalink: /notes/
---

A place to collect all of the notes I've written and organise them.


## Seminars
{% for post in site.categories.seminar limit:3 %}
  <ul>
      <li> <a href="{{post.url}}"> {{post.title}} </a></li>
  </ul>
{% endfor %}
<!-- [More]({{ site.url }}/seminars) -->

## Research notes
{% for post in site.categories.PhD limit:3 %}
  <ul>
      <li> <a href="{{post.url}}"> {{post.title}} </a></li>
  </ul>
{% endfor %}

## Notes for fun
{% for post in site.categories.fun limit:3 %}
  <ul>
      <li> <a href="{{post.url}}"> {{post.title}} </a></li>
  </ul>
{% endfor %}

---
layout: page
title: Tutoring
permalink: /tutoring/
---

<!--  <a class="page-link" href="{{ baseurl}}/tutoring-schedule/"> Tutoring Schedule </a>  -->


This page is going to host links to various notes and animations that explain GCSE, A Level and university level mathematics and physics. An emphasis will be placed on demonstrating dynamical physics using animations. For instance, electromagnetic induction relies heavily on their being a changing magnetic field/flux. This is difficult to demonstrate using images and static mediums, I am going to investigate using animation software to aid my explanations.

## Question Sheets
{% for post in site.categories.tutoring limit:3 %}
  <ul>
    {% if post.tags contains "questions" -%}
      <li> <a href="{{post.url}}">  {{post.title}}</a>: {{post.summary}} </li>
    {% endif -%}
  </ul>
{% endfor %}

## Animations
{% for post in site.categories.tutoring limit:3 %}
  <ul>
    {% if post.tags contains "animation" -%}
      <li> <a href="{{post.url}}">  {{post.title}}</a>: {{post.summary}} </li>
    {% endif -%}
  </ul>
{% endfor %}

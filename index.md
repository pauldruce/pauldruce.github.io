---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---
<center>

I have recently completed my PhD at the University of Nottingham, UK, working with Prof. John Barrett on Non-commutative Geometry and Quantum Gravity.

I am currently looking for a research position.

My research is based on discretisations of spacetime to investigate quantum gravity effects.
I have worked on *fuzzy spaces*, which are finite non-commutative geometries based upon matrix algebras.
I am interested in how continuous symmetries affect these spaces.
Outside of non-commutative geometry, I am interested in exploring quantum geometries via numerical methods.

I am also interested in the development of quantum technologies, and the role of mathematics in the description of quantum phases of matter. For instance, there is a description of the quantum hall effect based upon the non-commutative torus. As a finite version has been developed, called the fuzzy torus, I am interested in investigating the consequence using this description would have for physics.

The particle animation on this page is made using p5js - a JavaScript framework. I am investigating using animation software such as *p5js* and *manim* to improve my teaching.

I'm also a self-employed GCSE and A Level tutor for Maths and Physics.

You can find links to various social media and other sites in the footer of every page.
</center>

<h3 class="post-list-heading">{{ page.list_title | default: "Recent Posts" }}</h3>
<ul class="post-list">
  {%- for post in site.posts limit:10  -%}
    {% if post.tags contains "post" -%}
    {% if post.tags contains "unfinished" %}{%else%}
    <li>
      {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
      <span class="post-meta">{{ post.date | date: date_format }} </span><img src="/assets/images/post-arrow.svg" alt="arrow" style="width:1.2em;margin-right:1em;"><br>
        <a class="post-link" href="{{ post.url | relative_url }}">
          {{ post.title}}</a> - {{ post.summary}}
   </li>
   {% endif -%} {% endif %}
{%- endfor -%}
</ul>
<a href="{{site.urla}}/posts">see more </a>

<h3 class="post-list-heading">Unfinished and In Progress Notes</h3>
<center>These posts will eventually move to the list above over time...</center>
<ul class="post-list">
  {%- for post in site.posts limit:10  -%}
    {% if post.tags contains "post" -%}
    {% if post.tags contains "unfinished" %}
    <li>
      {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
      <span class="post-meta">{{ post.date | date: date_format }} </span><img src="/assets/images/post-arrow.svg" alt="arrow" style="width:1.2em;margin-right:1em;"><br>
        <a class="post-link" href="{{ post.url | relative_url }}">
          {{ post.title}}</a> - {{ post.summary}}
   </li>
   {% endif -%} {% endif %}
{%- endfor -%}
</ul>
<a href="{{site.urla}}/posts">see more </a>



<!-- p5js for the particle effect on the home screen -->
<script src="{{ base.url }}/assets/js/particle_animation.js"></script>

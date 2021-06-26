---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
animation: p5js
---

<br>

<center>
Hi, how’s it going? I’m Paul, this is my site.

It's a bit of an experiment of mine and many parts are not polished or even remotely close to finished. Its mainly a place for me to experiment with web technologies and store the resources I've created.


I’ve recently (July 2020) graduated with my PhD from the University of Nottingham, UK. I worked with Prof. John Barrett on Non-commutative Geometry and Quantum Gravity. If you are interested finding out more about this topic I suggest that you look at the documents in in: [Research]({{ site.url}}/research). My PhD thesis contains a thorough introduction to the subject of non-commutative geometry via finite spectral triples.

I've recently joined a software company based in Sheffield, UK, called [MachineWorks](www.machineworks.com). They specialise in creating software to handle 3D mesh geometry for manufactoring, for instance see [Polygonica](www.polygonica.com).

I am an experienced academic tutor for mathematics and physics. I tutor all levels ranging from GCSE, A level to University level. I have experience as a course demonstrator for university level course also.
I use this site to host notes and questions that I make for my students so that others may benefit from them also.

I have a profile at [https://www.mytutor.co.uk/tutors/58270/](https://www.mytutor.co.uk/tutors/58270/) if you’d like an easy and safe way to contact me about online tutoring.
I can also offer tutoring outside of MyTutor which is cheaper that what is stated on my profile for MyTutor. This is due to the overheads that MyTutor charge for using there service.

Feel free to contact me about tutoring or any other aspect of my site by sending me an email. [Click here to send me an email](mailto:pjdruce+website@gmail.com).

The particle animation on this page is made using p5js - a JavaScript framework. I am investigating using animation software such as *p5js* and *manim* to improve my teaching.

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

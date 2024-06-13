---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
animation: p5js
---

<br>

<center>
Hi, how's it going? I'm Paul, this is my site.

It's a bit of an experiment of mine and many parts are not polished or even
remotely close to finished. It's mainly a place for me to experiment with web
technologies and store the resources I've created.

I'm a software engineer in test (SDET) at The MathWorks, the creators of MATLAB
and Simulink.
I work in the Cloud Platforms team - making MATLAB feel at home in the cloud.

I graduated with my PhD from the University of Nottingham, UK in 2020.
I worked with Prof. John Barrett on Non-commutative Geometry and Quantum Gravity.
If you are interested finding out more about this topic I suggest that you look at the documents in: [Research]({{ site.url}}/research).

Between 2020-2022 I worked as a tutor and I needed a place to easily share my
timetable and any content I created with my students.
This is what drove me to create this website.
You can find my tutoring content here: [Tutoring]({{_site.url}}/tutoring).

</center>

<h3 class="post-list-heading">{{ page.list_title | default: "Recent Posts" }}</h3>
<ul class="post-list">
  {%- for post in site.posts limit:10  -%}
    {% if post.tags contains "post" -%}
    {% if post.tags contains "unfinished" %}{%else%}
    <li>
      {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
      <span class="post-meta">{{ post.date | date: date_format }} </span><img src="/assets/images/post-arrow.svg" alt="arrow" class='arrow-img' style="width:1.2em;margin-right:1em;"><br>
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
      <span class="post-meta">{{ post.date | date: date_format }} </span><img src="/assets/images/post-arrow.svg" alt="arrow" class='arrow-img' style="width:1.2em;margin-right:1em;"><br>
        <a class="post-link" href="{{ post.url | relative_url }}">
          {{ post.title}}</a> - {{ post.summary}}
   </li>
   {% endif -%} {% endif %}
{%- endfor -%}
</ul>
<a href="{{site.urla}}/posts">see more </a>

<!-- p5js for the particle effect on the home screen -->
<script src="{{ base.url }}/assets/js/particle_animation.js"></script>

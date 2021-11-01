---
layout: page
title: All Posts
permalink: /posts/
---
<h2> Tutoring Posts </h2>
<ul class="post-list"><li>
{%- for post in site.posts -%}
  {%- if post.tags contains "post" and post.category=="tutoring" -%}
<li>
  {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
  <span class="post-meta">{{ post.date | date: date_format }} </span><img src="/assets/images/post-arrow.svg" class='arrow-img' alt="arrow" style="width:1.2em;margin-right:1em;"><br>
    <a class="post-link" href="{{ post.url | relative_url }}">
      {{ post.title}}</a> - {{ post.summary}}
</li>
{%- endif -%}
{%- endfor -%}
</ul>

<h2>Research Posts</h2>
<ul class="post-list">
{%- for post in site.posts -%}
  {%- if post.category=="research" and post.tags contains "post" -%}
  <li>
    {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
    <span class="post-meta">{{ post.date | date: date_format }} </span><img src="/assets/images/post-arrow.svg" class='arrow-img' alt="arrow" style="width:1.2em;margin-right:1em;"><br>
      <a class="post-link" href="{{ post.url | relative_url }}">
        {{ post.title}}</a> - {{ post.summary}}
  </li>
  {%- endif -%}
{%- endfor -%}
</ul>


<h2> Miscellaneous Posts </h2>
<ul class="post-list">
{%- for post in site.posts -%}
  {%- if post.category!="research" and post.category!="tutoring" -%}
  <li>
    {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
    <span class="post-meta">{{ post.date | date: date_format }} </span><img src="/assets/images/post-arrow.svg" class='arrow-img' alt="arrow" style="width:1.2em;margin-right:1em;"><br>
      <a class="post-link" href="{{ post.url | relative_url }}">
        {{ post.title}}</a> - {{ post.summary}}
  </li>
{%- endif -%}
{%- endfor -%}
</ul>

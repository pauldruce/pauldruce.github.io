---
layout: page
title: Research
permalink: /research/
---
<center>

##### Research Overview
My research is based on discretisations of spacetime to investigate quantum gravity effects.
I have worked on *fuzzy spaces*, which are finite non-commutative geometries based upon matrix algebras.
I am interested in how continuous symmetries affect these spaces.
Outside of non-commutative geometry, I am interested in exploring quantum geometries via numerical methods.

I am also interested in the development of quantum technologies, and the role of mathematics in the description of quantum phases of matter. For instance, there is a description of the quantum hall effect based upon the non-commutative torus. As a finite version has been developed, called the fuzzy torus, I am interested in investigating the consequence using this description would have for physics.

</center>
### Publications
- PhD Thesis: *Spectral Geometry of Fuzzy Spaces*. Paul Druce: University of Nottingham (2020) <a href = "{{site.url}}/assets/PDFs/Paul Druce's PhD Thesis 2020.pdf"> PDF here </a>
- *Spectral estimators for finite non-commutative geometries*. Barrett,J., Druce,P., Glaser, L.: J Phys Math Theor. 52, 275203 (2019). doi:<a href="https://doi.org/10.1088/1751-8121/ab22f8">10.1088/1751-8121/ab22f8 </a>

<a href="https://scholar.google.co.uk/citations?user=Jo77IVsAAAAJ&hl=en"> Google Scholar</a>, <a href="http://inspirehep.net/author/profile/P.Druce.1">INSPIRE-HEP</a>, <a href = "https://orcid.org/0000-0002-2774-964X">ORCID</a>




### Research notes and documents
{% for post in site.categories.research  %}
  {% if post.tags contains "notes" or post.tags contains "document" %}
  <ul>
      <li> {{post.summary}}: <a href="{{post.url}}">  {{post.title}} </a></li>
  </ul>
  {% endif %}
{% endfor %}

### Notes for fun

- A poster I made for the conference Quantum Gravity on the Computer,  <a href="{{site.url}}/assets/PDFs/PaulDrucePoster-QGotC18.pdf">here </a>
- Revision guide made for Thermal Physics II for the University of Warwick Physics Society <a href="{{site.url}}/assets/PDFs/Thermal Physics II Revision Guide-2013.pdf"> here</a>

### Research Blog Posts
{% for post in site.categories.research  %}
  <ul>
    {% if post.tags contains "post" -%}
      <li> {{post.summary}}: <a href="{{post.url}}">  {{post.title}} </a> </li>
    {% endif -%}
  </ul>
{% endfor %}

### The beginnings of a personal wiki...

[Fuzzy Spaces](/research/fuzzy_spaces)

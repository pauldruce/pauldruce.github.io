---
layout: page
title: Documents
permalink: /docs/
---
### Publications
- PhD Thesis: *Spectral Geometry of Fuzzy Spaces*. Paul Druce: University of Nottingham (2020) <a href = "{{site.url}}/assets/PDFs/Paul Druce's PhD Thesis 2020.pdf"> PDF here </a>
- *Spectral estimators for finite non-commutative geometries*. Barrett,J., Druce,P., Glaser, L.: J Phys Math Theor. 52, 275203 (2019). doi:<a href="https://doi.org/10.1088/1751-8121/ab22f8">10.1088/1751-8121/ab22f8 </a>

<a href="https://scholar.google.co.uk/citations?user=Jo77IVsAAAAJ&hl=en"> Google Scholar</a>, <a href="http://inspirehep.net/author/profile/P.Druce.1">INSPIRE-HEP</a>, <a href = "https://orcid.org/0000-0002-2774-964X">ORCID</a>




### Research notes
{% for post in site.tag.PhD limit:3 %}
  <ul>
      <li> {{post.summary}}: <a href="{{post.url}}">  {{post.title}} </a></li>
  </ul>
{% endfor %}

### Notes for fun

- A poster I made for the conference Quantum Gravity on the Computer,  <a href="{{site.url}}/assets/PDFs/PaulDrucePoster-QGotC18.pdf">here </a>
- Revision guide made for Thermal Physics II for the University of Warwick Physics Society <a href="{{site.url}}/assets/PDFs/Thermal Physics II Revision Guide-2013.pdf"> here</a>

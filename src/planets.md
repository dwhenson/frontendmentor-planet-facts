---
pagination:
  data: planets.items
  size: 1
  alias: planet
permalink: "planets/{{ planet.name | slug }}/"
---

{% extends "layouts/base.html" %}
{% block content %}

<main tabindex="-1" id="main-content">{% include "partials/planet-main.html" %}</main>
{% include "partials/planet-details.html" %}
{% endblock %}

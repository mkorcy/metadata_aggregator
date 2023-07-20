---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: Our Projects
---

# Welcome to our project directory

This page lists all of the projects in our directory.

{% for project in site.data.projects %}
## [{{ project.projectName }}]({{ project.projectType }})

**Author**: {{ project.author }}

**Description**: {{ project.description }}

---
{% endfor %}
---

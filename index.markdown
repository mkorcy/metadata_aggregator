---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: Our Projects
---

# Welcome to our project directory

This page lists all of the projects in our directory.

{% for item in site.data.projects %}

## [{{ item[1].projectName }}]({{ item[1].repositoryUrl }})

**Author**: {{ item[1].authorName }}

**Description**: {{ item[1].description }}

**Project Type**: {{ item[1].projectType }}

**Programming Languages**:

{% for language in item[1].programmingLanguages %}
- {{ language }}
{% endfor %}

**Frameworks and Libraries**:

{% for framework in item[1].frameworksAndLibraries %}
- {{ framework }}
{% endfor %}

**Databases**:

{% for database in item[1].databases %}
- {{ database }}
{% endfor %}

**APIs Used**:

{% for api in item[1].apisUsed %}
- {{ api }}
{% endfor %}

**Hosting Platform**: {{ item[1].hostingPlatform }}

---
{% endfor %}
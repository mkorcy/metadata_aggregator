---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: Our Projects
---

# Welcome to our project directory

This page lists all of the projects in our directory.

{% for project in site.data.projects %}

## [{{ project[1].projectName }}]({{ project[1].repositoryUrl }})

**Author**: {{ project[1].authorName }}

**Description**: {{ project[1].description }}

**Project Type**: {{ project[1].projectType }}

**Programming Languages**:

{% for language in project[1].programmingLanguages %}
- {{ language }}
{% endfor %}

**Frameworks and Libraries**:

{% for framework in project[1].frameworksAndLibraries %}
- {{ framework }}
{% endfor %}

**Databases**:

{% for database in project[1].databases %}
- {{ database }}
{% endfor %}

**APIs Used**:

{% for api in project[1].apisUsed %}
- {{ api }}
{% endfor %}

**Hosting Platform**: {{ project[1].hostingPlatform }}

{% endfor %}
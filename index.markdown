---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: Our Projects
---

# Welcome to our project directory

This page lists all of the projects in our directory.

{% for repo, project in site.data.projects %}

## [{{ project.projectName }}]({{ project.repositoryUrl }})

**Author**: {{ project.authorName }}

**Description**: {{ project.description }}

**Project Type**: {{ project.projectType }}

**Programming Languages**:

{% for language in project.programmingLanguages %}
- {{ language }}
{% endfor %}

**Frameworks and Libraries**:

{% for framework in project.frameworksAndLibraries %}
- {{ framework }}
{% endfor %}

**Databases**:

{% for database in project.databases %}
- {{ database }}
{% endfor %}

**APIs Used**:

{% for api in project.apisUsed %}
- {{ api }}
{% endfor %}

**Hosting Platform**: {{ project.hostingPlatform }}

---
{% endfor %}
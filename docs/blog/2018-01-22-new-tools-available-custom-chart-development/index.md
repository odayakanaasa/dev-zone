---
title: New Tools Available for Custom Chart Development
date: "2018-01-22"
author: "Mike Werling"
image: "custom-charts-development.png"
imageAuthor: false
imageAuthorLink: false
showImageInArticle: true
canonicalLink: "https://www.zoomdata.com/blog/new-tools-available-custom-chart-development/"
publishedAt: "Zoomdata"
excerpt: "In Zoomdata version 2.6.3, Zoomdata introduced a new way to create custom charts: the Custom Chart Command Line Interface (CLI)..."
draft: false
---

In Zoomdata version 2.6.3, Zoomdata introduced a new way to create custom charts: the Custom Chart Command Line Interface (CLI).  The CLI implements the capabilities of the Chart Studio web interface (e.g., create/edit charts, add libraries, configure controls and variables).  Moving custom chart development to the command line enables developers to better integrate with other tools and development workflows.

Many customers have developed custom charts with Chart Studio to visualize their data in ways that are most appropriate for their business or analysts.  The limitations of the web-based Chart Studio can prevent use of more advanced development techniques.   The CLI addresses these limitations by improving the custom visualization development experience, allowing developers to:
* Use their Integrated Development Environment (IDE) or text editing package of choice
* Edit visualization source code on their workstation, allowing integration with a version control system such as Git or Subversion
* Explore more advanced functionality and client-side tools such as Webpack to split code among multiple files, or Typescript, SASS, and other compile-time tools
These benefits mean developers can follow a more standard software development life cycle, improving the quality and maintainability of custom visualizations.

The CLI is available today for developers to begin working with and using custom charts.  Developers install the CLI from the Node Package Manager (NPM) repository (note: as Zoomdata phases out Chart Studio, the distribution method could change).  The CLI requires developers have NodeJS 6.4.0 or newer and the latest NPM.  Developers install the CLI using NPM by executing:
```bash
$ zd-chart --help
```
```
 Usage: zd-chart [options] [command]

 A CLI tool to manage Zoomdata Custom Charts

 Options:

   -V, --version  output the version number

   -h, --help     output usage information

 Commands:

   add    Add a custom chart or library to the Zoomdata server

   config Set-up an encrypted configuration of Zoomdata's server URL and admin credentials

   create Create a new custom chart in the Zoomdata server

   edit   Edit a custom chart's controls, components, libraries, name, variables, and/or visibility

   ls     List custom charts

   pull   Pull the latest version of a custom chart from the Zoomdata server

   push   Push the current state of the chart to the Zoomdata server

   rm     Remove a custom chart or library from the Zoomdata server

   watch  Watch for changes in custom chart files and update them in the Zoomdata server

   help [cmd] display help for [cmd]
```

Zoomdata will be sunsetting Chart Studio in an upcoming 2.6 release.  We encourage all our customers to install the CLI and start taking advantage of the benefits of developing custom visualizations with this new capability.
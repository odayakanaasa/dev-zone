---
title: "Creating your Own Chart Container"
---

It is useful to create your own chart container inside the controller.element div to have full control over its styling.

Example:

```javascript
var chartContainer = document.createElement('div');
chartContainer.style.width = '100%';
chartContainer.style.height = '100%';
chartContainer.classList.add('chart-container');
controller.element.appendChild(chartContainer);
```

Now you can use the div with class "chart-container" to render your chart.

---
title: "Adding Custom Options to the Radial Menu"
---

```javascript
controller.menu.show({
  x: coordinates.x, // x coordinate in pixels where menu shows
  y: coordinates.y, // y coordinate in pixels where menu shows
  data: function() {
    return d.model; // The original Zoomdata datum object
  },
  menu: {
    items: ['Zoom', 'Filter', 'Filter All', 'Info', 'Custom'],
    Custom: function() {
      // Add custom logic
    },
  },
});
```

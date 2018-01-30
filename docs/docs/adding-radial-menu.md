---
title: "Adding the Radial Menu"
---

To show the menu:

```javascript
controller.menu.show({
  x: coordinates.x, // x coordinate in pixels where menu shows
  y: coordinates.y, // y coordinate in pixels where menu shows
  data: function() {
    return d.model; // The original Zoomdata datum object
  },
});
```

To hide the menu:

```javascript
controller.menu.hide();
```

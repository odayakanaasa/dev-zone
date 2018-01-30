---
title: "Adding Tooltips"
---

To show the tooltips:

```javascript
controller.tooltip.show({
  x: coordinates.x, // x coordiante in pixels where tooltip shows
  y: coordinates.y, // y coordinate in pixels where menu shows
  data: function() {
    return d.model // The original Zoomdata datum object
  },
  color: function() {
    return <hexColor> || <rgbColor> || <colorName>
  }
})
```

To hide the tooltips:

```javascript
controller.tooptip.hide();
```

---
title: "Extracting the Chart Data"
---

Use the api controller.update to override it with a function that will receive the new data anytime the source is queried.
Example:

```javascript
controller.update = function(data) {
  // Called when new data arrives
  console.log(data); // An array of data will be outputted to the JS console.
};
```

Each datum may look like:

```json
{
  "group": ["Books"],
  "current": {
    "count": 1267
  }
}
```

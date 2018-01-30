---
title: Using Data Accessors
---

Let's assume your chart currently has the following two variables:

| Name     | Type   |
| -------- | ------ |
| Group By | Group  |
| Size     | Metric |

```javascript
var groupAccessor = controller.dataAccessors['Group By']; // Group accessor for the variable named: 'Group By'
var metricAccessor = controller.dataAccessors.Size; // // Metric accessor for the variable named: 'Size'
var dataset = []; // Place holder for formatted data
controller.update = function(data) {
  dataset = data.map(function(datum) {
    return {
      name: groupAccessor.raw(datum),
      value: metricAccessor.raw(datum),
    };
  });
  console.log(dataset);
};
```

Notice how we don't hardcode the group or metric field names. We also don't hardcode the aggregation function used by the metric. We can now change our source defaults for the chart and our code will remain the same. Each datum in dataset array looks like:

```json
{
  name: "Books",
  value: 6291
}
```

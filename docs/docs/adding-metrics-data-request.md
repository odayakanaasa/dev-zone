---
title: "Adding Metrics to your Data Request"
---

1. `zd-chart edit <custom-chart-name>`
2. Select `Variables`
3. Select `Add a new variable`
4. Select th the type `metric`
5. Enter and **name** and a **description**, and enter `No` for `Will this variable drive color in your chart?`

With the newly created variable of type "Metric", you can re-configure your chart at the data source level to define the default metric that should be requested upon opening the chart. `(Sources -> "Select your source" -> Charts -> Custom -> "Your custom chart's name")`

Now the you have a metric value requested, each datum may look like:

```json
{
  "group": ["Books"],
  "current": {
    "count": 1267,
    "metrics": {
      "price": {
        "sum": 5995.0
      }
    }
  }
}
```

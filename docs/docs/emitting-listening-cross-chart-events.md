---
title: Emitting and Listening to Cross Chart Events
---

Emit cross-chart event

```javascript
zd.constructor.MVC.Events.trigger('custom_event', { name: 'John' });
```

Listen to cross-chart event

```javascript
zd.constructor.MVC.Events.listenTo(
  zd.constructor.MVC.Events,
  'custom_event',
  function(param) {
    console.log('The name received was: ' + param.name);
  },
);
```

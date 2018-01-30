---
title: "Emitting and Listening to Local Chart Events"
---

Emit local event

```javascript
controller.trigger('custom_event', 'hello');
```

Listen local to event

```javascript
controller.on('custom_event', function(param) {
  console.log(param);
}
```

### #0.3 What are we using

1. Visual Studio Code : text editor
2. Google Browser : Chrome, Brave
3. node.js : <https://nodejs.org>

### #1.0 Life Before Flexbox

display: inline-block;

### #1.1 First Rule of Flexbox

```CSS
parent {
  display: flex;
}
```

### #1.2 Main Axis and Cross Axis

```CSS
parent {
  display: flex; /* flex-direction: row */
  justify-content: space-around; /* main-axis */
  align-items: flex-start; /* cross-axis */
}
```

### #1.4 align-self and order

```CSS
child:nth-child(1) {
  order: 2;
  align-self: center;
}
```

### #1.5 wrap, nowrap, reverse, align-content

```CSS
parent {
  align-content: space-around;
  flex-wrap: wrap;
}
```

### #1.6 flex-grow, flex-shrink

```CSS
child:nth-child(2) {
  flex-shrink: 3;
  flex-grow: 2;
}

child:nth-child(3) {
  flex-shrink: 2;
  flex-grow: 1;
}
```

### #1.7 flex-basis

```CSS
.child {
  flex-basis: 30%; /* width */
}
```

### #1.8 Flexbox Froggy 1-13

### #1.9 Flexbox Froggy 14-24

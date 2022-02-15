# SCSS Masterclass

(S)CSS Layout Masterclass: Flexbox & Grid

## Flexbox:

- [x] flex-direction
- [x] order
- [x] justify-content
- [x] align-items
- [x] align-self
- [x] flex-wrap
- [x] align-content
- [x] flex-grow
- [x] flex-shrink
- [x] flex-basis

## Grid:

- [ ] grid-template-columns
- [ ] grid-template-rows
- [ ] grid-template-areas
- [ ] grid-template
- [ ] grid-column-gap
- [ ] grid-row-gap
- [ ] justify-items
- [ ] align-items
- [ ] justify-content
- [ ] align-content
- [ ] grid-auto-columns
- [ ] grid-auto-rows
- [ ] grid-auto-flow
- [ ] grid-column-start
- [ ] grid-column-end
- [ ] grid-row-start
- [ ] grid-row-end
- [ ] grid-column
- [ ] grid-row
- [ ] justify-self
- [ ] align-self

### Keywords & Functions:

- [ ] repeat
- [ ] min-content
- [ ] max-content
- [ ] minmax
- [ ] auto-fit
- [ ] auto-fill

## SCSS:

- [ ] Variables
- [ ] Nesting
- [ ] Partials
- [ ] Mixins
- [ ] Extend
- [ ] Responsive

## To Clone:

- [ ] [https://besthorrorscenes.com](https://besthorrorscenes.com)
- [ ] [https://paint-box.com](https://paint-box.com)
- [ ] [http://10x19.co](http://10x19.co)
- [ ] [http://www.z-o-o.fr](http://www.z-o-o.fr)
- [ ] [https://schwartzmedia.com.au](https://schwartzmedia.com.au)
- [ ] [https://tolv.dk](https://tolv.dk)
- [ ] [https://rodicdavidson.co.uk](https://rodicdavidson.co.uk)
- [ ] [https://beige.de](https://beige.de)
- [ ] [http://donicaida.com](http://donicaida.com)
- [ ] [https://canalstreet.market](https://canalstreet.market)
- [ ] [https://wonhundred.com](https://wonhundred.com)

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
child {
  flex-basis: 30%; /* width */
}
```

### #1.8 Flexbox Froggy 1-13

Flexbox Froggy: <https://flexboxfroggy.com/#ko>

### #1.9 Flexbox Froggy 14-24

flex-flow : flex-direction flex-wrap;

### #2.2 CSS Grid Basic Concepts

```css
parent {
  display: grid;
  grid-template-columns: 250px 250px 250px;
  grid-template-rows: 100px 50px 300px;
  /* gap: 10px; */
  column-gap: 5px;
  row-gap: 5px;
}
```

### #2.3 Grid Template Areas

### #2.4 Rows and Columns

### #2.5 Shortcuts

### #2.6 Line Naming

### #2.7 Grid Template

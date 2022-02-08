# React CSS Grid layout component 

A layout component rendering a Grid container with customizable number of columns, their width and gap between columns/rows.

## Installation

Run `npm i react-easy-css-grid-layout` or `yarn add react-easy-css-grid-layout` in the root of your React project

## Usage

In the component import Grid with 

```js
import Grid from 'react-easy-css-grid-layout'
```

Wrap around the children elements to render them in a grid:

```js
    <Grid columns={"2"} gap={'1em'}>
		<p>1. Will go to the first column</p>
		<p>2. Will go to the second column</p>
		<p>3. Will go to the first column</p>
		<p>4. Will go to the second column and so on...</p>
    </Grid>
```

![Example output]('exampleOutput.png')

Or looping and rendering children will also work:

```js
    <Grid columns={"2"} gap={'1em'}>
    {renderAll.all(products)}
    </Grid>
```

## Props

There are two props accepted: `columns` and `gap`

### `columns` accepted values: 

* a number -- in this case it will be the number of columns with the same width, example:

```js
<Grid columns={"2"} gap={'1em'}>
// will create 2 equally sized columns
<Grid columns={"5"} gap={'1em'}>
will create 5 equally sized columns
```

* several length units accepted in CSS -- in this case it will be width of corresponding columns, example:

```js
<Grid columns={"1fr 50% 200px"} gap={'1em'}>
// will create 3 columns with width 1fr for the first columns, 50% for the second column and 200px for the third column
```

### `gap` accepted values:

Any length unit which will be used as a gap between columns and rows of your grid.

---

Done at <a href='https://barcelonacodeschool.com'>Barcelona Code School</a>
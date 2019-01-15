# react-component-range

[![npm version](https://img.shields.io/npm/v/react-component-range.svg?style=flat)](https://www.npmjs.com/package/react-component-range)

React Component Range is a Simple and minimal React input range component

## Install

`npm install react-component-range`

## Usage

```jsx
import React, { Component } from "react"
import Range from "react-component-range"

class App extends Component {
  render() {
    return (
      <Range
        min={0}
        max={100}
        defaultValue={50}
        onChange={val => console.debug(val)}
      />
    )
  }
}

export default App
```

## Demo

A CodePen demo is available [here](http://codepen.io/davidchin/full/GpNvqw/).

## Props

| Name           | Type     | Default   | Description                                                                                                                            |
| -------------- | -------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| id             | string   |           | The id of the input (range)                                                                                                            |
| name           | string   |           | The input's name, to identify the input in the data submitted with the form's data                                                     |
| min            | number   | `0`       | The minimum permitted value                                                                                                            |
| max            | number   | `100`     | The maximum permitted value                                                                                                            |
| step           | number   | `1`       | The stepping interval, used both for user interface and validation purposes                                                            |
| onChange       | function |           | The callback action to be performed when the value changes. It returns the current value.                                              |
| value          | number   |           | The input's current value                                                                                                              |
| defaultValue   | number   | `0`       | The input's initial value                                                                                                              |
| thumbSize      | number   | `18px`    | The size of the thumb.                                                                                                                 |
| trackHeight    | number   | `6px`     | The height of the track                                                                                                                |
| trackColor     | string   | `#90addb` | The color of the track                                                                                                                 |
| thumbColor     | string   | `#00a4e8` | The color of the thumb                                                                                                                 |
| ariaLabel      | string   |           | The accesibility aria-label property of the input                                                                                      |
| ariaLabelledby | string   |           | The accesibility aria-labelledby property of the input                                                                                 |
| disabled       | boolean  | `false`   | A Boolean attribute which is present if the input should be disabled                                                                   |
| required       | bollean  | `false`   | A Boolean which, if true, indicates that the input must have a value before the form can be submitted                                  |
| tabIndex       | number   |           | A numeric value providing guidance to the user agent as to the order in which controls receive focus when the user presses the Tab key |

### Contributing

Feel free to submit issues and enhancement requests.

Please refer to each project's style guidelines and guidelines for submitting patches and additions. In general, we follow the "fork-and-pull" Git workflow.

1.  **Fork** the repo on GitHub
2.  **Clone** the project to your own machine
3.  **Commit** changes to your own branch
4.  **Push** your work back up to your fork
5.  Submit a **Pull request** so that we can review your changes

NOTE: Be sure to merge the latest from "upstream" before making a pull request!

## Future actions

- Typescript component
- Write tests for the component

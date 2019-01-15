import React, { Component } from "react"
import PropTypes from "prop-types"

import "./styles.less"

/** A basic input (range) component that should render nicely on any platform */
const Range = props => {
  return (
    <div className="wh-range-container">
      <input
        className="wh-range"
        id={props.id}
        name={props.name}
        step={props.step}
        type="range"
        value={props.value}
        defaultValue={props.defaultValue}
        min={props.min}
        max={props.max}
        onChange={e => props.onChange(e.target.value)}
        aria-label={props.ariaLabel}
        arial-labelledby={props.ariaLabelledby}
        disabled={props.disabled}
      />
    </div>
  )
}

Range.propTypes = {
  /** Specifies the id */
  id: PropTypes.string,
  /** Specifies the name */
  name: PropTypes.string,
  /** Specifies the min value */
  min: PropTypes.number,
  /** Specifies the max value */
  max: PropTypes.number,
  /** Specifies the step */
  step: PropTypes.number,
  /** Specifies the value */
  value: PropTypes.number,
  /** Specifies the initial value */
  defaultValue: PropTypes.number,
  /** Specifies the callback action when the value is changed */
  onChange: PropTypes.func,
  /** Specifies if the range is disabled */
  disabled: PropTypes.bool,
  /** Specifies the aria-label */
  ariaLabel: PropTypes.string,
  /** Specifies the aria-labelledby */
  ariaLabelledby: PropTypes.string,
  /** Specifies the size of the thumb */
  thumbSize: PropTypes.number,
  /** Specifies the color of the thumb */
  thumbColor: PropTypes.string,
  /** Specifies the height of the track */
  trackHeight: PropTypes.number,
  /** Specifies the color of the track */
  trackColor: PropTypes.string,
  required: PropTypes.bool,
  tabIndex: PropTypes.number
}
/*
Range defaultProps = {
    id: null,
    min: 0,
    max: 100,
    step: 1,
    sliderColor: "#B9B9B9",
    trackColor: "#009688",
    thumbColor: "#009688",
    sliderSize: 4
  }
*/
export default Range

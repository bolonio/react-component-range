import React, { Component } from "react"
import PropTypes from "prop-types"

import "./styles.less"

/** Simple and minimal React input range component */
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
        required={props.required}
        tabindex={props.tabIndex}
      />
    </div>
  )
}

Range.propTypes = {
  /** The id of the input (range) */
  id: PropTypes.string,
  /** The input's name, to identify the input in the data submitted with the form's data */
  name: PropTypes.string,
  /** The minimum permitted value */
  min: PropTypes.number,
  /** The maximum permitted value */
  max: PropTypes.number,
  /** The stepping interval, used both for user interface and validation purposes */
  step: PropTypes.number,
  /** The input's current value */
  value: PropTypes.number,
  /** The input's initial value */
  defaultValue: PropTypes.number,
  /** The callback action to be performed when the value changes. It returns the current value. */
  onChange: PropTypes.func,
  /** The accesibility aria-label property of the input */
  ariaLabel: PropTypes.string,
  /** The accesibility aria-labelledby property of the input */
  ariaLabelledby: PropTypes.string,
  /** A Boolean attribute which is present if the input should be disabled */
  disabled: PropTypes.bool,
  /** A Boolean which, if true, indicates that the input must have a value before the form can be submitted */
  required: PropTypes.bool,
  /** A numeric value providing guidance to the user agent as to the order in which controls receive focus when the user presses the Tab key */
  tabIndex: PropTypes.number
}

Range.defaultProps = {
  min: 0,
  max: 100,
  defaultValue: 0,
  step: 1,
  disabled: false,
  required: false
}

export default Range

import { Fragment } from "react";
import "./style.css";

/**
 * name - name attribute of the form element
 * options - array of objects that describe the options
 *            each option is an object
 *          {
 *            value: ""
 *            label: ""
 *            class: ""
 *          }
 *
 * selected - value that is selected
 * onChange - function that handles change event
 * direction - layout direction either "column" or "row"
 */
function RadioButtons({ name, options, selected, onChange, direction }) {
  const rnd = Math.floor(Math.random() * 10000);
  return (
    <div className={`switch-field${direction ? " column" : ""}`}>
      {options.map((option, index) => (
        <Fragment key={rnd * (index + 1)}>
          <input
            type="radio"
            id={`radio-${rnd * (index + 1)}`}
            name={name}
            value={option.value}
            checked={selected === option.value}
            onChange={() => onChange(name, option.value)}
          />
          <label
            className={option.class}
            htmlFor={`radio-${rnd * (index + 1)}`}
          >
            {option.label}
          </label>
        </Fragment>
      ))}
    </div>
  );
}

export default RadioButtons;

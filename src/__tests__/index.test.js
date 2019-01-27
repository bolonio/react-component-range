import React from "react";
import ReactRange from "../";
import renderer from "react-test-renderer";

test("ReactRange renders correctly with no props", () => {
  const component = renderer.create(<ReactRange />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("ReactRange renders disabled component", () => {
  const component = renderer.create(<ReactRange disabled={true} />);

  let tree = component.toJSON();
  expect(tree.props.disabled).toEqual(true);
});

test("ReactRange renders component with min and max", () => {
  const component = renderer.create(<ReactRange min={100} max={1000} />);

  let tree = component.toJSON();
  expect(tree.props.min).toEqual(100);
  expect(tree.props.max).toEqual(1000);
});

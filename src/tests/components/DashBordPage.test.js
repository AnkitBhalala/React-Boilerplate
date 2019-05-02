import React from "react";
import { shallow } from "enzyme";
import DashbordPage from "../../components/DashBordPage";

test("should render Dashboard Page", () => {
  const wrapper = shallow(<DashbordPage />);
  expect(wrapper).toMatchSnapshot();
});

import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';

import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
  getByText,
  getByTestId,
  getAllByTestId,
  getByPlaceholderText,
  getByAltText,
  queryByText,
  queryByAltText
} from "@testing-library/react";
import { exportAllDeclaration } from '@babel/types';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("App", () => {
  it("can go to Signup", async () => {
    const { getByText } = render(<App />);

    await waitForElement(() => getByText("SIGNUP"));
    fireEvent.click(getByText("SIGNUP"));
    expect(getByText("Sign Up")).toBeInTheDocument();
  })
  it("can go to Login", async () => {
    const { getByText } = render(<App />);

    await waitForElement(() => getByText("LOGIN"));
    fireEvent.click(getByText("LOGIN"));
    expect(getByText("Login")).toBeInTheDocument();
  })
})


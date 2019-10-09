import React from 'react';
import ReactDOM from 'react-dom'
import Landing from "../landing"
import { isTSAnyKeyword } from '@babel/types';

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

afterEach(cleanup);

/* describe("Landing", () => {
    it()
}) */

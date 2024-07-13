// JSX is a JS syntax which is easier to creat React element.
// JSX is not part of React. They are different.
// React can be written without JSX.
// JSX makes it easy. It is like where we merge JS and HTML. JSX is HTML like syntax

import React, {createElement} from "react";
import ReactDom, { createRoot } from "react-dom/client"

const heading = createElement("h1", {}, "This is rendered")

const root = createRoot(document.getElementById("root"))


// Creating a React element using JSX syntax

const jsxHeading = <h1 id="heading">This is Namaste React JSX</h1> // THis is not a pure JS but it works in React because of Babel (Babel converts jsx to react element which is an object, render converts it to HTML.). This code is transpiled by the parcel (babel) before it goes into JS engine before it is passed to render.
// JSX code is transpiled into React Element which is an object as discussed earlier using Babel. Then its converted to JS object then converted to HTML usign render().
// Babel transpiles also converts the JSX into the js code which is compatilble with the older version of the browser.
// Camel case format is used in jsx to give attributes to html oads

root.render(jsxHeading)

// Everything in React is a componenent. There are two types of component in React
// 1. Class based component - This is OLD way
// Functional based component - This is NEW way
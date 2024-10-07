# You should know the answer to these questions.

## React Questions:
### When should you useReducer vs useState?
You can useState for simpler state management of seperate values. If there is interdependency between values, or children elements are performing many callbacks- its simpler to manage the state through passing the dispatch function down to the children, and they will dispatch events to the reducer function.

### what is usRef?
Helps to store a reference to a specific React element or component that will be returned by the component's render config function. It is used to return references to a specific element or component as returned by the render () function. They come in handy when we need DOM measurements or to add methods to components.

### what is useMemo?
when is you want to store a value, but not calculate everytime the component re-renders.

`useCallback` stores a function without re-creating the function on every render.


### how do you destroy a React component?
You can either unmount it by doing a conditional rendering, or even better use `ReactDOM.unmountComponentAtNode()`


### differnce between a controlled and uncontrolled component?
This referring to how are form elements are managed in react. If useState to manage form values, that is a controlled component. If you useRef to refer to components then you are using uncontrolled form components.

### What is the VDOM (Virtual DOM)?

### What are some common pitfalls when doing data fetching?


### Describe the usage and pitfalls of useEffect (open discussion).
If your set a value that is required by your dependency array, the useEffect could be called recursivly.

### when should use use a custom react hook?
You want to update the cart price, and there are many places that cart price could be displayed. Anytime you goto any page, you'll have the right price. But another page needs it too. It can be helpful to pull out a value from a complex context for example.

## General JS questions:
1. whats Promise.all()?
1. using eval.
1. async fetch() - TODO need to practice
1. how do you make a iterable js class
1. webworkers vs serviceworks, how does that fit in the event loop?
1. Explain polymorphism and inheritance.
1. What tools do you use to optimize page performance?
1. What is webassembly, webworkers, serviceworkers?
1. What is the difference between a process and a thread?
  - threads run in processes, and threads can share memory between eachother.
1. walk through the event loop cycle.
1. how does `async` `await` work - in the context of an event loop?
  - The item is added back onto the event stack and each event loop, it is checked if that data is ready. If it is, then the value is assigned inside of the original closure.


## Senior JS items:
1. WeakMap and WeakSet - can be garbage collected
1. WeakMap/WeakSet: Weakly referenced objects for memory-efficient data structures.
1. BigInt: For handling large arbitrary-precision integers.
1. Proxy: For intercepting and customizing object behavior.
1. Reflect: For utility functions that perform object-like operations.
1. Intl Objects: For internationalization and localization of dates, numbers, and currencies.
1. TypedArray and ArrayBuffer: For handling raw binary data.
1. Promises (allSettled(), any()): Finer control of handling multiple asynchronous operations.
1. URL Object: For URL parsing, manipulation, and construction.


Timed Practices:
1. TODO List

## interview practices:
 - https://leetcode.com/discuss/interview-question/2105625/Walmart-Interview-or-Frontend-Engineer

## Good resources

1. [Mastering the Interview (medium)](https://medium.com/@phamtuanchip/mastering-the-interview-20-reactjs-interview-questions-for-senior-frontend-developers-75b1a3730193)
1. [Senior React Interview Questions] (https://www.ideamotive.co/react/interview#senior)
1. https://developer.chrome.com/blog/inside-browser-part1


## phases of react rendering:
- JSX interpolation to createElemnet
- has a graph of the whole app tree
- Virtual dom- a snapshop of the current graph
- reconsilation - the process of creating a change set and pushing it to the DOM or native framework.

## Companion Libraries:

- Redux - helps manage state
    - Store useSelect -> UI -> dispatch(action) -> reducer uses action, returns new state -> store updates.
- Recoill - centralized subscription based state.
- Datafetching:
 - React Query: Hooks for fetching data
 - Relay - graphql  client focused on scalapity
 - Apollo - Graphql similar to Relay
- Server Side Render: SSR
 - Render
 - Next.js
- Static Site Generation: SSG
 - Gatsby: populary for SSG
- React Router
- Bundlers:
 - Webpack, Rollup, Browserify
- Create-React-App
- Vite
 - framework agnostic alternative to create react app
 - uses rollup under the hood
## Install

```bash
npm i earth-ui
```

## Basic Usage

```jsx
import { Button } from 'earth-ui';
import 'earth-ui/dist/earth-ui.min.css';

ReactDOM.render(<Button>Name</Button>, mountNode);
```

> Note: earth-ui supports ES6 tree shaking by default.

## Use in create-react-app

[create-react-app][create-react-app-url] is an out of the box starter of react application and we will try to use the `earth-ui` library in projects created by `create-reaction-app` as following:

First, you need to install the `create-reaction-app` cli, see more at [Installation Instruction][create-react-app-url].

Then, install `earth-ui` by `npm` or `yarn`.

```bash
npm i earth-ui
```

Modify `src/App.js` and import the Button from `earth-ui`.

```jsx
import React, { Component } from 'react';
import { Button } from 'earth-ui';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Button icon="add">ADD</Button>
      </div>
    );
  }
}

export default App;
```

Modify `src/App.css` and import `earth-ui/dist/earth-ui.min.css` at the top.

```css
@import '~earth-ui/dist/earth-ui.min.css';

.App {
  text-align: center;
}

...
```

As for now, you could see the Button on the page and you can also add other components to the application. More details, please refer to [User Guide][create-react-app-user-guide-url].

## Global Configuration

Use `defaultProps` prop to override or extend the configuration of component globally, as the following example:

```jsx
Tooltip.defaultProps = Object.assign(Tooltip.defaultProps || {}, {
  triggerMode: 'click'
})
```

> After the global configuration has been set, these apis become stateful which means the final results are affected by the configuration, so try to configure them all at once and point out them to other developers.

[tooltip-url]: /#/components/Tooltip
[create-react-app-url]: https://github.com/facebookincubator/create-react-app
[create-react-app-user-guide-url]: https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md

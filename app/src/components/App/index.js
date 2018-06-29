/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
import Input from 'src/containers/Input';
import InputAll from 'src/containers/InputAll';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <InputAll name="inputAll" />
    <Input name="input1" />
    <Input name="input2" />
    <Input name="input3" />
    <Input name="input4" />
  </div>
);

/**
 * Export
 */
export default App;

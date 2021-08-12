import SimpleHoc from './hoc/SimpleHoc';
import SimpleRenderProp from './renderProp/SimpleRenderProp';
import SimpleCustomHook from './customHook/SimpleCustomHook';

function App() {

  return (
    <>
      <SimpleHoc />
      <hr></hr>
      <SimpleRenderProp />
      <hr></hr>
      <SimpleCustomHook />
    </>
  );
};

export default App;

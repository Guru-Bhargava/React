/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="About"/>
    
    {/* If its specified as above it overwrites Navbar.defaultProps else it takes from the Navbar.defaultProps */}
    {/* <Navbar/> This is default and it uses Navbar.defaultProps */}

    <div className="container my-3">  {/* my-3 in js adds margin to y-axis of 3 */}
      <Textform heading="Enter the text to analyze below"/>
    </div>
    </>
  );
}

export default App;

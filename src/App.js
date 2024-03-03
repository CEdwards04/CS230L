import logo from './logo.svg';
import './App.css';
import './Navbar';
import './Card';
import Navbar from "./Navbar";
import Card from "./Card";




function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
       <h1>CS 230L</h1>
      <h2>Section - 001</h2>
      <p>WVU ID: 800389448</p>
      <p>Hi, I am Caleb</p>
      <Card></Card>
      </div>
  );
}

export default App;

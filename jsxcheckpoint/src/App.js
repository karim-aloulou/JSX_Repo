import logo from './logo.svg';
import './App.css';
import './style.css';
import Image from "./imageInSrc.jpg"
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">ALOULOU Karim</h1>
          
          <img className="image" src={Image} />
          
          <img src="/imageInPublic.jpg" />
        </div>
          <iframe width={1520} height={623} controls src="https://www.youtube.com/embed/W2MpGCL8-9o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </header>
    </div>
  );
}

export default App;

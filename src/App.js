import './App.css';
import Header from './components/Header/Header';
import Laptops from './components/Laptops/Laptops';


function App() {
  return (
    <div>
        <Header></Header>
        <Laptops></Laptops>
        <div className="question-area">
          <section>
            <h3>How React works?</h3>
            <p>React works in declarative way. It follows semantic versioning. It goes through its virtual DOM, and create listof those changes that need to be made to the actual DOM.</p>
          </section>
          <section>
            <h3>Props vs States in react?</h3>
            <p>Props make components reusable. State is the local state which can not be accessed from outside of the component. </p>
          </section>

        </div>
    </div>
  );
}

export default App;


import './App.css';

function App() {
  fetch("http://api.weatherapi.com/v1/current.json?key=5bca6bccf3ce4c41a8f15340232807&q=Pune")
    .then((response) => response.json())
    .then((data) => console.log(data))
  return (
    <div className="App">
      <h1>Weather App</h1>
    </div>
  );
}

export default App;


import './App.css';
import WeatherApp from './components/WeatherApp';

function App() {
  fetch("http://api.weatherapi.com/v1/current.json?key=5bca6bccf3ce4c41a8f15340232807&q=Pune")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
  return (
    <div className="App">
      <WeatherApp />
    </div>
  );
}

export default App;

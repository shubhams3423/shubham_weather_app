import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import BeatLoader from "react-spinners/BeatLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HumidityIcons from "./HumidityIcons";
const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [inputName, setInputName] = useState("Pune");
  const [saveInputText, setSaveInputText] = useState("Pune");
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=5bca6bccf3ce4c41a8f15340232807&q=${saveInputText}`
    )
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        if (data.error) {
          toast.error("Location invalid, please enter a city name");
          setWeatherData(data);
        } else {
          setWeatherData(data);
        }
      })
      .catch((error) => {
        toast.error("Error fetching weather data");
        console.log(error);
      });
  }, [saveInputText]);

  const handleInputBoxKeydown = (e) => {
    if (e.key === "Enter") {
      setSaveInputText(inputName);
    }
  };
  const onClickRenderWeather = () => {
    if (inputName !== "") setSaveInputText(inputName);
  };

  const handleInputLocationInfo = (lat, long) => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=5bca6bccf3ce4c41a8f15340232807&q=${lat},${long}`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data);
        setInputName(data.location.name);
      });
  };
  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) =>
        handleInputLocationInfo(
          position.coords.latitude,
          position.coords.longitude
        ),
      (error) => {
        toast.error("Error fetching location");
        console.log(error);
      }
    );
  };

  return (
    <div>
      <main>
        <div className="weatherApp">
          <div className="searchSection">
            <input
              type="text"
              className="inputText"
              placeholder="Search..."
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              onKeyDown={handleInputBoxKeydown}
            />
            <div className="location-icon">
              <FontAwesomeIcon icon={faLocationDot} onClick={handleLocation} />
            </div>
            <div className="searchIcon">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                onClick={onClickRenderWeather}
              />
            </div>
          </div>
          <div>
            <img
              src="https://previews.123rf.com/images/martialred/martialred1702/martialred170200035/71710170-cloudy-or-cloud-partly-blocking-the-sun-flat-color-vector-icon-for-weather-apps-and-websites.jpg"
              alt="weather Img"
              className=" weatherImg"
            />
          </div>
          <div>
            <div className="subMainSection">
              <div className="tempMainDiv ">
                <div className="tempSubDiv">
                  <h2
                    className={
                      weatherData.error
                        ? "h2-displayErrorSymbol"
                        : "h2-removeErrorSymbol"
                    }
                  >
                    {isLoading ? (
                      <BeatLoader color="#252827" size={10} />
                    ) : weatherData.error ? (
                      "?"
                    ) : (
                      weatherData?.current?.temp_c
                    )}{" "}
                  </h2>
                  <span>&deg;C</span>
                </div>
                <p
                  className={
                    weatherData.error
                      ? "tempSub-p-displayErrorSymbol"
                      : "tempSub-p-removeErrorSymbol"
                  }
                >
                  {isLoading ? (
                    <BeatLoader color="#252827" size={10} />
                  ) : weatherData.error ? (
                    "?"
                  ) : (
                    weatherData?.current?.condition?.text
                  )}
                </p>
              </div>
            </div>
            <div className="lastSection">
              <div className="weatherSection">
                <div>
                  {isLoading ? (
                    <BeatLoader color="#252827" size={10} />
                  ) : (
                    <HumidityIcons weatherData={weatherData} />
                  )}
                </div>
                <div>
                  <h3
                    className={
                      weatherData.error
                        ? "h3-displayErrorSymbol"
                        : "h3-removeErrorSymbol"
                    }
                  >
                    {isLoading ? (
                      <BeatLoader color="#252827" size={10} />
                    ) : weatherData.error ? (
                      "?"
                    ) : (
                      weatherData?.current?.humidity
                    )}
                    &nbsp;
                  </h3>
                  <span>%</span>
                  <p>Humidity</p>
                </div>
              </div>
              <div className="weatherSection">
                <div>
                  <FontAwesomeIcon icon={faWind} size="2xl" />
                </div>
                <div>
                  <h3
                    className={
                      weatherData.error
                        ? "h3-displayErrorSymbol"
                        : "h3-removeErrorSymbol"
                    }
                  >
                    {isLoading ? (
                      <BeatLoader color="#252827" size={10} />
                    ) : weatherData.error ? (
                      "?"
                    ) : (
                      weatherData?.current?.wind_kph
                    )}
                    &nbsp;
                  </h3>
                  <span>Km/H</span>
                  <p>Wind Speed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ToastContainer />
    </div>
  );
};

export default WeatherApp;

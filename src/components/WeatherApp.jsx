import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import BeatLoader from "react-spinners/BeatLoader";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HumidityIconsContainer from "./HumidityIconsContainer";
import WindIconContainer from "./WindIconContainer";
import WeatherImageContainer from "./WeatherImageContainer";
import SideBar from "./SideBar";
const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [inputName, setInputName] = useState("Pune");
  const [saveInputText, setSaveInputText] = useState("Pune");
  const [theme, setTheme] = useState("light");
  const [showSideBar, setShowSideBar] = useState(false);

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
      <main className={`main-${theme}`}>
        <div className={`weatherApp-${theme} weatherApp`}>
          <div
            className={
              (showSideBar &&
                ` hamburgerMenu-${theme}  
              hamburgerMenu`) ||
              ""
            }
          >
            {showSideBar && <SideBar theme={theme} setTheme={setTheme} />}
          </div>
          <div className="TopContainer">
            <div className={(showSideBar && "hamburger-block Menu") || "Menu"}>
              {!showSideBar ? (
                <HiMenu onClick={() => setShowSideBar(true)} />
              ) : (
                <RxCross2 onClick={() => setShowSideBar(false)} />
              )}
            </div>
            <div className="topSection">
              <div className="inputSection">
                <input
                  type="text"
                  className={`inputText-${theme} inputText`}
                  placeholder="Search..."
                  value={inputName}
                  onChange={(e) => setInputName(e.target.value)}
                  onKeyDown={handleInputBoxKeydown}
                />
                <div className={`location-icon-${theme} location-icon`}>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    onClick={handleLocation}
                  />
                </div>
                <div className={`searchIcon-${theme} searchIcon`}>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    onClick={onClickRenderWeather}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="weatherImageContainer">
            {isLoading ? (
              <BeatLoader color="#252827" size={10} />
            ) : (
              <WeatherImageContainer
                weatherText={weatherData?.current?.condition?.text}
              />
            )}
          </div>
          <div>
            <div className="subMainSection">
              <div className="tempMainDiv ">
                <div className="tempSubDiv">
                  <h2
                    className={
                      weatherData.error
                        ? "h2-displayErrorSymbol"
                        : `h2-removeErrorSymbol-${theme} h2-removeErrorSymbol `
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
                      : `tempSub-p-removeErrorSymbol-${theme} tempSub-p-removeErrorSymbol`
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
                <div className="dropIcons">
                  {isLoading ? (
                    <BeatLoader color="#252827" size={10} />
                  ) : weatherData.error ? (
                    "?"
                  ) : (
                    <HumidityIconsContainer
                      humidity={weatherData?.current?.humidity}
                      theme={theme}
                    />
                  )}
                </div>
                <div>
                  <h3
                    className={
                      weatherData.error
                        ? "h3-displayErrorSymbol"
                        : `h3-removeErrorSymbol-${theme} h3-removeErrorSymbol`
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
                <div className="windIcon">
                  {isLoading ? (
                    <BeatLoader color="#252827" size={10} />
                  ) : weatherData.error ? (
                    "?"
                  ) : (
                    <WindIconContainer
                      windSpeed={weatherData?.current?.wind_kph}
                    />
                  )}
                </div>
                <div>
                  <h3
                    className={
                      weatherData.error
                        ? "h3-displayErrorSymbol"
                        : `h3-removeErrorSymbol-${theme} h3-removeErrorSymbol`
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

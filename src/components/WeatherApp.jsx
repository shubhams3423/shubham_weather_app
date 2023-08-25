import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDroplet } from '@fortawesome/free-solid-svg-icons'
import BeatLoader from "react-spinners/BeatLoader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiSearch } from 'react-icons/fi'
import { FaWind } from 'react-icons/fa'
const WeatherApp = () => {
    const [weatherData, setWeatherData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [inputName, setInputName] = useState("Pune");
    const [saveInputText, setSaveInputText] = useState("Pune");
    const [error, setError] = useState({ errorText: "", showError: "removeErrorSymbol" })

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://api.weatherapi.com/v1/current.json?key=5bca6bccf3ce4c41a8f15340232807&q=${saveInputText}`)
            .then((response) => response.json())
            .then((data) => {
                setIsLoading(false)
                if (data.error) {
                    setWeatherData(data)
                    setError({ errorText: "?", showError: "displayErrorSymbol" })
                    toast.error("Location in valid , please enter a city name.")
                }
                else {
                    setWeatherData(data);
                    setError({ errorText: "", showError: "removeErrorSymbol" })
                }

            })
            .catch((error) => console.log(error))
    }, [saveInputText])
    const checkOnKeyDown = (e) => {
        if (e.key === "Enter") {
            setSaveInputText(inputName)
        }
    }
    const onClickRenderWeather = () => {
        if (inputName !== "")
            setSaveInputText(inputName)
    }
    return (
        <div >
            <main>
                <div className="weatherApp" >
                    <div className="searchSection">
                        <input type="text" className='inputText' placeholder='Search...' value={inputName} onChange={(e) => setInputName(e.target.value)} onKeyDown={checkOnKeyDown} />
                        <div className='searchIcon'>
                            <FiSearch onClick={onClickRenderWeather} />
                        </div>
                    </div>
                    <div >
                        <img src="https://previews.123rf.com/images/martialred/martialred1702/martialred170200035/71710170-cloudy-or-cloud-partly-blocking-the-sun-flat-color-vector-icon-for-weather-apps-and-websites.jpg" alt="weather Img" className=' weatherImg' />
                    </div>
                    <div  >
                        <div className='subMainSection'>
                            <div className="tempMainDiv ">
                                <div className='tempSubDiv'>
                                    <h2 className={`h2-${error.showError}`}>{isLoading ? <BeatLoader
                                        color="#252827"
                                        size={10}
                                    /> : weatherData.error ? error.errorText : weatherData?.current?.temp_c} </h2>
                                    <span>&#8451;</span>
                                </div>
                                <p className={`tempSub-p-${error.showError}`}>{isLoading ? <BeatLoader
                                    color="#252827"
                                    size={10}
                                /> : weatherData.error ? error.errorText : weatherData?.current?.condition?.text}</p>
                            </div>

                        </div>
                        <div className='lastSection'>
                            <div className="weatherSection">
                                <div>
                                    {isLoading ? <BeatLoader
                                        color="#252827"
                                        size={10}
                                    /> : weatherData.error ? error.errorText : weatherData?.current?.humidity <= 55 ? <FontAwesomeIcon icon={faDroplet} className='drop' style={{ color: "rgba(23, 91, 208, 0.42)", }} /> : (weatherData?.current?.humidity <= 65 && weatherData?.current?.humidity > 55) ? <FontAwesomeIcon icon={faDroplet} className='drop' style={{ color: "rgb(86, 145, 247)", }} /> : <FontAwesomeIcon icon={faDroplet} className='drop' style={{ color: "rgb(23, 91, 208)", }} />}

                                </div>
                                <div>
                                    <h3 className={`h3-${error.showError}`}>{isLoading ? <BeatLoader
                                        color="#252827"
                                        size={10}
                                    /> : weatherData.error ? error.errorText : weatherData?.current?.humidity}&nbsp;</h3><span>%</span>
                                    <p>Humidity</p>
                                </div>
                            </div>
                            <div className="weatherSection">
                                <div>
                                    <FaWind size={31} />
                                </div>
                                <div>
                                    <h3 className={`h3-${error.showError}`}>{isLoading ? <BeatLoader
                                        color="#252827"
                                        size={10}
                                    /> : weatherData.error ? error.errorText : weatherData?.current?.wind_kph}&nbsp;</h3><span>Km/H</span>
                                    <p>Wind Speed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <ToastContainer />
        </div>
    )
}

export default WeatherApp

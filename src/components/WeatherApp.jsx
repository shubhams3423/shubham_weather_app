import React, { useEffect, useState } from 'react'
import BeatLoader from "react-spinners/BeatLoader";


import { FiSearch } from 'react-icons/fi'
// import { BsDropletFill } from 'react-icons/bs'
import { FaWind } from 'react-icons/fa'
const WeatherApp = () => {
    const [weatherData, setWeatherData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [inputName, setInputName] = useState("");
    const [saveInputText, setSaveInputText] = useState("Pune");

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://api.weatherapi.com/v1/current.json?key=5bca6bccf3ce4c41a8f15340232807&q=${saveInputText}`)
            .then((response) => response.json())
            .then((data) => {
                setWeatherData(data)

                setIsLoading(false)
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
                            <FiSearch size={19} onClick={onClickRenderWeather} />
                        </div>
                    </div>
                    <div >
                        <img src="https://previews.123rf.com/images/martialred/martialred1702/martialred170200035/71710170-cloudy-or-cloud-partly-blocking-the-sun-flat-color-vector-icon-for-weather-apps-and-websites.jpg" alt="weather Img" className=' weatherImg' />
                    </div>
                    <div>
                        <div className="temperature ">
                            <h2>{isLoading ? <BeatLoader
                                color="#252827"
                                size={10}
                            /> : weatherData?.current?.temp_c} &#8451;</h2>
                            <p>Scattered Clouds</p>
                        </div>
                        <div className='lastSection'>
                            <div className="weatherSection">
                                <div>
                                    {isLoading ? <BeatLoader
                                        color="#252827"
                                        size={10}
                                    /> : weatherData?.current?.humidity <= 55 ? "Dry and Comfortable" : (weatherData?.current?.humidity <= 65 && weatherData?.current?.humidity > 55) ? "Muggy" : "Moisture"}
                                    {/* <BsDropletFill size={31} /> */}
                                </div>
                                <div>
                                    <p>{isLoading ? <BeatLoader
                                        color="#252827"
                                        size={10}
                                    /> : weatherData?.current?.humidity}%</p>
                                    <span>Humidity</span>
                                </div>
                            </div>
                            <div className="weatherSection">
                                <div>
                                    <FaWind size={31} />
                                </div>
                                <div>
                                    <p>{isLoading ? <BeatLoader
                                        color="#252827"
                                        size={10}
                                    /> : weatherData?.current?.wind_kph}Km/H</p>
                                    <span>Wind Speed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default WeatherApp

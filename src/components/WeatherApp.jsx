import React, { useEffect } from 'react'
import { FiSearch } from 'react-icons/fi'
import { BsDropletFill } from 'react-icons/bs'
import { FaWind } from 'react-icons/fa'
const WeatherApp = () => {

    useEffect(() => {
        fetch("http://api.weatherapi.com/v1/current.json?key=5bca6bccf3ce4c41a8f15340232807&q=Pune")
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error))
    }, [])
    return (
        <div >
            <main>
                <div className="weatherApp" >
                    <div className="searchSection">
                        <input type="text" className='inputText' placeholder='Pune' />
                        <div className='searchIcon'>
                            <FiSearch size={19} />
                        </div>
                    </div>
                    <div >
                        <img src="https://previews.123rf.com/images/martialred/martialred1702/martialred170200035/71710170-cloudy-or-cloud-partly-blocking-the-sun-flat-color-vector-icon-for-weather-apps-and-websites.jpg" alt="weather Img" className=' weatherImg' />
                    </div>
                    <div>
                        <div className="temperature ">
                            <h2>28 &#8451;</h2>
                            <p>Scattered Clouds</p>
                        </div>
                        <div className='lastSection'>
                            <div className="weatherSection">
                                <div>
                                    <BsDropletFill size={31} />
                                </div>
                                <div>
                                    <p>51%</p>
                                    <span>Humidity</span>
                                </div>
                            </div>
                            <div className="weatherSection">
                                <div>
                                    <FaWind size={31} />
                                </div>
                                <div>
                                    <p>4.63Km/H</p>
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

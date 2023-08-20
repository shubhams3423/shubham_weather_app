<<<<<<< Updated upstream
import React from 'react'
=======
import React, { useEffect, useState } from 'react'
>>>>>>> Stashed changes
import { FiSearch } from 'react-icons/fi'
import { BsDropletFill } from 'react-icons/bs'
import { FaWind } from 'react-icons/fa'

const WeatherApp = () => {
<<<<<<< Updated upstream
    return (
        <div >
            <main>
                <div className="weatherApp" >
                    <div className="d-flex align-items-center">
=======
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetch("http://api.weatherapi.com/v1/current.json?key=5bca6bccf3ce4c41a8f15340232807&q=Pune")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setIsLoading(false)

            })
            .catch((error) => console.log(error))

    }, [])
    console.log("data", data)


    return (
        <div >
            <main>
                < div className="weatherApp" >
                    <div className="searchSection">
>>>>>>> Stashed changes
                        <input type="text" className='inputText' placeholder='Pune' />

                        <div className='searchIcon'>
<<<<<<< Updated upstream
                            <FiSearch />
=======
                            <FiSearch size={19} />

>>>>>>> Stashed changes
                        </div>
                    </div>
                    <div >
                        <img src="https://previews.123rf.com/images/martialred/martialred1702/martialred170200035/71710170-cloudy-or-cloud-partly-blocking-the-sun-flat-color-vector-icon-for-weather-apps-and-websites.jpg" alt="weather Img" className='img-fluid weatherImg' />
                    </div>
                    <div>
<<<<<<< Updated upstream
                        <div className="temperature text-center">
                            <h2>28 &#8451;</h2>
=======
                        <div className="temperature ">
                            <h2>{isLoading ? "loading" : data?.current?.temp_c} &#8451;</h2>
>>>>>>> Stashed changes
                            <p>Scattered Clouds</p>
                        </div>
                        <div className='d-flex justify-content-between endSection'>
                            <div className="d-flex align-items-center">
                                <div>
                                    <BsDropletFill size={31} />
                                </div>
<<<<<<< Updated upstream
                                <div className='ms-2'>
                                    <p className='fw-bold '>51%</p>
                                    <span className='fw-medium'>Humidity</span>
=======
                                <div>
                                    <p>{data?.current?.humidity}%</p>
                                    <span>Humidity</span>
>>>>>>> Stashed changes
                                </div>
                            </div>
                            <div className=" d-flex align-items-center  ">
                                <div>
                                    <FaWind size={31} />
                                </div>
<<<<<<< Updated upstream
                                <div className='ms-2'>
                                    <p className='fw-bold'>4.63Km/H</p>
                                    <span className='fw-medium'>Wind Speed</span>
=======
                                <div>
                                    {/* <p>{weatherData.wind_kph}Km/H</p> */}
                                    <span>Wind Speed</span>
>>>>>>> Stashed changes
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main >
        </div >
    )
}

export default WeatherApp

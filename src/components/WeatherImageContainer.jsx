import React from "react";

const WeatherImageContainer = ({ weatherText }) => {
  return (
    <div className="imageContainer">
      <img
        src={
          weatherText === "Cloudy"
            ? "https://cdn.iconscout.com/icon/free/png-256/free-cloudy-2960374-2451828.png"
            : weatherText === "Rainy"
            ? "https://png.pngtree.com/png-vector/20191118/ourmid/pngtree-rain-icon-creative-design-template-png-image_1998625.jpg"
            : weatherText === "Sunny"
            ? "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Weather_icon_-_sunny.svg/512px-Weather_icon_-_sunny.svg.png"
            : weatherText === "Clear"
            ? "https://cdn-icons-png.flaticon.com/128/414/414927.png"
            : weatherText === "Partly cloudy"
            ? "https://cdn.iconscout.com/icon/free/png-256/free-cloudy-2960374-2451828.png"
            : weatherText === "Patchy rain possible"
            ? "https://cdn-icons-png.flaticon.com/512/4724/4724091.png"
            : weatherText === "Light rain"
            ? "https://cdn-icons-png.flaticon.com/512/4724/4724091.png"
            : weatherText === "Light rain shower"
            ? "https://cdn-icons-png.flaticon.com/512/4724/4724091.png"
            : weatherText === "Mist"
            ? "https://cdn-icons-png.flaticon.com/512/4724/4724091.png"
            : weatherText === "Light drizzle"
            ? "https://cdn-icons-png.flaticon.com/512/4724/4724091.png"
            : "https://via.placeholder.com/400"
        }
        alt=""
        className=" weatherImg"
      />
    </div>
  );
};

export default WeatherImageContainer;

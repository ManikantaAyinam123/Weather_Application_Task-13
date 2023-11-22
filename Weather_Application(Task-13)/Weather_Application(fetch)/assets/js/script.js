function getdata()
{
    $("#error").css("display","none");
    var loc=$("#search").val();
    
const apikey="dc39a16c8017d022b1d06fb775f7ddc6";
const url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      console.log(Math.round(data.main.temp-273))
      // console.log(data.weather[0])
      $("#temp").text(Math.round(data.main.temp-273)+"°c");
      $("#location").text(loc);
      $("#humidity").text(data.main.humidity+"%");
      $("#wind").text(Math.round(data.wind.speed)+"km/h");
    
  switch (data.weather[0].main) {
    case "Clear":
      $("#WeatherImage").attr("src","./assets/images/clear.png");
      break;
    case "Clouds":
      $("#WeatherImage").attr("src", "./assets/images/clouds.png");
      break;
    case "Haze":
      $("#WeatherImage").attr("src", "./assets/images/mist.png");
      break;
    case "Rain":
      $("#WeatherImage").attr("src", "./assets/images/rain.png");
      break;
    case "Snow":
      $("#WeatherImage").attr("src", "./assets/images/snow.png");
      break;
    case "Drizzle":
      $("#WeatherImage").attr("src", "./assets/images/drizzle.png");
      break;
  }
    })
    .catch(function(error)
      {
          $("#error").css("display","block");
          $("#error").text("Enter Valid City Name");
      })
    }
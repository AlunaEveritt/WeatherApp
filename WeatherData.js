/**
 * Created by Aluna.E on 23/07/2015.
 */
 
 /* All scripts wrapped in jQuery document ready function */
 
 $(document).ready(function (){
	
	/* Data models */
	
	//var weather_states_DB = TAFFY(weather_states); // weather states and their "pixel icons in weather_states.js".
	var wind_dir = 0; // Wind direction in degrees.
	var wind_speed = 0; // Wind speed - Unit: meter/sec - set of 3 speeds - light wind - mid wind - high wind.
	var rainfall_vol = 0; // "rain.3h" - Rain volume for the last 3 hours. - set of 3 levels: light rain - mid rain - heavy rain.
	/* var W_States = [] // Array of possible weather states available. */
	/* var W_State_Index = 0; // Map weather icon to array of weather states - one icon per state.*/	
	
	// Weather state:
	var weather_state = 0; // Stores weather state.
	
	/** Create function for showing wind direction - animate-wind. */
	var animate_wind = function (direction){
		/* Add interaction bit here.... 
		 * if shapeClip 1 touched:
		 * then start wind animation.
		 */
		 
		// Need to add speed function!!!
		
		/* if (W_State_Index == W_States.length) {W_State_Index > 0}; -> Not sure if needed? */
		
		if (direction == "West"){
			// Start wind animation from left side of canvas.
			/* Add wind speed info for speed of animation here*/
			//animate_wind(direction);
		} else if (direction == "East"){
			// Start wind animation from right side of canvas.
			/* Add wind speed info for speed of animation here*/
			//animate_wind(direction);
		} else if (direction == "North"){
			// Start wind animation from top side of canvas.
			/* Add wind speed info for speed of animation here*/
			//animate_wind(direction);
		} else if (direction == "South"){
			// Start wind animation from bottom side of canvas.
			/* Add wind speed info for speed of animation here*/
			//animate_wind(direction);
		}
		
		// Function for wind speed.
		function (speed){
		
			if (speed == "LightWind"){
				// Wind speed is light!
			} else if (speed == "MidWind"){
				// Wind speed is midium.
			} else if (speed == "HighWind"){
				// Wind speed if high.
			}
		}
	}
	
	
	/** Create function for showing current rain volume (in last 3 hours) - Show_Rain. */
	/* Animate rain function - based on rain fall in last 3 hours*/
	var animate_rain = function (rain_vol){
		
		if(rain_vol == "LightRain"){
			// Rainfall under ...
		} else if (rain_vol == "MidRain"){
			// Rainfall between ... and ...
		} else if (rain_vol == "HeavyRain"){
			// Rainfall over ...
		}
	}
	
	/** Show weather state. */
	var weather_state_icon = function (w_state){
		
		if (w_state == "ClearSky"){
			// Display sun icon.
		} else if (w_state == "FewClouds"){
			// Display few clouds icon.
		} else if (w_state == "ManyClouds"){
			// Display many clouds icon. 
		} else if (w_state == "Rain"){
			// Display rain icon.
		}
	} 
	
	//***** NOT SURE IF NEEDED *****//
	/** Show icon for clear sky - state num: 1 
	var clear_sky_icon = function (clear_sky){
		
		if (clear_sky == "ClearSky"){
			// Display sun icon.
		}
	}
	
	/** Show icon for cloud with sun - state num: 2 
	var few_clouds_icon = function (few_clouds){
		
		if(few_clouds == "FewClouds"){
			// Display cloud covering sun icon.
		}
	}
	
	/** Show icon for lots of clouds - state num: 3 
	var many_clouds_icon = function (many_clouds){
		
		if(many_clouds == "ManyClouds"){
			// Display many clouds icon.
		}
	}
	
	var rainfall_icon = function (rainfall){
	
		if(rainfall == "Rainfall"){
			// Display rainfall icon. 
		}
	}
	*/
	//*******************//
	
	//function processWind(result){
	//}
	
	
	/** Fetch initial wind data from API. */
	$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Lancaster,UK",function(results) {
		//processWind(results.wind);
		//processRain(results.rain);

		/** Wind Results - direction. */
		wind_dir = results.wind.deg;
		console.log(wind_dir);
		if (wind_dir > 45 && wind_dir <= 135){
			animate_wind('East');
		} else if (wind_dir > 135 && wind_dir <= 225){
			animate_wind('South');
		} else if (wind_dir > 225 && wind_dir <= 315) {
			animate_wind('West');
		} else { 
			animate_wind('North');
		}
		
		/** Wind Results - speed. */
		wind_speed = results.wind.speed;
		console.log(wind_speed);
		if(wind_speed > 0 && wind_speed <= 2.99){
			animate_wind('LightWind');
		} else if (wind_speed > 2.99 && wind_speed <= 5.99){
			animate_wind('MidWind');
		} else {
			animate_wind('HighWind');
		}
	
		/** Rainfall - volume results. */
		rainfall_vol = results.rain;
		console.log(rainfall_vol);
		if(rainfall_vol > 0 &&  rainfall_vol <= 6.99){
			animate_rain('LightRain');
		} else if (rainfall_vol > 6.99 && rainfall_vol <= 12.99){
			animate_rain('MidRain');
		} else {
			animate_rain('HeavyRain');
		}
		
		/** Current weather state. */
		weather_state = results.weather.id;
		console.log(weather_state);
		if(weather_state == 500 && weather_state <=531){
			weather_state_icon('Rain')	
		} else if (weather_state == 803 || weather_state == 804){
			weather_state_icon('ManyClouds')
		} else if (weather_state == 801 || weather_state == 802){
			weather_state_icon('FewClouds')
		} else {
			weather_state_icon('ClearSky')
		}
		
	})
	.fail(function(xhr, ajaxOptions,thrownError) {
		console.log(xhr.status); console.log(thrownError)
	});
	
	
	/** Update weather  to update every 2 mins*/
	set_wind_interval(function() {
		$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Lancaster,UK",function(results) {
			
			/** Wind Results - direction. */
			wind_dir = results.wind.deg;
			console.log(wind_dir);
			if (wind_dir > 45 && wind_dir <= 135){
				animate_wind('East');
			} else if (wind_dir > 135 && wind_dir <= 225){
				animate_wind('South');
			} else if (wind_dir > 225 && wind_dir <= 315) {
				animate_wind('West');
			} else { 
				animate_wind('North');
			}
			
			/** Wind Results - speed. */
			wind_speed = results.wind.deg;
			console.log(wind_speed);
			if(wind_speed > 0 && wind_speed <= 2.99){
				animate_wind('LightWind');
			} else if (wind_speed > 2.99 && wind_speed <= 5.99){
				animate_wind('MidWind');
			} else {
				animate_wind('HighWind');
			}
		
			/** Rainfall - volume results. */
			rainfall_vol = results.rain.3h;
			console.log(rainfall_vol);
			if(rainfall_vol > 0 &&  rainfall_vol <= 6.99){
				animate_rain('LightRain');
			} else if (rainfall_vol > 6.99 && rainfall_vol <= 12.99){
				animate_rain('MidRain');
			} else {
				animate_rain('HeavyRain');
			}
			
			/** Current weather state. */
			weather_state = results.weather.id;
			console.log(weather_state);
			if(weather_state == 500 && weather_state <=531){
				weather_state_icon('Rain')	
			} else if (weather_state == 803 || weather_state == 804){
				weather_state_icon('ManyClouds')
			} else if (weather_state == 801 || weather_state == 802){
				weather_state_icon('FewClouds')
			} else {
				weather_state_icon('ClearSky')
			}
		})
		.fail(function(xhr, ajaxOptions,thrownError) {
			console.log(xhr.status); console.log(thrownError)
		});
	}, 1000 * 120);	
 });
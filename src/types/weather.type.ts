import { IsString, IsNumber, IsEmail, IsNotEmpty } from "class-validator";

export class AddWeatherTypeRequest {
  @IsNotEmpty()
  @IsString()
  cityName!: string

  @IsNotEmpty()
  @IsString()
  country!: string
}

export class UpdateWeatherRequest {

  @IsNotEmpty()
  @IsNumber()
  temperature!: number

  @IsString()
  description!: string;
}

export interface CurrentWeatherResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number;
    grnd_level?: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface WeatherType {
  cityName: string;
  country: string;
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
}
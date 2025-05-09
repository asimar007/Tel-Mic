export type WeatherCondition = "sunny" | "cloudy" | "rainy" | "snowy";

export interface DayForecast {
  date: string;
  day: string;
  condition: WeatherCondition;
  highTemp: number;
  lowTemp: number;
  isWeekend: boolean;
  isSunday: boolean;
}

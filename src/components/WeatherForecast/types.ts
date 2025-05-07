export interface DayForecast {
  date: string;
  day: string;
  condition: "sunny" | "cloudy" | "rainy";
  highTemp: number;
  lowTemp: number;
  isWeekend: boolean;
  isSunday: boolean;
}

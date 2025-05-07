import { DayForecast } from '../components/WeatherForecast/types';

export const nagoyaForecasts: DayForecast[] = [
  {
    date: 17,
    day: '木',
    condition: 'sunny',
    highTemp: 25,
    lowTemp: 13
  },
  {
    date: 18,
    day: '金',
    condition: 'cloudy',
    highTemp: 25,
    lowTemp: 15
  },
  {
    date: 19,
    day: '土',
    condition: 'sunny',
    highTemp: 29,
    lowTemp: 17,
    isWeekend: true
  },
  {
    date: 20,
    day: '日',
    condition: 'rainy',
    highTemp: 22,
    lowTemp: 14,
    isWeekend: true,
    isSunday: true
  },
  {
    date: 21,
    day: '月',
    condition: 'sunny',
    highTemp: 26,
    lowTemp: 13
  },
  {
    date: 22,
    day: '火',
    condition: 'cloudy',
    highTemp: 24,
    lowTemp: 17
  },
  {
    date: 23,
    day: '水',
    condition: 'rainy',
    highTemp: 22,
    lowTemp: 13
  }
];
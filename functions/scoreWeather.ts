export function scoreWeather(
  actual: {
    temp: number;
    feels_like: number;
    humidity: number;
    wind: number;
    condition: string;
  },
  prefs: {
    favTempMin: number;
    favTempMax: number;
    favHumMin: number;
    favHumMax: number;
    favWind: number;
    favWeatherCondition: string;
  }
): number {
  let score = 0;

  // Temperature match (1.5)
  if (actual.temp >= prefs.favTempMin && actual.temp <= prefs.favTempMax) {
    score += 30;
  } else {
    const rangeMid = (prefs.favTempMin + prefs.favTempMax) / 2;
    const deviation = Math.abs(actual.temp - rangeMid);
    score += Math.max(0, 30 - deviation * 3); // lose 0.3 pts per °C deviation
  }

  // Humidity match (1.0)
  if (
    actual.humidity >= prefs.favHumMin &&
    actual.humidity <= prefs.favHumMax
  ) {
    score += 20;
  } else {
    const rangeMid = (prefs.favHumMin + prefs.favHumMax) / 2;
    const deviation = Math.abs(actual.humidity - rangeMid);
    score += Math.max(0, 20 - deviation * 2); // lose 0.05 pts per % deviation
  }

  // Wind match (0.5)
  const windDiff = Math.abs(actual.wind - prefs.favWind);
  score += Math.max(0, 10 - windDiff * 1); // lose 0.2 pts per m/s

  // Condition match (1.0)
  if (
    actual.condition.toLowerCase() === prefs.favWeatherCondition.toLowerCase()
  ) {
    score += 20;
  }

  // Feels like temperature (1.0)
  const feelsMid = (prefs.favTempMin + prefs.favTempMax) / 2;
  const feelsDiff = Math.abs(actual.feels_like - feelsMid);
  score += Math.max(0, 20 - feelsDiff * 2);

  return Math.round(score * 10) / 10; // round to 1 decimal
}

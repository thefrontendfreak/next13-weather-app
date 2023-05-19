interface CurrentWeather {
    is_day: number
    temperature: number
    time: string
    weathercode: number
    winddirection: number
    windspeed: number
}

interface Daily {
    apparent_temperature_max: [number]
    apparent_temperature_min: [number]
    sunrise: [string]
    sunset: [string]
    temperature_2m_max: [number]
    temperature_2m_min: [number]
    time: [string]
    uv_index_clear_sky_max: [number]
    uv_index_max: [number]
    weathercode: [number]
}

interface DailyUnits {
    apparent_temperature_max: String
    apparent_temperature_min: String
    sunrise: String
    sunset: String
    temperature_2m_max: String
    temperature_2m_min: String
    time: String
    uv_index_clear_sky_max: String
    uv_index_max: String
    weathercode: String
}

interface Hourly {
    apparent_temperature: [number]
    precipitation: [number]
    precipitation_probability: [number]
    rain: [number]
    relativehumidity_2m: [number]
    showers: [number]
    snow_depth: [number]
    snowfall: [number]
    temperature_2m: [number]
    time: [string]
    weathercode: [number]
    windgusts_10m: [number]
    uv_index: [number]
    uv_index_clear_sky: [number]
}

interface HourlyUnits {
    apparent_temperature: String
    precipitation: String
    precipitation_probability: String
    rain: String
    relativehumidity_2m: String
    showers: String
    snow_depth: String
    snowfall: String
    temperature_2m: String
    time: String
    weathercode: String
    windgusts_10m: String
}

interface Root {
    current_weather: CurrentWeather
    daily: Daily
    daily_units: DailyUnits
    elevation: number
    generationtime_ms: number
    hourly: Hourly
    hourly_units: HourlyUnits
    latitude: number
    longitude: number
    timezone: String
    timezone_abbreviation: String
    utc_offset_seconds: number
}
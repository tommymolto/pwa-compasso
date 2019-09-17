
export interface Climas {
  alerts?: Alert[];
  currently?: Currently;
  daily: Daily;
  flags?: Flags;
  hourly?: Hourly;
  latitude?: number;
  longitude?: number;
  minutely?: Minutely;
  offset?: number;
  timezone?: string;
}

export interface Alert {
  description: string;
  expires: number;
  time: number;
  title: string;
  uri: string;
}

export interface Currently {
  apparentTemperature?: number;
  cloudCover?: number;
  dewPoint?: number;
  humidity?: number;
  icon: string;
  nearestStormBearing?: number;
  nearestStormDistance?: number;
  ozone?: number;
  precipIntensity?: number;
  precipProbability?: number;
  pressure?: number;
  summary?: string;
  temperature?: number;
  time?: number;
  visibility?: number;
  windBearing?: number;
  windSpeed?: number;
}

export interface Datum {
  apparentTemperatureMax?: number;
  apparentTemperatureMaxTime?: number;
  apparentTemperatureMin?: number;
  apparentTemperatureMinTime?: number;
  cloudCover?: number;
  dewPoint?: number;
  humidity?: number;
  icon: string;
  moonPhase?: number;
  ozone?: number;
  precipIntensity?: number;
  precipIntensityMax?: number;
  precipProbability?: number;
  pressure?: number;
  summary?: string;
  sunriseTime?: number;
  sunsetTime?: number;
  temperatureMax?: number;
  temperatureMaxTime?: number;
  temperatureMin?: number;
  temperatureMinTime?: number;
  time?: number;
  visibility?: number;
  windBearing?: number;
  windSpeed?: number;
  precipIntensityMaxTime?: number;
  precipType?: string;
  precipAccumulation?: number;
}

export interface Daily {
  data?: Datum[];
  icon?: string;
  summary?: string;
}

export interface Flags {
  darkskyStations: string[];
  isdStations: string[];
  lampStations: string[];
  madisStations: string[];
  sources: string[];
  units: string;
}

export interface Datum2 {
  apparentTemperature: number;
  cloudCover: number;
  dewPoint: number;
  humidity: number;
  icon: string;
  ozone: number;
  precipIntensity: number;
  precipProbability: number;
  pressure: number;
  summary: string;
  temperature: number;
  time: number;
  visibility: number;
  windBearing: number;
  windSpeed: number;
  precipType: string;
}

export interface Hourly {
  data: Datum2[];
  icon: string;
  summary: string;
}

export interface Datum3 {
  precipIntensity: number;
  precipProbability: number;
  time: number;
}

export interface Minutely {
  data: Datum3[];
  icon: string;
  summary: string;
}





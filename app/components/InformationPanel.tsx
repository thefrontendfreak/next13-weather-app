import React from 'react'
import CityPicker from './CityPicker';
import { FaCloudSunRain, FaSun, FaMoon } from "react-icons/fa"
type Props = {
    city: string;
    results: Root;
    lat: string;
    long: string;
}

const InformationPanel = ({ city, lat, long, results }: Props) => {
    return (
        <div className='p-5 lg:p-10 bg-blue'>
            <div className='mb-5'>
                <h1 className='text-4xl lg:text-5xl font-bold mb-2 text-white'>
                    {decodeURI(city)}
                </h1>
                <p className='text-xl text-white'>
                    Long/Lat: {long}, {lat}
                </p>
            </div>

            <CityPicker />

            <hr className='my-10' />

            <div className='flex items-center justify-between'>
                <div>
                    <p className='text-xl font-light text-white'>
                        {new Date().toLocaleDateString("en-GB", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                        })}
                    </p>
                    <p className='text-white font-thin'>
                        Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
                    </p>
                </div>

                <p className='text-xl font-bold text-white uppercase'>
                    {new Date().toLocaleTimeString("en-GB", {
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true
                    })}
                </p>
            </div>

            <hr className='my-10' />

            <div className='mb-5'>
                <p className='text-5xl font-bold text-white flex items-center'>
                    <span className="icon mr-2">
                        <FaCloudSunRain />
                    </span>
                    {results.current_weather.temperature.toFixed()}°C
                </p>
            </div>

            <div className='bg-white bg-opacity-30 p-5 rounded-[5px] flex items-center justify-between'>
                <div className='flex items-center'>
                    <FaSun className='mr-2 text-xl text-white' />
                    <p className='text-xl text-white'>
                        Sunrise
                    </p>
                </div>
                <div>
                    <p className='text-xl text-white uppercase'>
                        {new Date(results.daily.sunrise[0]).toLocaleTimeString("en-GB",{
                            hour: "numeric",
                            minute: "numeric",
                            hour12: true
                        })}
                    </p>
                </div>
            </div>
            <div className='bg-white bg-opacity-30 p-5 rounded-[5px] flex items-center justify-between mt-2'>
                <div className='flex items-center'>
                    <FaMoon className='mr-2 text-xl text-white' />
                    <p className='text-xl text-white'>
                        Sunset
                    </p>
                </div>
                <div>
                    <p className='text-xl text-white uppercase'>
                        {new Date(results.daily.sunset[0]).toLocaleTimeString("en-GB",{
                            hour: "numeric",
                            minute: "numeric",
                            hour12: true
                        })}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default InformationPanel
import { getClient } from '@/apolo-client'
import CallOutCards from '@/app/components/CallOutCards';
import HumidityChart from '@/app/components/HumidityChart';
import InformationPanel from '@/app/components/InformationPanel';
import RainChart from '@/app/components/RainChart';
import StatCard from '@/app/components/StatCard';
import TempChart from '@/app/components/TempChart';
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries"

type Props = {
    params: {
        city: string;
        lat: string;
        long: string;
    }
}

async function WeatherPage({ params: { city, lat, long } }: Props) {

    const client = getClient();

    const { data } = await client.query({
        query: fetchWeatherQuery,
        variables: {
            current_weather: "true",
            longitude: long,
            latitude: lat,
            timezone: "GMT",
        }
    })

    const results: Root = data.myQuery;

    console.log(results)
    return (
        <div className='flex flex-col lg:flex-row min-h-screen'>
            <InformationPanel
                city={city}
                lat={lat}
                long={long}
                results={results}
            />
            <div className='p-5 flex-1'>
                <div className='pb-5'>
                    <h2 className='text-2xl font-bold text-black'>
                        Todays Overview
                    </h2>
                    <p className='text-sm text-copy'>
                        Last Updated at: {""}
                        {new Date(results.current_weather.time).toLocaleString()}({results.timezone})
                    </p>
                </div>

                <div>
                    <CallOutCards message='There will be Chat-gpt Content' />
                </div>

                <div className='grid grid-cols-1 xl:grid-cols-2 gap-5 my-5'>
                    <StatCard
                        title='Maximum Temperature'
                        metric={`${results.daily.temperature_2m_max[0].toFixed(1)}°`}
                        color='yellow'
                    />
                    <StatCard
                        title='Maximum Temperature'
                        metric={`${results.daily.temperature_2m_min[0].toFixed(1)}°`}
                        color='green'
                    />
                    <div>
                        <StatCard
                            title='UV Index'
                            metric={results.daily.uv_index_max[0].toFixed(1)}
                            color='rose'
                        />

                        {
                            Number(results.daily.uv_index_max[0].toFixed(1)) > 5 && (
                                <CallOutCards
                                    message='This UV is high today, be sure to wear SPF!'
                                    warning
                                />
                            )
                        }
                    </div>
                    <div className='flex space-x-3'>
                        <StatCard
                            title='Wind Direction'
                            metric={`${results.current_weather.windspeed.toFixed(1)}m/s`}
                            color='cyan'
                        />
                        <StatCard
                            title='Wind Direction'
                            metric={`${results.current_weather.winddirection.toFixed(1)}°`}
                            color='violet'
                        />
                    </div>
                </div>

                {/* Charts */}

                <div>
                    <TempChart results={results} />
                    <RainChart results={results}/>
                    <HumidityChart results={results}/>
                </div>

            </div>
        </div>
    )
}

export default WeatherPage
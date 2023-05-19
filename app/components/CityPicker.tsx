'use client'


import { Country, City } from 'country-state-city'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Select from 'react-select'
import { FaGlobe } from "react-icons/fa";


type option = {
    value: {
        latitude: string;
        longitude: string;
        isoCode: string;
    },
    label: string;
} | null

type cityOption = {
    value: {
        latitude: string;
        longitude: string;
        isoCode: string;
        name: string;
        stateCode: string;
    },
    label: string;
} | null

const options = Country.getAllCountries().map(country => ({
    value: {
        latitude: country.latitude,
        longitude: country.longitude,
        isoCode: country.isoCode,
    },
    label: country.name
}))

const CityPicker = () => {
    const [selectedCountry, setSelectedCountry] = useState<option>(null);
    const [selectedCity, setSelectedCity] = useState<cityOption>(null);
    const router = useRouter()

    const handleSelectedCountry = (option: option) => {
        setSelectedCountry(option)
        setSelectedCity(null)
    }
    const handleSelectedCity = (option: cityOption) => {
        setSelectedCity(option)
        router.push(`/location/${option?.value.name}/${option?.value.latitude}/${option?.value.longitude}`)
    }

    return (
        <div>
            <div>
                <div className='my-2 flex items-center'>
                    <FaGlobe className='text-white mr-2' />
                    <label htmlFor='country' className="text-1xl text-white">
                        Choose the Country
                    </label>
                </div>
                <Select
                    value={selectedCountry}
                    onChange={handleSelectedCountry}
                    options={options} />
            </div>


            {selectedCountry && (
                <div>
                    <div className='my-2 flex items-center'>
                        <FaGlobe className='text-white mr-2' />
                        <label htmlFor='country' className="text-1xl text-white">
                            Choose the City
                        </label>
                    </div>
                    <Select
                        value={selectedCity}
                        onChange={handleSelectedCity}
                        options={City.getCitiesOfCountry(selectedCountry.value.isoCode)?.map((state) => ({
                            value: {
                                latitude: state.latitude,
                                longitude: state.longitude,
                                countryCode: state.countryCode,
                                name: state.name,
                                stateCode: state.stateCode,
                            },
                            label: state.name,
                        }))} />
                </div>
            )}
        </div>
    );
}

export default CityPicker

"use client"

import { Card, Title, AreaChart } from "@tremor/react"

type Props = {
    results: Root
}


const HumidityChart = ({ results }: Props) => {
    const hourly = results?.hourly.time.map((time) => {
        new Date(time)
            .toLocaleString("en-US", {
                hour: "numeric",
                hour12: false
            })
    }).slice(0, 24)

    const data = hourly.map((hour, i) => ({
        time: Number(hour),
        "Humidity (%)": results.hourly.relativehumidity_2m[i],
    }))

    const dataFormatter = (number: number) => `${number} %`

    return (
        <Card className="mt-5">
            <Title>
                Humidity Levels
            </Title>
            <AreaChart
                className="mt-6"
                data={data}
                showLegend
                index="time"
                categories={["Humidity (%)"]}
                colors={["teal"]}
                minValue={0}
                maxValue={100}
                valueFormatter={dataFormatter}
            />
        </Card>
    )
}

export default HumidityChart
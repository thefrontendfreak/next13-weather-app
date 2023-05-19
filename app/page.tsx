"use client"
import { Card, Subtitle, Text, Divider } from '@tremor/react'
import CityPicker from './components/CityPicker'

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#cdd5ff] flex-col items-center justify-center p-10">
      <Card className='max-w-2xl text-center'>
        <Text className='text-5xl font-bold mb-3 text-black'>
          Weather AI
        </Text>
        <Subtitle className='text-copy'>
          Powered by Open AI, Next.js 13.4,Tailwind CSS, Tremer 2.0 ++
        </Subtitle>
        <Divider className='my-5'></Divider>
        <Card className='bg-blue'>
          {/* City picker */}
          <CityPicker/>
        </Card>
      </Card>
    </div>
  )
}

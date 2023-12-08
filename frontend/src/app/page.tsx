"use client"
import './globals.css'
import React from 'react';
import { NylasProvider } from '@nylas/nylas-react';
import Link from 'next/link';

const SERVER_URI = process.env.NEXT_PUBLIC_SERVER_URI || 'http://localhost:9000';

export default function Home() {
  return (
    <React.StrictMode>
      <NylasProvider serverBaseUrl={SERVER_URI}>
        
    <main className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className='text-4xl font-semibold'>Welcome to Event-Planner App</h1>
        <h4 className='text-2xl mt-4'>More Productivity, More Free time, More Fun in your Life</h4>
      </div>
      <Link className='bg-slate-600 text-white px-5 py-2 rounded-xl mt-7' href={"/calendar"}>Start Now</Link>
    </main>
    </NylasProvider>
    </React.StrictMode>
  )
}

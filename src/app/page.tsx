'use client'

import HomeBackground from "@/components/HomeBackground"
import { LoginForm } from "@/features/auth/components/LoginForm"

export default function Home() {
  return (
    <div className="relative w-screen h-screen flex">
      <div
        className="
          absolute inset-0
          bg-white/20 backdrop-blur-md
          md:w-1/2 md:flex md:relative
          md:bg-white/20 md:backdrop-blur-md
          -z-10
          flex justify-center items-center
        "
      >
        <HomeBackground
          color={[0.5, 0.6, 0.8]}
          mouseReact={false}
          amplitude={0.1}
          speed={0.5}
        />

        <div className="hidden md:flex md:flex-col absolute inset-0 justify-center items-center text-white font-bold z-10">
          <p className='text-6xl'>TASKLY</p>
          <p className='font-fira'>Your ultimate task manager</p>
        </div>
      </div>

      <div className="w-full md:w-1/2 h-full flex justify-center items-center md:bg-white relative z-20">
        <LoginForm />
      </div>
    </div>
  )
}

'use client'

import Iridescence from "@/components/Home/Iridescence";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useLoginWithGoogle } from "@/hooks/useLogin";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";

export default function Home() {
  const router = useRouter()
  const { login: loginWithGoogle, loading } = useLoginWithGoogle()

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <Iridescence
        color={[0.5, 0.6, 0.8]}
        mouseReact={false}
        amplitude={0.1}
        speed={0.5}
      />
      <div className="absolute w-screen h-screen flex flex-col justify-center items-center rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80">
        <p className="text-4xl font-bold text-white">
          TASKLY
        </p>
        <p className="text-xl font-bold text-white font-fira">
          Your ultimate task and habit manager
        </p>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 mt-8">
          <Button onClick={() => router.push('/login')}> Login</Button>
          <Button onClick={() => router.push('/register')}>Create an Account</Button>
        </div>

        <div className="flex items-center gap-2 my-3.5 w-full max-w-xs">
          <Separator className="flex-1 bg-white/40 h-px" />
          <span className="text-sm text-white/70">or</span>
          <Separator className="flex-1 bg-white/40 h-px" />
        </div>

        <Button type="submit" onClick={loginWithGoogle} >
          <FaGoogle />
          Continue with Gmail
        </Button>
      </div>
    </div>
  );
}

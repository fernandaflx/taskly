import HomeBackground from "@/components/HomeBackground";
import { cn } from "@/lib/utils";

export default function ForgotPassword() {
  return (
    <div className="relative w-screen h-screen flex">
      <HomeBackground
        color={[0.5, 0.6, 0.8]}
        mouseReact={false}
        amplitude={0.1}
        speed={0.5}
        className="absolute inset-0 -z-10"
      />
      <div className="relative z-10 flex justify-center items-center max-w-sm w-full mx-auto">
        <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">

          teste
        </div>
      </div>
    </div>
  )
}
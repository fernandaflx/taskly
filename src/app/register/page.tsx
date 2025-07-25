import HomeBackground from "@/components/HomeBackground";
import { RegisterForm } from "@/features/auth/components/Register";


export default function Register() {
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
        <RegisterForm />
      </div>
    </div>
  )
}

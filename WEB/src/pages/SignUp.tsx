import { useState } from "react"
import { z, ZodError } from "zod"
import { useNavigate } from "react-router"

import { api } from "../services/api"

import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { AxiosError } from "axios"

const signUpSchema = z
.object({
  name: z.string().trim().min(1, { message: "Name required" }),
  email: z.string().email({ message: "E-mail not valid "}),
  password: z.string().min(6, { message: "Password must be at least 6 characters long"}),
  passwordConfirm: z.string({ message: "Confirm password"})
})
.refine((data) => data.password === data.passwordConfirm, { 
  message: "Passwords do not match", 
  path: ["passwordConfirm"]
})


export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  async function OnSubmit(e: React.FormEvent){
    e.preventDefault()

    try {
      setIsLoading(true)

      const data = signUpSchema.parse({
        name,
        email,
        password,
        passwordConfirm,
      })

      await api.post("/users", data)

      if (confirm ("You've successfully registered. Proceed to login?")) {
        navigate("/")
      }
    } catch (error) {
      console.log(error)
      if (error instanceof ZodError) {
        return alert(error.issues[0].message)
      }

      if (error instanceof AxiosError) {
        return alert(error.response?.data.message)
      }

      alert("Registration failed")
    } finally {
      setIsLoading(false)
    }
  }

  return ( 
    <form onSubmit={OnSubmit} className="w-full flex flex-col gap-4">
      <Input
        required
        legend="Name"
        placeholder="Your name"
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        required
        legend="E-mail"
        type="email"
        placeholder="yours@email.com"
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        required
        legend="Password"
        type="password"
        placeholder="123456"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Input
        required
        legend="Confirm password"
        type="password"
        placeholder="123456"
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />

      <Button type="submit" isLoading={isLoading}>SignUp</Button>

    <a 
    href="/" className="text-sm font-semibold text-gray-100 mt-10 mb-a text-center hover:text-green-800 transition ease-linear">
      Already have an Account
    </a>
    </form>
  )
}
import { useState } from "react"
import { supabase } from "../utils/Supabase"

function Login() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()

    setLoading(true)
    const { error } = await supabase.auth.signInWithOtp({ email })

    if (error) {
      alert(error.error_description || error.message)
    } else {
      alert('Check your email for the login link!')
    }
    setLoading(false)
  }

  const handleSignInWithGitHub = async (event) => {
    
  }

  return (
    <div className="flex items-center justify-center h-screen">
    <div class="w-full max-w-lg">
    <h1 className="text-3xl font-semibold text-center text-white">
                  Sign in to your account
                </h1>
        
                <div className="flex flex-col p-6">
                  <button
                    className="text-lg text-white font-semibold bg-gray-900 py-2 px-4 rounded-md focus:outline-none focus:ring-2"
                    onClick={handleSignInWithGitHub}
                  >
                    Sign In with GitHub
                  </button>
        
                  <hr className="bg-gray-600 border-0 h-px my-8" />
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Email
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
        <p class="text-red-500 text-xs italic">Please choose a password.</p>
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Sign In
        </button>
        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
          Forgot Password?
        </a>
      </div>
    </form>
    </div>
  </div>
  </div>
  )
}

export default Login;
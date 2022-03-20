import React from 'react'
import { signIn } from 'next-auth/react'
import Image from 'next/image'

const Login = ({ providers }) => {
  return (
    <div className="flex flex-col items-center space-y-20 pt-48">
      <Image
        src="https://rb.gy/ogau5a"
        width={120}
        height={120}
        objectFit="contain"
      />
      <div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className="group relative inline-block overflow-hidden rounded bg-blue-50 px-5 py-2.5 font-medium text-purple-600"
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
            >
              <span className="absolute top-0 left-0 mb-0 flex h-0 w-full translate-y-0 transform bg-purple-600 opacity-90 transition-all duration-200 ease-out group-hover:h-full"></span>
              <span className="relative group-hover:text-white">
                Sign in with {provider.name}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Login

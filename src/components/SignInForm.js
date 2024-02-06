import React from 'react'
const SignInForm = () => {
  const handleSignInClick = () => {
    window.location.href = '/home';
  }
  return (
    <div class="w-[440px] h-[347.99px] mt-[380px] ml-[90px] bg-white rounded-2xl">
        <form className='flex flex-col gap-y-6'>
            <div class="absolute w-[105.38px] h-[20.86px] left-[846.11px] top-[431.82px] font-lato font-normal text-base text-black">
              Email address
            </div>
            <input type='text' className='absolute w-[356.77px] h-[43.91px] left-[846.11px] top-[463.65px] bg-gray-200 p-2 rounded-lg'></input>

            <div class="absolute w-[74.65px] h-[20.86px] left-[846.11px] top-[529.52px] font-lato font-normal text-base text-black">
              Password
            </div> 
            <input
              type='password'
              id="password"
              name="password"
              className="absolute w-[356.77px] h-[43.91px] left-[846.11px] top-[563.65px] bg-gray-200 p-2 rounded-lg"
            />

            <a href="/" class="absolute w-[136.12px] h-[20.86px] left-[847.21px] top-[620.22px] font-lato font-normal text-base text-blue-500">
              Forgot password?
            </a>
              <button onClick={handleSignInClick} class="absolute w-[356.77px] h-[43.91px] left-[846.11px] top-[660.03px] bg-primary rounded-lg flex items-center justify-center">
                <span class="font-montserrat font-bold text-white text-base">
                    Sign In
                </span>
            </button>
        </form>
    </div>
  )
}

export default SignInForm
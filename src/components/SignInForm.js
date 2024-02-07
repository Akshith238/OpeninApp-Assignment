import React from 'react'
const SignInForm = () => {
  
  return (
    <div class="w-[328px] h-[310.99px] top-[59.93px] mt-[180px] ml-[20px] lg:w-[440px] lg:h-[347.99px] lg:mt-[398.88px] lg:ml-[90px] bg-white rounded-2xl">
        <form className='flex flex-col gap-y-6'>
            <div class="absolute w-[111.61] h-[19px] top-[282.87px] left-[45.56px] lg:w-[105.38px] lg:h-[20.86px] lg:left-[846.11px] lg:top-[431.82px] font-lato font-normal text-base text-black">
              Email address
            </div>
            <input type='text' className='absolute w-[276.88px] h-[43.91px] top-[320px] left-[45.56px] lg:w-[356.77px] lg:h-[43.91px] lg:left-[846.11px] lg:top-[463.65px] bg-gray-200 p-2 rounded-lg'></input>

            <div class="absolute w-[111.61] h-[19px] top-[370.87px] left-[45.56px] lg:w-[74.65px] lg:h-[20.86px] lg:left-[846.11px] lg:top-[529.52px] font-lato font-normal text-base text-black">
              Password
            </div> 
            <input
              type='password'
              id="password"
              name="password"
              className="absolute w-[276.88px] h-[43.91px] left-[45.56px] top-[400.87px] lg:w-[356.77px] lg:h-[43.91px] lg:left-[846.11px] lg:top-[563.65px] bg-gray-200 p-2 rounded-lg"
            />

            <a href="/" class="absolute left-[45.56px] top-[460px] lg:w-[136.12px] lg:h-[20.86px] lg:left-[847.21px] lg:top-[620.22px] font-lato font-normal text-base text-blue-500">
              Forgot password?
            </a>
              <button class="absolute w-[276.88px] h-[43.91px] top-[501.08px] left-[45.56px] lg:w-[356.77px] lg:h-[43.91px] lg:left-[846.11px] lg:top-[660.03px] bg-primary rounded-lg flex items-center justify-center">
                <span class="font-montserrat font-bold text-white text-base">
                    Sign In
                </span>
            </button>
        </form>
    </div>
  )
}

export default SignInForm
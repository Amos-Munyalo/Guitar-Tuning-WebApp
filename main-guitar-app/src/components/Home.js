import React from 'react'

function Home() {
  const background = `bg-[url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fphoto_48742911_happy-man-jumping-with-guitar-in-sunset-time.html%3Fvti%3Dn4b8468scqew0bsn98-1-72%26is_plus%3D1&psig=AOvVaw0utH_u_khGDA5gd8m-O90s&ust=1696614486045000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPCorK-_34EDFQAAAAAdAAAAABAZ")]`;
  const features = [
    {
      title: 'Easy to use',
      description: 'AjayTuner is designed to be easy to use, even for beginners. Simply open the app, select your instrument, and start tuning!',
    },
    {
      title: 'Accurate tuning',
      description: 'AjayTuner uses advanced algorithms to detect the frequency of the string you are playing and tells you whether the string is in tune or not.',
    },
    {
      title: 'Customizable settings',
      description: 'AjayTuner allows you to customize the tuning settings to match your instrument and playing style. You can also save your settings for future use.',
    },
  ];
  const myImage = `https://media.istockphoto.com/id/510638249/photo/tuning-a-guitar.jpg?s=612x612&w=0&k=20&c=qNzNrOWItwYGEd_6QppzQZ2gQ99LIQfs0wa6VW5fxPA=`;
  return (

    <>
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" class="flex items-center">
            {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" /> */}
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">AjayTuner</span>
          </a>
          <div class="flex md:order-2">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
            <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
              </li>
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog</a>
              </li>
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Shop</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class={`${background} bg-cover bg-center z-50`}>
          <video autoplay muted loop>
            <source src="Video by Ibrahim Bennett from Pexels: https://www.pexels.com/video/kuala-lumpur-night-to-day-timelapse-18522098/" type="video/mp4"></source>
              Your browser does not support the video tag.
          </video>
          <div class="max-w-screen-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div class="text-center">
              <h2 class="text-base font-semibold text-blue-600 tracking-wide uppercase">AjayTuner</h2>
              <p class="mt-1 text-4xl font-extrabold text-black-900 dark:text-black sm:text-5xl sm:tracking-tight lg:text-6xl">Tune your guitar</p>
              <p class="max-w-xl mt-5 mx-auto text-xl text-gray-900 dark:text-black-400">AjayTuner is a web app that helps you tune your guitar. It uses the microphone of your device to detect the frequency of the string you are playing and tells you whether the string is in tune or not.</p>
            </div>
          </div>
        </div>

      <section class="bg-white dark:bg-gray-900">
        <div class="bg-white dark:bg-gray-900">
          <div class="max-w-screen-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                  Features
                </h2>
                <div class="mt-8">
                  {features.map((feature) => (
                    <div key={feature.title} class="mb-4">
                      <h3 class="text-xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                      <p class="mt-2 text-gray-500 dark:text-gray-400">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div class="md:ml-8">
                <img src={myImage} alt="Tuner" class="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>

  )
}

export default Home

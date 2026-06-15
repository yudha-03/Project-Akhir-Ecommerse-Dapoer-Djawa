import React from 'react';

export default function loginpage() {
  return (
    <section className="bg-gray-50 text-gray-800 work-sans leading-normal text-base tracking-normal min-h-screen flex flex-col">
      <style>{`
        @import url('https://fonts.googleapis.com/css?family=Work+Sans:200,400,600&display=swap');

        html {
            scroll-behavior: smooth;
        }

        .work-sans {
            font-family: 'Work Sans', sans-serif;
        }
        
        #menu-toggle:checked + #menu {
            display: block;
        }
      `}</style>

      {/* --- HEADER --- */}
      <nav
        id="header"
        className="fixed w-full z-50 top-0 py-3 bg-white/90 backdrop-blur-md shadow-sm transition-all duration-300"
      >
        <div className="relative w-full container mx-auto flex flex-wrap items-center justify-between px-6">
          <label
            htmlFor="menu-toggle"
            className="cursor-pointer md:hidden block hover:text-black z-20"
          >
            <svg
              className="fill-current text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />

          <div className="hidden md:flex flex-1 items-center">
            <nav>
              <ul className="flex items-center gap-6 text-base text-gray-700">
                <li>
                  <a
                    className="font-semibold hover:text-black transition duration-200"
                    href="#shop"
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a
                    className="font-semibold hover:text-black transition duration-200"
                    href="#about"
                  >
                    About
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex-1 flex justify-center">
            <a href="#" className="flex items-center">
              <img src="logo.png" alt="Logo" className="h-12 w-auto mr-3" />
              <span className="font-bold text-2xl text-gray-900">
                DapoerDjawa
              </span>
            </a>
          </div>

          <div className="flex-1 flex justify-end items-center gap-4">
            <a
              className="inline-block no-underline hover:text-black transition duration-200"
              href="#"
            >
              <svg
                className="fill-current text-gray-600 hover:text-gray-900"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <circle fill="none" cx="12" cy="7" r="3" />
                <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
              </svg>
            </a>
            <a
              className="inline-block no-underline hover:text-black transition duration-200"
              href="#"
            >
              <div className="relative">
                <svg
                  className="fill-current text-gray-600 hover:text-gray-900"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7zM17.341,14h-6.697L8.371,9h11.112L17.341,14z" />
                  <circle cx="10.5" cy="18.5" r="1.5" />
                  <circle cx="17.5" cy="18.5" r="1.5" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </nav>

      {/* --- MAIN LOGIN CONTENT --- */}
      <main className="flex-1 flex items-center justify-center p-4 mt-24 mb-10">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          
          {/* Headings */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">Login To Your Account</h1>
            <p className="text-sm text-gray-500">
              Enter your email below to login to your account
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-1">
                Email
              </label>
              <input 
                id="email"
                type="email" 
                placeholder="m@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="password" className="block text-sm font-semibold">
                  Password
                </label>
                <a href="#" className="text-sm text-gray-500 hover:text-black hover:underline transition-colors">
                  Forgot your password?
                </a>
              </div>
              <input 
                id="password"
                type="password" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-black text-white font-medium py-2.5 rounded-lg hover:bg-gray-800 transition-colors mt-2"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-white text-gray-500">Or</span>
            </div>
          </div>

          {/* Alternative Login */}
          <button 
            type="button" 
            className="w-full border border-gray-300 text-gray-700 font-medium py-2.5 rounded-lg hover:bg-gray-50 transition-colors flex justify-center items-center gap-2"
          >
            {/* Google SVG Icon */}
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Sign In With Google
          </button>

          {/* Sign Up Link */}
          <div className="mt-8 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="#" className="font-semibold text-black hover:underline">
              Sign Up
            </a>
          </div>

        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-gray-50 border-t border-gray-200 py-10 scroll-mt-20 mt-auto">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-600 text-sm text-center md:text-left mb-4 md:mb-0">
            &copy; 2026 DapoerDjawa. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/_dapoer_djawa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="instagram.png"
                alt="Instagram"
                className="w-8 h-8 hover:scale-110 transition"
              />
            </a>
            <a
              href="https://tiktok.com/@dapeordjawa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="tiktok.png"
                alt="tiktok"
                className="w-8 h-8 hover:scale-110 transition"
              />
            </a>
            <a
              href="https://wa.me/62895383270632"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="wa.png"
                alt="wa"
                className="w-8 h-8 hover:scale-110 transition"
              />
            </a>
          </div>
        </div>
      </footer>
      
    </section>
  );
}
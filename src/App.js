
import './App.css';


function App() {
  return (
    <nav class="font-sans text-lg font-light">
      <div class="flex items-center justify-between bg-gray-500 p-1">
        <div class="block w-56">
          <button class="flex-none items-center px-0 py-0 text-teal-lighter border-teal-light hover:text-white hover:border-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
          </button>
        </div>
        <div class="block lg:flex items-center justify-center rounded shadow-lg lg:w-auto bg-gray-100 p-2">
          <div class="text-xl lg:flex-grow">
            <a href="#patient-info" class="block mt-8 lg:inline-block lg:mt-0 text-xl font-semibold text-gray-900 hover:text-teal-200">
              Jane Doe, Age 40
            </a>
          </div>
        </div>
          <div class="w-full block flex-none lg:flex lg:justify-end text-center shadow-lg rounded lg:w-56 bg-gray-100 p-2">
            <div class="text-xs lg:flex-grow justify-items-center grid grid-cols-2 content-center">
              <div>
                <a href="#incident-number" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-teal-200">
                  Incident #
                </a>
              </div>
              <div>
                <a href="#dispatch-location" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-teal-200">
                  Dispatch Location
                </a>
              </div>
              <div>
                <a href="#ems-vehicle-number" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-teal-200">
                  EMS Vehicle #
                </a>
              </div>
              <div>
                <a href="#ems-response-#" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-teal-200">
                  EMS Response #
                </a>
              </div>
            </div>
        </div>
      </div>  
      <div>
        <div class="flex items-center justify-center space-x-4 text-xs bg-gray-300 p-1">
          <div class="flex justify-items-center flex-col text-center">
            <button class="flex-none items-center px-2 py-1 border rounded shadow-md text-teal-lighter border-black hover:text-white hover:border-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            Vitals
          </div>
          <div class="flex justify-items-center flex-col text-center">
            <div><button class="flex-none items-center px-2 py-1 border rounded shadow-md text-teal-lighter border-black hover:text-white hover:border-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>
            </div>
            Narration
          </div>
          <div class="flex justify-items-center flex-col text-center">
            <button class="flex-none items-center px-2 py-1 border rounded shadow-md text-teal-lighter border-black hover:text-white hover:border-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            </button>
            Upload
          </div>
          </div>
        </div>
    </nav>
    
  );
}

export default App;


import './App.css';


function App() {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div class="block">
        <button class="flex-none items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
        </button>
      </div>
      <div class="w-10 block lg:flex lg:items-center lg:w-auto bg-gray-100 pl-8 pr-8 pb-8">
        <div class="text-sm lg:flex-grow">
          <a href="#responsive-header" class="block mt-8 lg:inline-block lg:mt-0 text-gray-900 hover:text-teal-200">
            Jane Doe, Age 40
          </a>
        </div>
      </div>
        <div class="w-full block flex-none lg:flex lg:justify-end text-center lg:w-auto bg-gray-100">
          <div class="text-sm lg:flex-grow">
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white">
              Other Stuff
            </a>
            
          </div>
      </div>
      
    </nav>
    
  );
}

export default App;

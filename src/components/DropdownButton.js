import React,{useState} from 'react';

function DropdownButton({row}) {
  const [dropdownStates, setDropdownStates] = useState({});

  const toggleDropdown = (id) => {
    setDropdownStates(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };
  return (
    <div className="relative inline-block text-left">
        <button
          type="button"
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          onClick={() => toggleDropdown(row['id'])}
        >
          Select Tags
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 9.75L12.5 14.25L8 9.75" stroke="#999CA0" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

        </button>

        {dropdownStates[row['id']] && (
          <div className="absolute right-0 mt-2 w-56 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {row['select tags'].map((tag, index) => (
                <button
                  key={index}
                  onClick={''}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
  );
}

export default DropdownButton;

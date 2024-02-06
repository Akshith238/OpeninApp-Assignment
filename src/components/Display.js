import React,{useState} from 'react'

const Display = ({data}) => {
    const [dropdownStates, setDropdownStates] = useState({});
    const [selectedValues, setSelectedValues] = useState({});
    const [alert,setAlert] = useState('')

    const toggleDropdown = (id) => {
      setDropdownStates(prevState => ({
        ...prevState,
        [id]: !prevState[id]
      }));
    };
    const handleSelectClick = (selectedValue, id) => {
        // Check if the selectedValues object has an entry for the given id
        if (selectedValues.hasOwnProperty(id)) {
            // If the id exists, get the current selected tags for that id
            const currentSelectedTags = selectedValues[id];
            // Check if the selectedValue already exists in the current tags
            if (!currentSelectedTags.includes(selectedValue)) {
                // If it doesn't exist, and the tag limit is not exceeded, update the selected tags for the id
                if (currentSelectedTags.length < 3) {
                    const updatedSelectedTags = [...currentSelectedTags, selectedValue];
                    setSelectedValues(prevSelectedValues => ({ ...prevSelectedValues, [id]: updatedSelectedTags }));
                } else {
                    // If the tag limit is exceeded, show an alert
                    setAlert('Tag limit exceeded for this row');
                    setTimeout(() => setAlert(''), 3000);
                }
            } else {
                // If the value already exists, you can show an alert or handle it accordingly
                console.log('Value already exists');
            }
        } else {
            // If the id doesn't exist in selectedValues, initialize it with the selectedValue
            setSelectedValues(prevSelectedValues => ({ ...prevSelectedValues, [id]: [selectedValue] }));
        }
    };
    const handleTagRemove = (tagToRemove, rowIndex) => {
        // Filter out the tag to remove from the selected tags for the corresponding row
        const updatedSelectedTags = selectedValues[rowIndex].filter(tag => tag !== tagToRemove);
        
        // Update the state with the updated selected tags for the row
        setSelectedValues(prevSelectedValues => ({
            ...prevSelectedValues,
            [rowIndex]: updatedSelectedTags
        }));
    };
  return (
    <div className='flex font-figtree flex-col justify-start gap-4 p-8 pl-16 m-9'>
        {alert && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-lg">
                {alert}
            </div>
        )}
        <div className='text-2xl font-semibold leading-8 text-black'>
            Uploads
        </div>
        <div className='flex w-[1065px] h-[419px] overflow-y-auto flex-col items-center pr-3 bg-lightgoku rounded-[8px]'> 
            <div className="w-[1034px] p-2">
                <div className="flex flex-col gap-1">
                    <div className="flex text-sm font-semibold">
                        <div className="px-4 py-2 w-1/12 text-left">Sl.No</div>
                        <div className="px-4 py-2 w-1/4 text-left">Links</div>
                        <div className="px-4 py-2 w-1/6 text-left">Prefix</div>
                        <div className="px-4 py-2 w-1/2 text-left">Add Tags</div>
                        <div className="px-4 py-2 w-1/2 text-left">Selected Tags</div>
                    </div>
                    {data.map((row,index)=>{
                        return (
                            <div key={index} className="bg-lightgohan w-[1034px] h-[58px] text-sm font-normal rounded-lg flex items-center my-2">
                                <div className="px-4 py-2 w-1/12 text-left">{row.id}</div>
                                <div className="px-4 py-2 w-1/4 text-left text-blue-500 underline"><a href="{row.links}">{row.links}</a></div>
                                <div className="px-4 py-2 w-1/6 text-left">{row.prefix}</div>
                                <div className="px-4 py-2 w-1/2 text-left">
                                    <div className="relative inline-block">
                                        <button
                                            type="button"
                                            className="flex gap-1 border w-[150px] h-[32px] border-solid rounded-lg p-3 justify-center items-center"
                                            onClick={() => toggleDropdown(row.id)}
                                        >
                                            Select Tags
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17 9.75L12.5 14.25L8 9.75" stroke="#999CA0" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </button>

                                        {dropdownStates[row.id] && (
                                            <div className="absolute shadow-lg w-[150px] h-[205px] gap-4 p-2 rounded-xl overflow-auto bg-white z-50">
                                                <div className=" w-[134px] h-[436px] flex flex-col items-center p-2">
                                                    {row['select tags'].split(',').map((tag, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() => handleSelectClick(tag, row.id-1)}
                                                            className="block w-[134px] h-[40px] p-2 rounded-lg text-sm text-gray-700 hover:bg-lightgoku hover:text-gray-900"
                                                        >
                                                            {tag}
                                                        </button>   
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="px-4 py-2 w-3/5 text-left">
                                    <div className='flex items-center justify-center gap-2'>
                                        {selectedValues[index] && selectedValues[index].map((tagValue, tagIndex) => (
                                            <div key={tagIndex} class="flex items-center justify-center font-semibold w-[100px] h-[30px] px-4 py-2 gap-2 rounded-lg text-white bg-primary">
                                                <div className='text-[10px]'>{tagValue}</div>
                                                <button onClick={() => handleTagRemove(tagValue,index)}>
                                                    <svg class="w-2 h-2" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 1L4 4M4 4L1 7M4 4L7 7M4 4L7 1" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        
                                        ))}
                                        </div>
                                    </div>
                               </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Display
import { useRef } from 'react'

const UseRef = () => {

    const inputRef = useRef(null);

    const focusInput = () => {
    inputRef.current.focus()
  }

  const clearInput = () => {
    inputRef.current.value = "";
    inputRef.current.focus()
  };

  return (
    <div className='flex flex-col w-100 gap-5 bg-gray-200 m-4 p-4 rounded justify-center items-center'>
      <input className='border rounded-md p-1' ref={inputRef} type="text" />
      <button className='bg-blue-900 text-white w-30 p-1 rounded-full hover:bg-blue-950 transition-all duration-200 active:scale-95 mx-auto cursor-pointer shadow-lg' onClick={focusInput}>Focus input</button>
      <button className='bg-blue-900 text-white w-30 p-1 rounded-full hover:bg-blue-950 transition-all active:scale-95 mx-auto cursor-pointer shadow-2xl' onClick={clearInput}>Clear</button>
    </div>
  )
}

export default UseRef;

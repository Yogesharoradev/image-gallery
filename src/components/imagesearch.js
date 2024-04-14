import { useState } from "react";

const ImageSearch = ({searchText})=> {

    const [text , setText] = useState('')

const onSubmit = (e)=>{
    e.preventDefault()
    searchText(text)
}
    return(
        <div className="flex rounded justify-center align-middle my-10 mx-auto p-5">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b border-b-2 py-2 border-teal-500 ">
        <input onChange={e=>setText(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 *:leading-tight
        focus:outline-none" placeholder="search image term"/>
        <button type="submit" className="flex-shrink-0 border-teal-500
        hover:border-teal-700 text-sm text-white rounded px-1 py-2 bg-teal-500 hover:bg-teal-700 "> Search here</button>
      </div>
      </form>
      </div>
    )
}

export default ImageSearch;
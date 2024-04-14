import { useEffect, useState } from 'react';
import './App.css';
import ImageCard from './components/imagecard';
import ImageSearch from './components/imagesearch';

function App() {

  const [images , setImages] = useState([]);
  const [loading , setLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}_type=photo
    `)
    .then(res => res.json())
    .then(data=> {setImages(data.hits);
      setLoading(false);}
    )
    .catch(err=> console.log(err));
  },[term])

  return (

    <div className='container mx-auto'>

      <ImageSearch searchText = {(text) => setTerm(text) }/>


  { loading ? <h1>Loading..</h1> : 
  <div className='grid grid-cols-3 gap-4'>
  {
    images.map ((image , index) =>(
      <ImageCard key={index} image={image}/> 
    ))
   
  }
   </div>
}


    </div>
  );
}

export default App;

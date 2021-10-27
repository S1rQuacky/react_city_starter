import {useState} from 'react';
import './index.css';
import imagesArr from './imgData';

// IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr

export default function App() {
  // USE useState TO CREATE  [bigImage, setBigImage] 
  // AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY
  const firstImg = imagesArr[0].img 
  const [images, setImages] = useState(firstImg)
  const [border, setBorder] = useState(0)
  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
  // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL
  const handleClick = (clicked, noborder) => {
    setImages(clicked);
    setBorder(noborder) 
   };

  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key INCLUDING AN onClick EVENT THAT CALLS THE HANDLE EVENT FUNCTION AND PASSES IT THE IMG URL
  const img = imagesArr.map((pic, index) => {
    return (
      <img className={(index === border) ? "greenthumb" : "thumb"} onClick={() => handleClick(pic.img, index)} src={pic.img} alt={pic.city} key={index} />
    )
  }) 

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">
          {img}
        </div>
        {/* THE SRC IMAGE URL SHOULD BE SET TO THE VALUE THAT IS STORED IN bigImage */}
        <img id="bigimage" src={images} alt="bigimage" />
      </div>
    </div>
  );
}




import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [acceptCount, setAcceptCount]=useState(0)
  const foodData=[
    {
     image:"https://m.media-amazon.com/images/I/3144jXPtX4L._AC._SR180,230.jpg",
     name:"Apple Iphone 14",
     price:"Rs. 70,000",
    },
    {
      image:'https://m.media-amazon.com/images/I/41Xe96WtZoL._AC._SR180,230.jpg',
      name:"One Plus Nord",
      price:"Rs. 19,000",
     },
     {
      image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSMH1zqk6BNke0J0AH8gRVw2LYVpUgmL_Ne8laiYYGcUT64u6N6VT6NRaz7rFLNrImGI3AfrPGC5GHwAzRB86YKkx3wajtZsKqgIQ2zsfel6QARAhMdoToiXz0&usqp=CAc",
      name:"Samsung Galaxy F54",
      price:"Rs. 31,000",
     },
     {
      image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRNWrug0knRmn0cmQ9QpIit73VwMx62_pnw3giNWe_cQOBoY1Qbhg-J2gb87tDMTGGdit4UP4pKLIgYRMAY3M-78OPS0xs7zWJQs3EpDFh9Oae6AtzEVbXm8g&usqp=CAc",
      name:"Realme Narzo N55",
      price:"Rs. 10,500",
     },
  ]
  return (
    <div>
      <div>
       <header>
        <h1>Phone Mart</h1>
        <span><img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH4AfgMBIgACEQEDEQH/xAAcAAEBAAIDAQEAAAAAAAAAAAAABwYIAQQFAgP/xAA7EAABAwMBAwgHBgcBAAAAAAAAAQIDBAURBgcSIRMXMUFRgZTSFSJVVmFxkxgyYpGhsRQjZHKSwcII/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ALiAAAAAAAAAAAAAAAAAAAAAAAAAYpUbR9H0874Zb/SI+NytciKq4VPiiAZWDHrPrbTV6rW0VrvFPUVLkVWxtVUV2OnGU4mQgAAAAAAAAAAAAAAAAcORHJhehSUVOwjTkk8j4rhcoY3Oy2NrmKjU7Mq3P5lYAGsWsdPLsw1raaq3zTzUzVZURvlxvO3XYe1cIidH7my9HUx1lLDUwOR0U0bZGOTraqZQm+36x+ktHtuETN6e2ypJlE48m7g7/le4wvR22iOw6bobVW2qaqlpGcmkrJkaitRfVTCovQmE7gNggRfn/ovd+p8S3yjn/ovd+p8S3ygWgEX5/wCi936jxLfKcfaAo/d+o8S3ygWkEW+0BR+79R4lvlH2gKP3fqPEt8oFpBMtGbXabVWoaezx2aop3zo5Ul5VHo3daq8UwnDhjvQpidAHIAAAAAAAOnd6CK6WyroKhqOiqYXxORexyYNM7lRSW6vqaKdMS00z4n/Nq4X9jdg1n29WX0ZrRa2NmIblEkqL+Nvqu/0veBNgAAAAAAAWn/zhZUkrLpe5GJuxNSmiX8S+s79N38y8GJbK7J6B0PbKZ7FbPLH/ABEyKnHff62F+SYTuMtAAAAAAAAAEy2+2T0joz0hGzMttmSTgnHcd6ru7ii9xTTqXWhhudtqqCpaiw1MTonovYqYA0pXpBklj0jUXXV7tNSVUVJVNkkiR8rVVFczPDh24M85grv7bofpvAj4LBzB3f23Q/TeOYO7+26H6bwI+e/oOyrqDV1rt27mOSdHS8M/y2+s79EVCg8wV39t0P03mabMNl0mjbrUXKuroaqd8XJRJExURiKuXLx6+CAUtrUaiNamEToPoAAAAAAAAAAfE8jIoXyyLusY1XOVepEPs/GshbU0ssEmdyVisdjsVMAak6m1S+v1vVais7XUMizcpC5q5cmEwjuPWqJlUPasetNo1/rVorPdaupqUYr+TakSLup0rxRO08XU+iL5py5y0lTQVEsSPVIqiKJXMlb1Kip1/DpKbsI0TcrfcZtQXSnkpY+RWGmimbuvfvKmXK1eKJwx8cgebu7a/wCv/wAoDqXW4bXrPQS19ynroKWFEWSVywqjcrjq+KmxadB4et7Guo9LXC0tekclRHiN69CORUcme9ANbY9qOtI5Gu9PTrurnDo41Rfmm6XXZTrh2tLNM6qjZHcKNzWVDWfdci/deidWcLw7UNcK/S19t9c6iqrRWtqEdhGJA529/aqJhe4vuxDR1bpizVdVdY3Q1dwexeRd0xsZndz8V3lUCmAAAAAAAAAAAAAAAAAADjByAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//Z'></img>
        <h3>Cart:{acceptCount}</h3></span>
       </header>
      </div>
      <div className='phone'>
  {foodData.map((phone,idx)=>(
    <FoodCourt
    key={idx}
    image={phone.image}
    name={phone.name}
    price={phone.price}
    acceptCount={acceptCount}
    setAcceptCount={setAcceptCount}
    />
  ))}
</div>
    </div>
  );
}

export default App;


function FoodCourt({image, name, price, acceptCount, setAcceptCount}){
  const [show, setShow]= useState(true)
  function handleAppcept(){
    setShow(!show)
     setAcceptCount(acceptCount+1)
  }
  function handleReject(){
    setShow(!show)
    setAcceptCount(acceptCount-1)
  }
  return(
    <div className='body'>
      <div className='flex'>
      <div className='container'>
        <div className='row'>
          <img src={image}></img>
          <h4>{name}</h4>
          <p>{price}</p>
          {
            show ? <button className='accept-btn btn'
            onClick={handleAppcept}>Addtocart</button>
            :
            <button className='remove-btn btn'
            onClick={handleReject}>Removecart</button>
          }
        </div>
      </div>
      </div>

    </div>
  )
}

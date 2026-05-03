// const Restaurant = ({resData}) => (

//     <div className="restaurant" style={{backgroundColor:"#f0f0f0"}}>
//         <img className="food_logo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
//           info?.cloudinaryImageId}/>
//         <p>{resData.info.name}</p>
//         <p>{resData.info.avgRating}⭐</p>
//         <p>{resData.info.sla.deliveryTime}🕒</p>
//     </div>
    
// )


const Restaurant = ({ resData }) => {
  const info = resData?.info; 

  return (
    <div className="restaurant" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="food_logo"
        src={
          `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData?.info?.cloudinaryImageId}
`        }
        alt={info?.name}
      />

      <p>{info?.name}</p>
      <p>{info?.avgRating} ⭐</p>
      <p>{info?.sla?.deliveryTime} 🕒 mins</p>
    </div>
  );
};

export default Restaurant;

//named export bhi hota hai ek... usme bss jo bhi export krna hai uske age likhdo export...
//abhi jo ki hu wo hai default export jisme ek hi chiz export ho skta hai..
//named export ko import krte hai:-    import {jo bhi export krna hai ek Header}..

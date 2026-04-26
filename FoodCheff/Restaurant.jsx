const Restaurant = ({resData}) => (
    <div className="restaurant" style={{backgroundColor:"#f0f0f0"}}>
        <img className="food_logo" src={resData.image}/>
        <p>{resData.name}</p>
        <p>{resData.rating}⭐</p>
        <p>{resData.deliveryTime}🕒</p>
    </div>
)

export default Restaurant;

//named export bhi hota hai ek... usme bss jo bhi export krna hai uske age likhdo export...
//abhi jo ki hu wo hai default export jisme ek hi chiz export ho skta hai..
//named export ko import krte hai:-    import {jo bhi export krna hai ek Header}..

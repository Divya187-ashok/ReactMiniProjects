
import Restaurant, {withPromotedLabel} from "./Restaurant";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "./useOnlineStatus";
 
//state variable - hooks
//2 types - useState()  and useEffect()

const Body = () => {
  const [resList, setResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRest, setFilteredRest] = useState([])
  const onlineStatus = useOnlineStatus();
  const PromotedRestr = withPromotedLabel(Restaurant);
useEffect(() => {fetchData()}, []);  //useEffect..

const fetchData = async() => {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );
  const json = await data.json();
  console.log(json);
  setResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}

 if(onlineStatus === false) {
    return <h2>Oops!! You are Offline. Please try again.</h2>
  }


//conditional rendering...
if(resList.length === 0) {
  return <Shimmer />
}
return (
  <div className="body">
        <div className="filter">
          <div className="SearchText">
            <input type="text" value={searchText} onChange={(e) => {setSearchText(e.target.value);}}/>
            <button 
              onClick={ () => {
                const filteredRes = resList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                console.log(filteredRes)
                console.log(resList);
                setFilteredRest(filteredRes);
              }}>Search
            </button>
          </div>

          <button className="filter-btn" 
            onClick={() => {
            const filteredList = resList.filter((res) => res.info.avgRating > 4);
            setFilteredRest(filteredList);
          }}>
            Filter 4⭐ above rating
          </button>
        </div>
        <div className="res-cont">
        {
            filteredRest.map((res) => (
                <Restaurant key={res.info.id} resData={res} />
            ))
        }
        </div>
    </div>
)
}

export default Body;
import Card from "./Card";
import MainStyle from "./main.module.scss";
import { data } from "../../utils/data";
import { useState, useEffect } from "react";


const Main = () => {
  const [searchInput, setSearchInput] = useState("")
  const [filteredData, setFilteredData] = useState(data)

  const handleChange = (e) => {
    setSearchInput(e.target.value.toLowerCase())  
  } 
  
  useEffect(() => {
    setFilteredData(data.filter((player) => player.name.toLowerCase().includes(searchInput)))
  }, [searchInput])


  return (
    <>
      <div className={MainStyle.formContainer}>
        <form action="">
          <input onChange={handleChange} type="text" name="" id="" placeholder="Search player..." />
        </form>
      </div>

      <div className={MainStyle.cardsContainer}>
        { searchInput === "" ? 
          data.map((player, index) => <Card {...player} key={index} />) :
          filteredData.map((player, index) => <Card {...player} key={index} />)
        }
      </div>
    </>
  );
};

export default Main;


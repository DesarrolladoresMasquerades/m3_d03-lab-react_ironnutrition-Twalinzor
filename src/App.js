import logo from './logo.svg';
import './App.css';
import foods from "./foods.json";
import { useState } from 'react';
import "./App.css";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from 'antd/lib/transfer/search';

function App() {

  const [foodData, setFoodData] = useState(foods)
  const [allFood, setFood] = useState(foods)

  function addFood(newFood) {
    setFood([...allFood, newFood])

  }

  function filterFood(stringa) {
    const filteredFoods = foodData.filter((food)=>{
      if(stringa === "") return true
      else return food.name.toLowerCase().includes(stringa.toLowerCase());
    })
    setFoodData(filteredFoods)
  }

  function deleteFood(foodToBeDeleted){
    const allFoodCopy = allFood.slice();
    delete allFoodCopy[allFoodCopy.indexOf(foodToBeDeleted)];

    setFoodData(allFoodCopy);
    setFood(allFoodCopy);
  }

  return <div className="App">
    <h1>FOOD LIST</h1>
    <AddFoodForm addFood={addFood}/>
    <h1>SEARCH FOOD</h1>
    <Search filterFood={filterFood}/>
    {allFood.map((food)=>{
      return(
        <FoodBox food={food} deleteFood={deleteFood}/>
      )
    })}
  </div>;
}
export default App;
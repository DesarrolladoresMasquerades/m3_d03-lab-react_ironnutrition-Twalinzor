import { Input } from "antd";
import { useState } from "react";

export default function Search(props){

    const [search, setSearch] = useState("")
    
    function handleSearch(event){
        const value = event.target.value;
        setSearch(value)

        props.filterFood(value);
    }

    return(
        <Input value={search} type="text" name="search-bar" onChange={handleSearch} />
    )
}
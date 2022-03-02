import { Divider, Input, Button } from "antd";
import FormItem from "antd/lib/form/FormItem";
import { useState } from "react";

export default function AddFoodForm(props) {

    const [formData, setFormData] = useState({
        name: "",
        image: "",
        calories: 0,
        servings: 0
    })

    function handleDataChange(event) {
        const key = event.target.key;
        const value = event.target.value;

        setFormData(formData=>({...formData, [key]: value}))
    };

    function handleSubmit(event) {
        event.preventDefault();
        
        props.addFood(formData)

        setFormData({
            name: "",
            image: "",
            calories: 0,
            servings: 0
        })
    };
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Divider>Add Food Entry</Divider>
      
            <label>Name</label>
            <FormItem name="field">
            <Input value={formData.name} type="text" onChange={handleDataChange} />
            </FormItem>
            
            <label>Image</label>
            <FormItem name="field">
            <Input value={formData.image} type="text" onChange={handleDataChange} />
            </FormItem>

            <label>Calories</label>
            <FormItem name="field">
            <Input value={formData.calories} type="number" onChange={handleDataChange} />
            </FormItem>

            <label>Servings</label>
            <FormItem name="field">
            <Input value={formData.servings} type="number" onChange={handleDataChange} />
            </FormItem>

            <Button htmlType="submit">Create</Button>
        </form>
    </div>
  );
}
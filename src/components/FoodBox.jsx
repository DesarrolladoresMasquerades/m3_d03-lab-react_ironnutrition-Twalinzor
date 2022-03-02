import { useState } from 'react';
import React from "react";
import { Card, Row, Col, Divider, Input, Button } from "antd";

export default function FoodBox(props) {
    return (
    <Col>
        <Card title={props.food.name} style={{ width: 230, height: 300, margin: 10 }}>
            <img src={props.food.image} height={60} alt="ñom"/>
            <p>Calories: {props.food.calories}</p>
            <p>Servings: {props.food.servings}</p>
            <p><b>Total Calories: {props.food.calories * props.food.servings} </b> kcal</p>
            <Button type="primary" onClick={()=>props.deleteFood(props.food)}> Delete </Button>
        </Card>
    </Col>
    )
}


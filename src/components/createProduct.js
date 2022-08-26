import React, {useState} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';


export default function Create() {
    const [name, setName] = useState('');
    const [calories, setCalories] = useState('');
    const [carbohydrates, setCarbohydrates] = useState('');
    const [sugars, setSugars] = useState('');
    const [protein, setProtein] = useState('');
    const [fat, setFat] = useState('');

    const postData = () => {
        const productData = {};
        productData.name = name;
        productData.calories = calories;
        productData.carbohydrates = carbohydrates;
        productData.sugars = sugars;
        productData.protein = protein;
        productData.fat = fat;

        console.log(productData);

        axios.post(`http://localhost:8080/rest/products`, productData).
            then(function (response) {
            //handle success
            console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }

    return (
        <div>
            <Form className={"create-form"}>
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='Name' onChange={(e) => setName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Calories</label>
                    <input placeholder='Calories'onChange={(e) => setCalories(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Carbohydrates</label>
                    <input placeholder='Carbohydrates'onChange={(e) => setCarbohydrates(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Sugars</label>
                    <input placeholder='Sugars'onChange={(e) => setSugars(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Protein</label>
                    <input placeholder='Protein'onChange={(e) => setProtein(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Fat</label>
                    <input placeholder='Fat'onChange={(e) => setFat(e.target.value)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}


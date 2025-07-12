import { useState } from "react";
import UserForm from "./UserForm"

function Test() {
    //return <p> {testLabel} </p>

    const [name, setName] = useState('');
    const [checked, setChecked] = useState(false);
    const [gender, setGender] = useState('male')
    const [city, setCity] = useState('');
    const [message, setMessage] = useState('');

    return <div>
        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Enter name:"/>
        <input type="checkbox" value={checked} onChange={e => setChecked(e.target.value)}/>
        <div>
            <label>
                <input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={e => setGender(e.target.value)}/>
                Male
            </label>
            <label>
                <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={e => setGender(e.target.value)}/>
                Female
            </label>
        </div>
        <select value={city} onChange={e => setCity(e.target.value)}>
            <option value="Lviv">Lviv</option>
            <option value="Kyiv">Kyiv</option>
            <option value="Odesa">Odesa</option>
        </select>
        <textarea value={message} onChange={e => setMessage(e.target.value)}/>
        <p></p>
        <p> Your name: {name} </p>
        <UserForm/>
    </div>
}

export default Test
import { useState } from "react";

function UserForm() {
    const [email, setEmail] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        alert(`Submited email: ${email}`)
    }
    return <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
        <button type="submit">Submit</button>
    </form>
}

export default UserForm;
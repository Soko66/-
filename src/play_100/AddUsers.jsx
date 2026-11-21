import { useState } from "react"

const AddUsers = ({ CreateUsers }) => {
    const [name, setName] = useState("")
    return <div className="add-users">
        Enter the user name <br />
        <input className="add-users-input" value={name} onChange={(e) => { setName(e.target.value) }} type="text" />
        <button className="btn btn-primary" onClick={() => { CreateUsers(name); setName("") }}>Add User</button>
    </div>
}
export default AddUsers

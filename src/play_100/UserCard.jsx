const UserCard = ({ user, apdateUser }) => {
    const plusOne = () => {
        const newUser = { ...user, num: user.num + 1, count: user.count + 1, disabled: true }
        apdateUser(newUser)
    }
    const minosOne = () => {
        const newUser = { ...user, num: user.num - 1, count: user.count + 1, disabled: true }
        apdateUser(newUser)
    }
    const capolTwo = () => {
        const newUser = { ...user, num: user.num * 2, count: user.count + 1, disabled: true }
        apdateUser(newUser)
    }
    const lechalecTwo = () => {
        const newUser = { ...user, num: Math.floor(user.num / 2), count: user.count + 1, disabled: true }
        apdateUser(newUser)
    }
    const Delete =()=>{
        const newUser = { ...user,disabled: true,frozen: true }
        apdateUser(newUser)
    }
    return (<div className={`user-card ${user.disabled ? "is-disabled" : "is-active"} ${user.win ? "is-winner" : ""} ${user.frozen && !user.win ? "is-left" : ""}`} style={{ background: user.disabled ? "gray" : "white" }}>
        <div className="user-card-name">{user.name}</div>
        <h1 className="user-card-num">{user.num}</h1>
        {user.win && <h2 className="badge badge-win">ניצח!</h2>}
        {user.frozen && !user.win && <h2 className="badge badge-left">עזב</h2>}
        <h6 className="user-card-steps">staps {user.count}</h6>
        <div className="user-card-actions">
            <button className="btn btn-op" onClick={plusOne} disabled={user.disabled}>+1</button>
            <button className="btn btn-op" onClick={minosOne} disabled={user.disabled}>-1</button>
            <button className="btn btn-op" onClick={capolTwo} disabled={user.disabled}>*2</button>
            <button className="btn btn-op" onClick={lechalecTwo} disabled={user.disabled}>/2</button>
            <button className="btn btn-danger" onClick={Delete} disabled={user.disabled}>delete</button>
        </div>
    </div>)
}
export default UserCard

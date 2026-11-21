import { useState } from "react"
import AddUsers from "./AddUsers"
import MainGame from "./MainGame"
import "./play_100.css"

const Play_100Main = () => {
    const [gameStart, setGameStaet] = useState(true)
    const [users, setUsers] = useState([])

    const CreateUsers = (name) => {
        const obj = {
            id: users.length + 1,
            name: name,
            count: 0,
            num: Math.floor(Math.random() * 100),
            disabled: true,
            win: false,
            frozen: false//הוקפא
        }
        setUsers([...users, obj])
        console.log(users)
    }

    const apdateUser = (user) => {
    // השחקן הבא, בלי השחקן הנוכחי עצמו
    const next = [...users.slice(user.id), ...users.slice(0, user.id - 1)].find((x) => !x.frozen)

    const usersMap = users.map((u) => {
        if (u.id === user.id) {
            if (user.num === 100 && user.frozen === false)
                return { ...user, frozen: true, disabled: true, win: true, place: users.filter((x) => x.win).length + 1 }
            if (!next && !user.frozen)
                return { ...user, disabled: false } // נשאר לבד, ממשיך לשחק
            return user
        }
        if (next && u.id === next.id)
            return { ...u, disabled: false }
        return u
    })

    setUsers(usersMap)
}

    const Staet_Game = () => {
        setGameStaet(false)
        const UsersMap = users.map((user) => {
            if (user.id === 1) {
                return { ...user, disabled: false }
            } else {
                return user
            }

        })
        console.log(UsersMap)
        setUsers(UsersMap)
    }

return <div className="play-app">
    <div className="play-title">play_100Main</div>
    <div className="play-count">Num playes {users.length}</div>
{gameStart && users.length > 0 && <button className="btn btn-start" onClick={Staet_Game}>Staet Game</button>}
    <div className="play-layout" style={{ display: "flex" }}>
        {/* הרשימה בצד */}
        <div className="play-sidebar" style={{ width: "200px" }}>
            {users.map((u) => <div className="sidebar-player" key={u.id}>{u.name} - {u.num}</div>)}

            <h2 className="wins-title">Wins!!!</h2>
            {users.filter((u) => u.win)
                  .sort((a, b) => a.place - b.place)
                  .map((u) => <div className="wins-row" key={u.id}>מקום {u.place}: {u.name} ({u.count} צעדים)</div>)}
        </div>

        {/* המשחק */}
        <div className="play-board" style={{ flex: 1 }}>
<AddUsers CreateUsers={CreateUsers} />
{!gameStart && <MainGame users={users} apdateUser={apdateUser} />}        </div>
    </div>
</div>
}
export default Play_100Main

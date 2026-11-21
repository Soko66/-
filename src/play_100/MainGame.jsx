import UserCard from "./UserCard"

const MainGame = ({ users, apdateUser }) => {
    return <div className="main-game">
        {users.map(
            (user) => {
                return (<UserCard key={user.id} apdateUser={apdateUser} user={user} />)
            }
        )}
    </div>
}
export default MainGame

const UserCard = ({user, onDelete}) =>{
    return(
        <div className="flex items-center justify-between bg-gray-100 p-4 rounded-2xl shadow-sm">
            <div className="flex items-center gap-4">
                
            <img
            src= {user.image}
            alt={user.firstName}
            className="w-14 h-14 rounded-full object-cover"
            />
            <div>
                <h3 className="text-lg font-semibold">{user.firstName}</h3>
                <p className="text-gray-600 text-sm">{user.email}</p>
            </div>
        </div>
        <button
        onClick={() => onDelete(user.id)}
        className="text-red-500 tet-xl hover:text-red-700 transition">
            Delete
        </button>
    </div>
    )
}
export default UserCard;
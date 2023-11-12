import './User.scss'

export default function User({ user }) {
  return (
    <div className="user">
      <img
        src={user.avatar}
        alt={user.name}
      />
      <p>{user.name}</p>
    </div>
  )
}
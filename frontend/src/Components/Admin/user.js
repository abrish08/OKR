import React, { useState } from 'react'

export default function User() {
const [users, setUsers] = useState([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)



const fetchUsers = async () => {
  setLoading(true)
    setError(null)
    try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/users`)
        if (!response.ok) {
            throw new Error('Failed to fetch users')
        }
        const data = await response.json()
        setUsers(data)
        }
    catch (error) {
        setError(error.message)
    }
    finally {
        setLoading(false)
    }
}
  return (
    <div>
      <h1>Users</h1>
      <button onClick={fetchUsers}>Fetch Users</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {users.length > 0 ? (
        <ul>
          {users.map(user => (
            <li key={user._id}>{user.name} - {user.email}</li>
          ))}
        </ul>
      ) : (
        <p>No users found</p>
      )}
    </div>
  ) 
}
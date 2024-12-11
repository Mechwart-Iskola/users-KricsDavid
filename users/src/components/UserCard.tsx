import { useState } from "react"

const UserCard = () => {

  const [searchUser, setSearchUser] = useState('')

  const handleSearchUser=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setSearchUser(e.target.value)
    }
const fetchusers = async()=>{
  try {
    const response = await fetch('/users.json')
    if (!response.ok) {
      throw new Error;
      
    }
    
  } catch (error) {
    console.error('error')
  }
}

  return (
    <div className="user-card">
        <div className="search-section">
            <label >Enter User Name</label>
            <input type="text" className="userName" 
            placeholder="Enter user name..."/>
            <button>Search</button>
        </div>
        <div className="results-section">
            
        </div>
    </div>
  )
}

export default UserCard
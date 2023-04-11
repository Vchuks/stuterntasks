import React from 'react'

const UserCard = ({picture , id, title, firstName, lastName}) => {
    return (
        <div className='user-container'>
  <div>
    <img src={picture} alt="profile_image"/>
  </div>
  <div>
    <p>{id}</p>
    <p>{title} {firstName} {lastName}</p>
  </div>
</div>
    )
}

export default UserCard

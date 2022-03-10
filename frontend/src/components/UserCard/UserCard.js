import React from "react";
import "./UserCard.css";
const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt="avatar" className="user-image" />
      <p className="user-name">{user.login}</p>
      <p className="user-type">{user.type}</p>
      <button className="user-link">
        <a href={`${user.url.html_url}`}>See Profile</a>
      </button>
    </div>
  );
};

export default UserCard;

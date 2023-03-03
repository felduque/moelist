import React from "react";

export const UserSidebar = ({ avatar, userName, email }) => {
  return (
    <div className="border text-center p-5 rounded">
      <img
        className="avatar"
        src={avatar}
        alt="avatar"
        height="192"
        width="192"
      />

      <div className="mt-4">
        <p>
          hola, <span className="username">{userName}</span>
        </p>
      </div>
      <p>{email}</p>
    </div>
  );
};

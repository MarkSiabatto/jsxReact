import React from "react";

const ProfileCard = ({ title, handle, image }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{handle}</p>
      <img src={image} alt="logo" />
    </div>
  );
};

export default ProfileCard;

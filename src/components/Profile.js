import React from "react";
import { useParams } from "react-router-dom";
import { useUser } from "./UserContext";

function Profile() {
  const { username } = useParams();
  const user = useUser();

  return (
    <div className="page center">
      <h1 className="title">Profile of {username}</h1>
      <p style={{ fontSize: "30px" }}>Current User: <strong>{user}</strong></p>
      <img
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt="Profile"
        style={{ borderRadius: "50%", width: "200px" }}
      />
      <p style={{ fontSize: "20px" }}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
        natoque penatibus et magnis dis parturient montes, nascetur 
        ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
        pretium quis, sem. Nulla consequat massa quis enim. Donec pede 
        justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim 
        justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam 
        dictum felis eu pede mollis pretium.
      </p>
    </div>
  );
}

export default Profile;

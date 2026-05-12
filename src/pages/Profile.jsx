import React, { useEffect, useState } from "react";
import api from "../services/api.js";

const Profile = () => {
  const [username, setUsername] = useState("");

  const getUser = async () => {
    try {
      const response = await api.get("/auth/profile");

      setUsername(response.data.user.username);
    } catch (error) {
      console.log(
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <h1>Welcome to your profile, {username}!</h1>
    </div>
  );
};

export default Profile;
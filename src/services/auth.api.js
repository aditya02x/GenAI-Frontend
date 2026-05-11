import axios from "axios";

export async function register(username, email, password) {
  try {
    const response = await axios.post("/api/auth/register", {
      username,
      email,
      password,
    });

    return response.data;
  } catch (error) {
    console.log(error);

    throw error.response?.data || {
      message: "Something went wrong",
    };
  }
}
// import { Navigate } from "react-router-dom";

const currentAdmin = async (apiService) => {
  try {
    const response = await apiService.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/users/me`
    );
    return response;
    // console.log(response.data.is_admin);
    // if (response.data.is_admin !== 1) {
    //   // console.log("Unauthorized !");
    //   Navigate("/");
    // }
  } catch (err) {
    console.error(err.message);
    return null;
  }
};

export default currentAdmin;

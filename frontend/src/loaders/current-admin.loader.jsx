// import React, { useEffect } from "react";
// import { useGlobalContext } from "../contexts/GlobalContext";

const currentAdmin = async (apiService) => {
  try {
    const response = await apiService.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/users/me`
    );
    // console.log(response.data.is_admin);
    // console.log(response.data);
    // if (response.data.is_admin !== 1) {
    //   // console.log("Unauthorized !");
    //   return navigate("/");
    // }
    return response;
  } catch (err) {
    console.error(err.message);
    return null;
  }
};

export default currentAdmin;

// function AdminChecker() {
//   const globalContext = useGlobalContext();

//   const currentAdmin = async (apiService) => {
//     try {
//       const response = await apiService.get(
//         ${import.meta.env.VITE_BACKEND_URL}/api/users/me
//       );
//       // console.log(response.data.is_admin);
//       console.log(response.data);
//       if (response.data.is_admin !== 1) {
//         // console.log("Unauthorized !");
//         return globalContext.navigate("/");
//       }
//       // return response;
//     } catch (err) {
//       console.error(err.message);
//       return null;
//     }
//   };

//   useEffect(() => {
//     const checkAdmin = async () => {
//       await currentAdmin(globalContext.apiService);
//     };

//     checkAdmin();
//   }, [globalContext.apiService]);

//   return <div>AdminChecker is checking...</div>;
// }

// export default AdminChecker;

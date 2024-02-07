const currentUserProfileLoader = async (apiService) => {
  const loaderData = { preloadUser: null };

  try {
    if (localStorage.getItem("token")) {
      const data = await apiService.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/me`
      );
      loaderData.preloadUser = data;
    }
  } catch (err) {
    console.error(err.message);
    localStorage.clear();
    apiService.setToken(null);
  }
  return loaderData;
};

export default currentUserProfileLoader;

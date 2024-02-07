const currentUserProfileLoader = async (apiService) => {
  const loaderData = { preloadUser: null };

  try {
    if (!localStorage.getItem("token")) {
      return loaderData;
    }

    const data = await apiService.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/users/me`
    );
    loaderData.preloadUser = data;
  } catch (err) {
    console.error(err.message);
  }
  return loaderData;
};

export default currentUserProfileLoader;

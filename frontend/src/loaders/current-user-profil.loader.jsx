const currentUserProfileLoader = async (apiService) => {
  try {
    const data = await apiService.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/users/me`
    );
    return { preloadUser: data ?? null };
  } catch (err) {
    console.error(err.message);
    return null;
  }
};

export default currentUserProfileLoader;

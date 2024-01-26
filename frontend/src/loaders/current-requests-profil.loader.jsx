const currentRequestsUserProfile = async (apiService) => {
  try {
    // D'abord, on va chercher le CV de l'utilisateur, ce qui nous intéresse est l'id du CV
    const cvData = await apiService.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/users/id/cvs` // TODO: remplacer le 5 par l'id de l'utilisateur connecté
      //   `${import.meta.env.VITE_BACKEND_URL}/api/users${cvData.data.id}/cvs` // Get CV avec l'id de l'user connecté.
    );

    // Ensuite, on va chercher les expériences de l'utilisateur via l'id du CV qu'on vient de récupérer
    // le but est de pouvoir faire SELECT * FROM experiences WHERE cv_id = cvData.data.id
    const experienceData = await apiService.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/experiences/by-cv-id/${
        cvData.data.id
      }`
    );
    const courseData = await apiService.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/courses/by-cv-id/${
        cvData.data.id
      }`
    );

    return {
      experiences: experienceData.data,
      courses: courseData.data,
    };
  } catch (err) {
    console.error(err.message);
    return null;
  }
};

export default currentRequestsUserProfile;

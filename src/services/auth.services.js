export const signIn = async (userName, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            user: { userName },
            accessToken: "fake-access-token",
          },
        });
      }, 1000);
    });
  };
  
  export const signUp = async (
    userName,
    password,
    confirmPassword,
    firstName,
    lastName,
    email,
    address,
    city,
    state,
    zipCode,
    favGenres,
    selectedAvatar
  ) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            user: { userName, firstName, lastName, email },
          },
        });
      }, 1000);
    });
  };
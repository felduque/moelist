export const localStoreJwt = async (token) => {
  try {
    await AsyncStorage.setItem("jwt", token);
  } catch (error) {
    console.log(error);
  }
};

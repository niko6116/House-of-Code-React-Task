import auth from "@react-native-firebase/auth";

/*
Call this function to check for authentication and redirect the user accordingly.
*/
function Authentication(props: any) {
  const user = auth().currentUser;

  if (!user) {
    // User not logged in - Go to Login.
    props.navigation.navigate("Login")
  } else {
    // User logged in - Go to Room Selection.
    props.navigation.navigate("RoomSelection")
  }
}

export default Authentication;
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';

function signIn() {
    console.log("Google Sign in started");
    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            console.log("Signing in 1");

            const userInfo = await GoogleSignin.signIn();
            console.log("Signing in 2");

            this.setState({ userInfo });
            console.log("Signing in 3");
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log("Sign in cancelled: ", error.code);
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log("Sign in already in progress: ", error.code);
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log("Play services not available: ", error.code);
            } else {
                console.log("Unknown error: ", error.code);
            }
        }
        console.log("Signing in 4");
    };
    console.log("Signing in 5");

    return signIn;
}

function isSignedIn() {
    const isSignedIn = async () => {
        const isSignedIn = await GoogleSignin.isSignedIn();
        this.setState({ isLoginScreenPresented: !isSignedIn });
    };

    return isSignedIn;
}

function getCurrentUser() {
    const getCurrentUser = async () => {
        const currentUser = await GoogleSignin.getCurrentUser();
        this.setState({ currentUser });
    };

    return getCurrentUser;
}

function signOut() {
    const signOut = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            this.setState({ user: null });
        } catch (error) {
            console.error(error);
        }
    };

    return signOut;
}

export default {
    signIn,
    isSignedIn,
    getCurrentUser,
    signOut
}
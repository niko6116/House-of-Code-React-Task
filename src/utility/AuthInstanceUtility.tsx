import React, { Component } from "react";
import { Text } from "react-native";
import auth from "@react-native-firebase/auth";

class AuthenticationUtility {

    private static instance: AuthenticationUtility;

    private auth = auth();

    constructor() {


    }

    getInstance() {
        if (this.getInstance == null) {
            AuthenticationUtility.instance = new AuthenticationUtility();
        }
        return AuthenticationUtility.instance;
    }

}


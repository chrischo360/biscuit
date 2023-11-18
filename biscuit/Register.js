import React, { useState } from "react";
import auth from "@react-native-firebase/auth"
import { Alert } from "react-native";


export const Register = async () => {
  const [name, setName] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  if (email && password) {
    try {
        const response = await auth().createUserWithEmailAndPassword(
            email, password
        )

        if (response.user) {
            await createProfile(response);
            
        }
    } catch (e) {
        Alert.alert("My guy", "cringe")
    }
  }
};
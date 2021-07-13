import { firebaseApp } from "../firebase";

export const signIn = async (email, password) => {
  try{
    const userCredential = await firebaseApp.auth().signInWithEmailAndPassword(email, password)
    var user = userCredential.user;
    
  }catch(err){
    console.log(err)
  }
}
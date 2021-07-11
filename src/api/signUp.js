import {firebaseApp, userRef} from '../firebase'

export const signUp = async (email, password, fName, lName) => {
  try{
    const userCredential = await firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    const user = userCredential.user
    userRef.child(user.uid).set({
      fName,
      lName,
      email
    })
  }catch(err){
    console.log(err)
  }
}

import {auth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from '../firebase'

export const signIn = ({payload}) => {

  signInWithEmailAndPassword(auth, payload.email, payload.password)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorMsg = error
  });
  console.log(user, 'user')
};

export const signUp = () => {
  return null;
};

export const signOut = () => {
  return null;
};

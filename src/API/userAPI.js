import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from '../firebase';

export const signIn = async ({email, password}) => {
  const user = await signInWithEmailAndPassword(auth, email, password)
    return user.user
};

export const signUp = async ({email, password}) => {
  const user = await createUserWithEmailAndPassword(auth, email, password)
    return user.user
};

export const signOut = () => {
  return {};
};

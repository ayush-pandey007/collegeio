import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export const useAppAuthState = () => useAuthState(auth);

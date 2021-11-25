import { auth } from '../Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export const useAppAuthState = () => useAuthState(auth);

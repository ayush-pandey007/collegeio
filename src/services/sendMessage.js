import { collection, addDoc, serverTimestamp } from '@firebase/firestore';
import { db } from '../firebase';

const sendMessage = async (roomId, msgData) => {
  const msg = { ...msgData, created_at: serverTimestamp() };
  const docRef = await addDoc(collection(db, 'rooms', roomId, 'messages'), msg);

  return docRef.id;
};

export default sendMessage;

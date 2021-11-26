import { roomdDB } from '../firebase';
import { addDoc } from '@firebase/firestore';

const addRoom = async (roomData) => {
  const docRef = await addDoc(roomdDB, roomData);
  return docRef.id;
};

export default addRoom;

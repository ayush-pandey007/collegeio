import { roomdDB } from '../firebase';
import { getDocs } from '@firebase/firestore';

const getRooms = async () => {
  const querySnapshot = await getDocs(roomdDB);
  const data = querySnapshot.docs.map((room) => ({
    id: room.id,
    ...room.data(),
  }));

  return data;
};

export default getRooms;

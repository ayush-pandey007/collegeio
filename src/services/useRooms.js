import { roomdDB } from '../firebase';
import { getDocs } from '@firebase/firestore';
import { useEffect, useState, useCallback } from 'react';

const useRooms = () => {
  const [data, setData] = useState(null);

  const fetchRoomsList = useCallback(async () => {
    const querySnapshot = await getDocs(roomdDB);
    const data = querySnapshot.docs.map((room) => ({
      id: room.id,
      ...room.data(),
    }));
    setData(data);
  }, [setData]);

  const refetch = () => fetchRoomsList();

  useEffect(() => {
    try {
      fetchRoomsList();
    } catch (e) {
      throw new Error(e.message);
    }
  }, []);

  return [data, refetch];
};

export default useRooms;

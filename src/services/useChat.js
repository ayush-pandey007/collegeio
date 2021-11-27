import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, onSnapshot } from '@firebase/firestore';

// fetch all chat of a room
const useChat = (id) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const q = query(collection(db, 'rooms', id, 'messages'));
    const unsub = onSnapshot(q, (querySnapshot) => {
      const data = querySnapshot.docs.map((item) => {
        console.log(item);
        return {
          id: item.id,
          ...item.data(),
        };
      });

      setData(data);
    });

    return () => {
      unsub();
    };
  }, [id]);

  return data;
};

export default useChat;

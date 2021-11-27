import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, onSnapshot, orderBy } from '@firebase/firestore';

// RealTime Chats
const useChat = (id) => {
  if (!id) return null;
  const [data, setData] = useState(null);

  useEffect(() => {
    const q = query(
      collection(db, 'rooms', id, 'messages'),
      orderBy('created_at', 'asc')
    );
    const unsub = onSnapshot(q, (querySnapshot) => {
      const data = querySnapshot.docs.map((item) => {
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

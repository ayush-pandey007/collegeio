import { useState, useEffect } from 'react';
import { onSnapshot, getDocs } from '@firebase/firestore';
import { roomdDB } from '../firebase';

const useRealtime = (db) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const docRef = getDocs(roomdDB);
    const unsub = onSnapshot(docRef, (data) => {
      console.log(data);
    });

    return () => {
      unsub();
    };
  }, []);

  return data;
};

export default useRealtime;

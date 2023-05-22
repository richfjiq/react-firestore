import { DocumentData, QuerySnapshot } from 'firebase/firestore';

export const firebaseData = (snapshot: QuerySnapshot<DocumentData>) => {
  const data = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return data;
};

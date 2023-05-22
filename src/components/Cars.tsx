import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';

import { db, firebaseData } from '../utils';

type Car = {
  available: boolean;
  brand: string;
  color: string;
  id: string;
  price: number;
};

export const Cars = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    getDocs(collection(db, 'cars'))
      .then((snapshot) => {
        const cars = firebaseData(snapshot) as Car[];
        setCars(cars);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleCarData = () => {
    return cars.map(({ id, brand, color, price }) => {
      return (
        <tr key={id}>
          <th>{id}</th>
          <th>{brand}</th>
          <th>{color}</th>
          <th>{price}</th>
        </tr>
      );
    });
  };

  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>Brand</th>
          <th>Color</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{handleCarData()}</tbody>
    </table>
  );
};

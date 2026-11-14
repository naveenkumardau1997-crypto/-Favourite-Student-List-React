import { createContext, useState } from "react";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (student) => {
    const exists = favourites.some(
      (item) => item.id === student.id
    );

    if (!exists) {
      setFavourites((prev) => [...prev, student]);
    }
  };

  const removeFavourite = (id) => {
    setFavourites((prev) =>
      prev.filter((student) => student.id !== id)
    );
  };

  return (
    <StudentContext.Provider
      value={{ favourites, addFavourite, removeFavourite }}
    >
      {children}
    </StudentContext.Provider>
  );
};
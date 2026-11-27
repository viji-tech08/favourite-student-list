
import { createContext, useState } from "react";

export const StudentContext = createContext();

function StudentProvider({ children }) {

  const [favourites, setFavourites] = useState([]);

  // Add student to favourites
  const addFavourite = (student) => {
    const alreadyAdded = favourites.some(
      (item) => item.id === student.id
    );

    if (!alreadyAdded) {
      setFavourites([...favourites, student]);
    }
  };

  // Remove student from favourites
  const removeFavourite = (id) => {
    const updatedList = favourites.filter(
      (student) => student.id !== id
    );

    setFavourites(updatedList);
  };

  return (
    <StudentContext.Provider
      value={{
        favourites,
        addFavourite,
        removeFavourite
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export default StudentProvider;

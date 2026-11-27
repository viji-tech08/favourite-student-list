
import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function FavouriteStudents() {

  const { favourites, removeFavourite } =
    useContext(StudentContext);

  return (
    <div className="container">

      <h1>Favourite Students ❤️</h1>

      <p className="subtitle">
        Your favourite student list
      </p>

      {favourites.length === 0 ? (

        <div className="empty-message">
          <h2>No favourite students added yet</h2>
          <p>Go to Student List and add your favourites!</p>
        </div>

      ) : (

        <div className="student-grid">

          {favourites.map((student) => (

            <div className="student-card" key={student.id}>

              <div className="student-icon">
                {student.name.charAt(0)}
              </div>

              <h3>{student.name}</h3>

              <p>Roll No: {student.rollNo}</p>

              <button
                className="remove-btn"
                onClick={() => removeFavourite(student.id)}
              >
                Remove
              </button>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default FavouriteStudents;

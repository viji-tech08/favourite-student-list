
import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function StudentList() {

  const { favourites, addFavourite } =
    useContext(StudentContext);

  const students = [
    { id: 1, name: "Viji", rollNo: "101" },
    { id: 2, name: "Kavya", rollNo: "102" },
    { id: 3, name: "Pavi", rollNo: "103" },
    { id: 4, name: "Abi", rollNo: "104" },
    { id: 5, name: "Sharmi", rollNo: "105" },
    { id: 6, name: "Priya", rollNo: "106" },
    { id: 7, name: "Nila", rollNo: "107" },
    { id: 8, name: "Divya", rollNo: "108" }
  ];

  return (
    <div className="container">

      <h1>Student List</h1>
      <p className="subtitle">
        Select your favourite students
      </p>

      <div className="student-grid">

        {students.map((student) => {

          const isFavourite = favourites.some(
            (item) => item.id === student.id
          );

          return (
            <div className="student-card" key={student.id}>

              <div className="student-icon">
                {student.name.charAt(0)}
              </div>

              <h3>{student.name}</h3>

              <p>Roll No: {student.rollNo}</p>

              <button
                className={
                  isFavourite ? "added-btn" : "add-btn"
                }
                onClick={() => addFavourite(student)}
                disabled={isFavourite}
              >
                {isFavourite
                  ? "Added to Favourite"
                  : "Add to Favourite"}
              </button>

            </div>
          );

        })}

      </div>

    </div>
  );
}

export default StudentList;

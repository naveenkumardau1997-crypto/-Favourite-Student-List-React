import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const students = [
  { id: 101, name: "Arun Kumar", department: "Computer Science" },
  { id: 102, name: "Priya", department: "Information Technology" },
  { id: 103, name: "Rahul", department: "Mechanical Engineering" },
  { id: 104, name: "Divya", department: "Electronics" },
  { id: 105, name: "Karthik", department: "Computer Science" },
  { id: 106, name: "Sneha", department: "Information Technology" }
];

function StudentList() {
  const { favourites, addFavourite } = useContext(StudentContext);

  return (
    <div className="container">
      <h1>Student List 🎓</h1>
      <p className="subtitle">Choose your favourite students</p>

      <div className="student-grid">
        {students.map((student) => {
          const isFavourite = favourites.some(
            (item) => item.id === student.id
          );

          return (
            <div className="student-card" key={student.id}>
              <div className="student-icon">👨‍🎓</div>
              <h2>{student.name}</h2>
              <p>Roll Number: {student.id}</p>
              <p>{student.department}</p>

              <button
                className={isFavourite ? "added-btn" : "add-btn"}
                disabled={isFavourite}
                onClick={() => addFavourite(student)}
              >
                {isFavourite ? "✓ Added" : "♡ Add to Favourite"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StudentList;
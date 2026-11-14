import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function FavouriteStudents() {
  const { favourites, removeFavourite } = useContext(StudentContext);

  return (
    <div className="container">
      <h1>❤️ Favourite Students</h1>
      <p className="subtitle">Your selected favourite students</p>

      {favourites.length === 0 ? (
        <div className="empty-message">
          <h2>💔 No Favourite Students</h2>
          <p>No favourite students added yet.</p>
        </div>
      ) : (
        <div className="student-grid">
          {favourites.map((student) => (
            <div className="student-card" key={student.id}>
              <div className="student-icon">🎓</div>

              <h2>{student.name}</h2>

              <p>Roll Number: {student.id}</p>

              <p>{student.department}</p>

              <button
                className="remove-btn"
                onClick={() => removeFavourite(student.id)}
              >
                ✕ Remove Favourite
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavouriteStudents;
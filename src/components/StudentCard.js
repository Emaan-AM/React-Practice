import React from "react"

const StudentCard = ({ student }) => {
    return (
        <div className="card">
            <img src={student.image} alt={student.name} />
            <h2>{student.name}</h2>
            <p>Age: {student.age}</p>
            <p>Semester: {student.semester}</p>
        </div>
    )
}

export default StudentCard
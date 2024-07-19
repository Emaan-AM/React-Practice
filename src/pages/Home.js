import React from "react";
import StudentCard from "../components/StudentCard";

const students = [
    {
        id: 1,
        image: 'https://i.pinimg.com/564x/a8/0e/36/a80e3690318c08114011145fdcfa3ddb.jpg',
        name: 'Emaan A Mueed',
        age: 19,
        semester: 5
    },
    {
        id: 2,
        image: 'https://i.pinimg.com/564x/a8/0e/36/a80e3690318c08114011145fdcfa3ddb.jpg',
        name: 'Zainab Sanaullah',
        age: 20,
        semester: 5
    },
    {
        id: 3,
        image: 'https://i.pinimg.com/564x/a8/0e/36/a80e3690318c08114011145fdcfa3ddb.jpg',
        name: 'Ali Mehmud',
        age: 20,
        semester: 5
    },
];

const Home = () => {
    return (
        <div className="home">
            {students.map(student => (
                <StudentCard key={student.id} student={student} />
            ))}
        </div>
    )
}

export default Home
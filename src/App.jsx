import "./App.css";
import { useEffect, useState } from "react";
import { Assessment } from "./components/Assessment";

function App() {
  const [assessments, setAssessments] = useState([]);
  const fetchData = () => {
    return fetch(`${process.env.REACT_APP_API_URL}/assessments/`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAssessments(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Assessments: {process.env.REACT_APP_API_KEY}
      </header>
      <main className="App-body">
        {assessments.map((assessment, index) => (
          <Assessment key={index} {...assessment} />
        ))}
      </main>
    </div>
  );
}

export default App;

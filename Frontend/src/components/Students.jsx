import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './Students.css';

const Card = ({ image, cardTitle, cardDescription, button }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={image} alt="Card image" />
      <div className="card-body">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text">{cardDescription}</p>
        <a href={button.url} target="_blank" rel="noopener noreferrer" className="card-button">{button.label}</a>
      </div>
    </div>
  );
};

function Students() {
  const [dataArray, setDataArray] = useState([]);
  fetch('http://localhost:5173/students.csv')
  console.log("Test")
  useEffect(() => {
    fetch('/students.csv')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
/*.then(csv => {
Papa.parse(csv, {
    header: true,
    dynamicTyping: true,
    complete: (result) => {
    const formattedData = result.data.map(student => ({
        image: student.image || 'https://via.placeholder.com/150',
        cardTitle: student.name,
        cardDescription: `Age: ${student.age}, Grade: ${student.grade}`,
        button: { url: `mailto:${student.email}`, label: student.email }
    }));
    setDataArray(formattedData);
    },
    error: (error) => {
    console.error('Error parsing CSV:', error);
    }
        });
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });*/
  }, []);

  return (
    <main>
      <h1>Students</h1>
      <div className="cardBox">
        {dataArray.map((data, index) => (
          <Card
            key={index}
            image={data.image}
            cardTitle={data.cardTitle}
            cardDescription={data.cardDescription}
            button={data.button}
          />
        ))}
      </div>
    </main>
  );
}

export default Students;




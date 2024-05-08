import React, { useState } from 'react';

const AverageCalculator = () => {
  const [numbers, setNumbers] = useState([]);
  const [average, setAverage] = useState(0);

  const fetchNumbersFromServer = async () => {
    return [];
  };

  const fetchNumbersAndCalculateAverage = async () => {
    try {
      const fetchedNumbers = await fetchNumbersFromServer();
      setNumbers(fetchedNumbers);

      const sum = fetchedNumbers.reduce((acc, curr) => acc + curr, 0);
      const avg = sum / fetchedNumbers.length;
      
      setAverage(avg);
    } catch (error) {
      console.error('Error fetching numbers:', error);
    }
  };

  return (
    <div>
      <h2>Average Calculator</h2>
      <button onClick={fetchNumbersAndCalculateAverage}>Calculate Average</button>
      <div>
        <h3>Numbers:</h3>
        <ul>
          {numbers.map((num, index) => (
            <li key={index}>{num}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Average:</h3>
        <p>{average}</p>
      </div>
    </div>
  );
};

export default AverageCalculator;

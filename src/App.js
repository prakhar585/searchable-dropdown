import { useState } from 'react';
import './App.css';
import Select from "react-select";

function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);


  const countries = [
    { value: 'united states', label: 'United States' },
    { value: 'china', label: 'China' },
    { value: 'india', label: 'India' },
    { value: 'japan', label: 'Japan' },
    { value: 'germany', label: 'Germany' },
    { value: 'united kingdom', label: 'United Kingdom' },
    { value: 'france', label: 'France' },
    { value: 'italy', label: 'Italy' },
    { value: 'canada', label: 'Canada' },
    { value: 'brazil', label: 'Brazil' },
    { value: 'russia', label: 'Russia' },
    { value: 'australia', label: 'Australia' },
    { value: 'south korea', label: 'South Korea' },
    { value: 'spain', label: 'Spain' },
    { value: 'mexico', label: 'Mexico' },
    { value: 'indonesia', label: 'Indonesia' },
    { value: 'netherlands', label: 'Netherlands' },
    { value: 'saudi arabia', label: 'Saudi Arabia' },
    { value: 'switzerland', label: 'Switzerland' },
    { value: 'sweden', label: 'Sweden' },
    { value: 'turkey', label: 'Turkey' },
    { value: 'united arab emirates', label: 'United Arab Emirates' },
    { value: 'argentina', label: 'Argentina' },
    { value: 'south africa', label: 'South Africa' },
    { value: 'poland', label: 'Poland' },
    { value: 'belgium', label: 'Belgium' },
    { value: 'norway', label: 'Norway' },
    { value: 'thailand', label: 'Thailand' },
    { value: 'vietnam', label: 'Vietnam' },
    { value: 'philippines', label: 'Philippines' },
    { value: 'egypt', label: 'Egypt' },
    { value: 'pakistan', label: 'Pakistan' },
    { value: 'bangladesh', label: 'Bangladesh' },
    { value: 'malaysia', label: 'Malaysia' },
    { value: 'singapore', label: 'Singapore' },
    { value: 'nigeria', label: 'Nigeria' },
    { value: 'ukraine', label: 'Ukraine' },
    { value: 'israel', label: 'Israel' },
    { value: 'greece', label: 'Greece' },
    { value: 'portugal', label: 'Portugal' },
    { value: 'new zealand', label: 'New Zealand' },
    { value: 'czech republic', label: 'Czech Republic' },
    { value: 'denmark', label: 'Denmark' },
    { value: 'ireland', label: 'Ireland' },
    { value: 'austria', label: 'Austria' },
    { value: 'finland', label: 'Finland' },
    { value: 'chile', label: 'Chile' },
    { value: 'colombia', label: 'Colombia' },
    { value: 'peru', label: 'Peru' },
    { value: 'romania', label: 'Romania' },
    { value: 'hungary', label: 'Hungary' }
  ];

  const handleChange=(e)=>{
    const selected = e.target.value;
    setSelectedCountry(selected);
    console.log(`${selected} was selected`);
  }
  
  return (
    <div className="App">
      <h2>Select a Country</h2>
      <select value={selectedCountry} onChange={handleChange}>
        <option value="" disabled>Select a country</option>
        {countries.map((country) => (
          <option key={country.value} value={country.value}>
            {country.label}
          </option>
        ))}
      </select>

      {/* {selectedCountry && (
        <div style={{ marginTop: '10px' }}>
          You selected: <strong>{selectedCountry}</strong>
        </div>
      )} */}
    </div>
    // <div>
    //   <Select
    //   options={countries}
    //   value={selectedOption}
    //   onChange={handleChange}
    //   ></Select>
    // </div>
  );
}

export default App;

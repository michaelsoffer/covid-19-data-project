import React, { useState } from 'react';
import './covid-data.css';

function CovidData() {

    // variable declarations
    const [country, setCountry] = useState("");
    const [cases, setCases] = useState("");
    const [deaths, setDeaths] = useState("");
    const [recovered, setRecovered] = useState("");
    const [active, setActive] = useState("");
    const [userInput, setUserInput] = useState("");

    // useEffect(() => {
    //     // disease.sh is the open data API I used for this project
    //     fetch("https://disease.sh/v3/covid-19/countries")
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setData(data);
    //     });
    // }, []);

    // setData is called in handleSubmit. When the user submits their search, the variables will be set to appropriate values
    const setData = ({
        country,
        cases,
        deaths,
        recovered,
        active,
    }) => {
        setCountry(country);
        setCases(cases);
        setDeaths(deaths);
        setRecovered(recovered);
        setActive(active);
    };

    // sets the userInput variable
    const handleSearch = (e) => {
        setUserInput(e.target.value);
    };

    // disease.sh is the open data API I used for this project
    // handleSubmit fetches appropriate data from disease.sh with whichever country the user searched
    const handleSubmit = (props) => {
        props.preventDefault();
        fetch(`https://disease.sh/v3/covid-19/countries/${userInput}`)
        .then((res) => res.json())
        .then((data) => {
            setData(data);
        });
    };

    return (
        <div className="covidData">
            <h1>COVID-19 DATA</h1>
            <div className="covidData_input">
                <form onSubmit={handleSubmit}>
                    <input onChange={handleSearch} placeholder="Enter Country Name"/>
                    <br/>
                    <button type="submit">Search</button>
                </form>                
            </div>
            { /* output covid data to screen */ }
            <div className="covidData_info">
                <p>Country: {country}</p>
                <p>Cases: {cases}</p>
                <p>Deaths: {deaths}</p>
                <p>Recovered: {recovered}</p>
                <p>Active Cases: {active}</p>
            </div>

        </div>
    );
}

export default CovidData;
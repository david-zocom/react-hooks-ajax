import React, { useState, useEffect } from 'react';

const WorldInfo = () => {
	const [countryData, setCountryData] = useState(null);
	useEffect(() => {
		// fetch data from server
		const baseUrl = 'http://forverkliga.se/JavaScript/api/simple.php?';
		fetch(baseUrl + 'world')
		.then(response => response.json())
		.then(data => {
			console.log('Data from API:', data);
			setCountryData(data);
		})
	}, []);
	let countries = <li>No countries!</li>;
	if( countryData )
		countries = countryData.map(country => <li key={country.name}>{country.name}</li>);
	// Här är det rimligt att skapa en ny komponent, som får datan via props. På så sätt kan man separera logiken (hämta data från API) från presentationen (rendera data från props)
	return (
		<div>
			<ul> {countries} </ul>
		</div>
	)
};


export default WorldInfo;

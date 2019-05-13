import React, { useEffect, useState } from 'react';

const HooksDemo = props => {
	const [data, setData] = useState(0);
	const [data2, setData2] = useState(0);
	useEffect(() => { console.log('Jag körs ALLTID'); });
	useEffect(() => { console.log('Jag körs bara en gång'); }, []);
	useEffect(() => {
		console.log('Jag körs varje gång DATA ändras');
	}, [data]);
	useEffect(() => {
		console.log('Jag körs varje gång data eller data2 ändras');
	}, [data, data2]);
	return (
		<div>
		<button onClick={e => setData(data + 1)}>change data</button>
		<button onClick={e => setData2(data2 + 1)}>change data2</button>
		<br/>
		{data} {data2}
		</div>
	)
};

export default HooksDemo;

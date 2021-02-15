import React, { useEffect } from 'react';

const List = (props) => {

	useEffect(() => {

	}, [props.searchData]);

	const renderedList = props.searchData.map( item => {
		return <li key={item.pageid}>
			<h4>{ item.title }</h4>
			<p dangerouslySetInnerHTML={{ __html: item.snippet }}></p>			
		</li>
	});

	return (
		<ul>{ renderedList }</ul>
	)
}

export default List;
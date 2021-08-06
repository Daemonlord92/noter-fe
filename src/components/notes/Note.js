import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import axiosWithAuth from '../../utils/axiosWithAuth';

const Note = ({title, body, id}) => {
	const deleteNote = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.delete(`/v1/notes/${id}`)
			.then((res) => console.log('Delete Successful'))
			
	}

	return (

		<div>
			<Card body className="text-center col-md-10 w-100">
				<Link to={`/notes/${id}`}>
					<h3>
						{title}
					</h3>
				</Link>
				<p>
					{body}
				</p>
				<Button color="danger" onClick={deleteNote}>Delete</Button>
			</Card>
		</div>
	);
};

export default Note;
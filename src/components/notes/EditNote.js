import React, { useState } from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';
import { useParams } from 'react-router-dom';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import './note.css';

const EditNote = (props) => {
	const { notes } = props;
	const { id } = useParams();
	console.log(id)

	console.log(notes)
	const [editNote, setEditNote] = useState({
		title:"",
		body:""
	})
	const getNotes = ({id}) => {
		axiosWithAuth()
			.get(`/v1/notes/${id}`)
			.then(res => {
				setEditNote(res.data)
				console.log(res)

			})

	}

	const postIt = (add) => {
		axiosWithAuth()
			.put('/v1/notes/${id}', editNote)
			.then(res => {
				console.log("MJM| postIt| EditNote.js| SSuccess!", res)
			})
	}

	const postSubmit = (e) => {
		e.preventDefault();
		postIt(editNote);
	}

	const inputChange = (e) => {
		setEditNote({
			...editNote,
			[e.target.name]: e.target.value
		})
	}

	return (
		<div className="col-md-12 centered">
			<Card className="w-100 text-center">
				<form onSubmit={postSubmit}>
					<input
	          placeholder="Title"
	          name="title"
	          type="text"
	          value={editNote.title}
	          onChange={inputChange}
	          className="w-100"
	          />
	          <br/>
	          <input
	          placeholder="Body"
	          name="body"
	          type="text"
	          value={editNote.body}
	          onChange={inputChange}
	          className="w-75"
	          />
	          <br/>
	          <button>Edit Note</button>
				</form>
			</Card>
		</div>
	);
};

export default EditNote;
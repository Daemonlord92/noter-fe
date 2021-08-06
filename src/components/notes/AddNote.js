import React, { useState, useHistory } from 'react';
import { Redirect } from "react-router-dom";
import axiosWithAuth from '../../utils/axiosWithAuth';

const AddNote = (props) => {

	const [addNote, setAddNote] = useState({
		title:"",
		body:""
	})

	// const history = useHistory();

	const postIt = (add) => {
		axiosWithAuth()
			.post('/v1/notes', add)
			.then(res => {
				console.log("MJM| postIt| AddNote.js| SSuccess!", res)
				
			})
			.catch(err => console.log(err.message))
	}

	const postSubmit = (e) => {
		e.preventDefault();
		postIt(addNote);
		props.history.push('/notes')
	}

	const inputChange = (e) => {
		setAddNote({
			...addNote,
			[e.target.name]: e.target.value
		})
	}

	return (
		<div>
			<form onSubmit={postSubmit}>
				<input
          placeholder="Title"
          name="title"
          type="text"
          value={addNote.title}
          onChange={inputChange}
          />
          <input
          placeholder="Body"
          name="body"
          type="text"
          value={addNote.body}
          onChange={inputChange}
          />
          <button>Add Note</button>
        </form>
		</div>
	);
};

export default AddNote;
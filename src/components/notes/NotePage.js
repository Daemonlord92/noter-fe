import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Note from './Note';
import axiosWithAuth from '../../utils/axiosWithAuth';
import './note.css';
const NotePage = (props) => {
	const [notes, setNotes] = useState([]);
	useEffect(() => {
		getNotes()
		
	}, [])

	const getNotes = () => {
		axiosWithAuth()
			.get('/v1/notes')
			.then(res => {
				setNotes(res.data)
				console.log(res)
			})

	}

	const deleteNotes = (e) => {
		axiosWithAuth()
			.delete()
	}
	return (
		<div>
			<Link to='/notes/new'>Add new note</Link>
			<div className="flexxer">
				{notes.map(notes => (
					<Note key={notes.id} title={notes.title} body={notes.body} id={notes.id}/>
					))
				}
			</div>
		</div>
	);
};

export default NotePage;
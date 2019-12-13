import React from 'react';
import { useSelector } from 'react-redux';

function MessageCont() {
	const author = useSelector(state => state.username);
	return <div>{author}</div>;
}

export default MessageCont;

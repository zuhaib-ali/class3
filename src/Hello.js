import React from 'react';
import './Hello.css';

function Hello({fn}) {
	return <h3>This is Hello component, <span class='n'>{fn}</span>.</h3>
}

export default Hello;
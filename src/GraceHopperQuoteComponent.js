import React, { Component } from 'react';
import EinsteinQuoteComponent from './EinsteinQuoteComponent'


export default class GraceHopperQuoteComponent extends Component {
	render() {
		return (
			<div className="bar" id="hopper">
				<i>
					<p>
						&quot;The most dangerous phrase in the language is, ‘We’ve always done it this way.’&quot;
						<EinsteinQuoteComponent/>	
					</p>
				</i>
				<br />
				&#9;-Admiral Grace Hopper
			</div>
		);
	}
}

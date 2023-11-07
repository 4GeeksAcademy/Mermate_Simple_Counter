import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

import propTypes from "prop-types";



//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

		const SimpleCounter = (props) => {
			return (
				<div className="bigCounter">
					<div className="clock">
						<i className="fa fa-clock"></i>
					</div>
					
					<div className=" digit six">{props.digitSix}</div>
    				<div className=" digit five">{props.digitFive}</div>
					<div className=" digit four">{props.digitFour}</div>
					<div className=" digit three">{props.digitThree}</div>
					<div className=" digit two">{props.digitTwo}</div> 
					<div className=" digit one">{props.digitOne}</div>
					</div>
				
				);
			};

			SimpleCounter.propTypes = {
				digitSix:propTypes.number,
				digitFive:propTypes.number,
				digitFour:PropTypes.number,
				digitThree:PropTypes.number,
				digitTwo: PropTypes.number,
				digitOne: PropTypes.number
		};

	let counter = 0;
	setInterval(function(){
		const six = Math.floor(counter/100000) % 10;
        const five = Math.floor(counter/10000) % 10;
		const four = Math.floor(counter/1000) % 10;
		const three = Math.floor(counter/100) % 10;
		const two = Math.floor(counter/10) % 10;
		const one = Math.floor(counter/1) % 10;
		console.log(four, three, two, one);
		counter++;

    ReactDOM.render(
        <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six}/>,
        document.querySelector('#app')
    );
}, 1000);




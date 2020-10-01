import React from "react";
import img from "../../Images/cover_page.jpeg";
import { Link } from 'react-router-dom';
import {SpreadingAwareness} from "../SpreadingAwareness/SpreadingAwareness";
import {VoterTurnout} from "../VoterTurnout/VoterTurnout";
import {ButtonContainer as Button} from "../Button/Button.container";
import {RegisterContainer as Register} from "../Register/Register.container"
import "./Home.css";
import { FaRegEdit, FaBookOpen, FaMapMarked, FaRegAddressCard, FaVoteYea } from "react-icons/fa";

export const Home = () => (
	<div className='home'>
		<div className='bg'>
			<h2 className='floating-question'>
				Have <span className='red'>YOU</span> registered to{' '}
				<span className='red'>VOTE</span>?
			</h2>
			<div class='text-block'>
				<h4>Let Your Voice be heard!</h4>
				<Link to = "/register">
					<Button label='Register Now' />
				</Link>
			</div>
		</div>
		<h1 className='title'>How to Vote</h1>
		<div className='text-center'>
			<FaRegEdit size={59} color='#DA313C' />
			<span className='text-center'> Register to vote with your state</span>
		</div>
		<div className='text-center'>
			<FaMapMarked size={59} color='#DA313C' />
			<span className='text-center'>
				{' '}
				Find your polling location or get a mail-in ballot
			</span>
		</div>
		<div className='text-center'>
			<FaRegAddressCard size={59} color='#DA313C' />
			<span className='text-center'> Check if you need an ID</span>
		</div>
		<div className='text-center'>
			<FaVoteYea size={59} color='#DA313C' />
			<span className='text-center'> Vote!!</span>
		</div>
		<SpreadingAwareness />
		<VoterTurnout />
	</div>
);
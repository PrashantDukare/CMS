import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Default pages data
const initialState = {
  pages: [
    {
      id: '1',
      content: [
        {
          type: 'Header',
          key: 'Header1234',
          value: {
            text: 'Welcome to Flightright'
          }
        },
        {
          type: 'Section',
          key: 'Section1234',
          value: {
            heading: 'Our mission',
            text: 'We have been helping air passengers enforce their rights for over 8 years. As the market leader in our segment, we are committed to making sure that being right always translates into being proven right. This page provides you with more information about us, what we do and what drives our team in their day-to-day work.'
          }
        },
        {
          type: 'Figure',
          key: 'Figure12343',
          value: {
            src: 'https://assets.flightright.net/public/assets/images/website/photos/about_us/about-us-title-2@xs.jpg',
            alt: 'image 123',
            width: '80%',
            height: '400px'
          }
        },
        {
          type: 'Section',
          key: 'Section123456',
          value: {
            heading: 'LEGAL TECH – Revolutionising conventional legal practice',
            text: 'We have been offering digital, straightforward and transparent legal assistance based on fast communication channels for more than 6 years now - with no cost risk involved for the consumer. We have programmed our own database that includes more than 80 million data records that are updated daily: strikes, weather information, new court decisions and flight data from across Europe. It recognises within a matter of seconds whether a passenger is entitled to, compensation. The only part of the database that the customer sees is the compensation calculator input mask. As soon as we receive the passenger\'s authorisation, we start working on enforcing the claim against the airline.'
          }
        },
        {
          type: 'Para',
          key: 'Para67576',
          value: {
            text: 'This automated service has revolutionised the legal tech industry, as it encourages passengers to check and assert their compensation claims.'
          }
        }
      ]
    },
    {
      id: '2',
      content: [
        {
          type: 'Header',
          key: 'Header12345',
          value: {
            text: 'How it all began'
          }
        },
        {
          type: 'Section',
          key: 'Section12345',
          value: {
            heading: 'The idea behind Flightright was born',
            text: 'This experience lays the foundation stone for Flightright’s success story. Kadelbach wants compensation for the flight and contacts the airline. The airline initially takes a cooperative stance before all goes quiet. Individual consumers are left completely on their own - they rarely manage to get what they are duly entitled to. And so Kadelbach and a friend came up with the brilliant idea: They want to help air passengers get the compensation they deserve -, with the help of a state-of-the-art, online-based legal service. The service puts customers on an equal footing with the airlines.\n' + '\n' + 'By February 2010, the project is ready to be launched, including its core feature: the website with the online calculator that automatically calculates the compensation under EU law. It only takes a few clicks for customers to enter their flight delay - the Flightright team takes care of the rest. The company has been growing steadily ever since: the team of lawyers has been joined by a customer service team, financial accountants, IT and marketing specialists.'
          }
        },
        {
          type: 'Figure',
          key: 'Figure123435',
          value: {
            src: 'https://assets.flightright.net/public/assets/images/website/photos/about_us/about-us-title-4@xs.jpg',
            alt: 'image 123',
            width: '80%',
            height: '400px'
          }
        },
        {
          type: 'Section',
          key: 'Section1234565',
          value: {
            heading: 'David versus Goliath',
            text: 'Nothing is easy to start off with - the airlines are stubborn and want to take every case to court. The tactic of trying to wear consumers down doesn’t work and Flightright wins the vast majority of cases. From then on, the airlines take a more cooperative stance because “when we go to court, it costs the airline around twice as much”, says the founder. “It’s a great feeling knowing that you stuck to your guns as the “little David” up against a multi-billion, euro industry.”\n' + '\n' + 'The company now enforces compensation claims for passengers from across the globe. They are glad to have someone to stand up for them. The recommendation rate of satisfied customers is extremely high. “A lot of customers are committed to advertising our services - even in the departures lounge of the airport. That’s the best sort of praise we can get”, says a delighted Kadelbach.'
          }
        }
      ]
    }
  ]
};

// Using sessionStorage for storing and fetching data
sessionStorage.setItem('pages', JSON.stringify(initialState.pages));

// Initializing react routers and Application
ReactDOM.render(<BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root'));

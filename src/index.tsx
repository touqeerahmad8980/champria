import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import theme from './app/config/mui.config';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import './index.css';

const root = ReactDOM.createRoot(
  	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Router>
				<CssBaseline />
				<App />
			</Router>
		</ThemeProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Third-party imports
import React from "react"
import { createGlobalStyle } from "styled-components"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

const GlobalStyle = createGlobalStyle`
	html, body {
		font-family: 'Basic-Sans';
		font-weight: 500;
		box-sizing: border-box;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		min-height: 100%;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: 0;
		padding: 0;
		color: ${({ theme }) => theme.colors.black0};
		font-size: 18px;
		line-height: 1.6;		
	}

	#__next {
		min-height: 100%;
	}
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	a {
		color: #fff;
		text-decoration: none;
	}

	
/* hide arrows
 Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0 !important;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield !important;
}

`

const GlobalStyling = ({ children }) => (
	<>
		<GlobalStyle />
		{children}
	</>
)

export default GlobalStyling

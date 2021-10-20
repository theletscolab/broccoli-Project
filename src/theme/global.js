import { createGlobalStyle } from 'styled-components/macro'

export const GlobalStyles = createGlobalStyle`
	/* Use resets */
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed,
	figure, figcaption, footer, header, hgroup,
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
 
	*,
	*::before,
	*::after {
		box-sizing: inherit;
	}

	html {
		box-sizing: border-box;
		font-size: 62.5%;


		[type='button'] {
		  appearance: none;
		}
	}

	body {
		background-color: ${props => props.theme.colors.white};
		color: ${props => props.theme.colors.grey900};
		font-size: ${props => props.theme.fontSizes[1]}
	}

	@-ms-viewport {
		width: device-width;
	}	
`

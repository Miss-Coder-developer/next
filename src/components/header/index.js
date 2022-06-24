import React from 'react'

// Img
import Image from "next/image";
import { Content, ContentItem, ImgWrap, Wrapper } from './Header.styles'
// Styles

function Header({color='black'}) {
	
  return (
		<Wrapper>
			<Content>
				<ContentItem>
					<ImgWrap>
						<img
							className="header-logo"
							src={`/static/icons/logo-${color}.png`}
						/>
					</ImgWrap>
				</ContentItem>
				<ContentItem className='header-block'>
					<ImgWrap className='header-block-login'>
						<img className="header-login" src={`/static/icons/login-${color}.png`} />
					</ImgWrap>
					<ImgWrap>
						<img className="header-close" src={`/static/icons/close-${color}.png`} />
					</ImgWrap>
				</ContentItem>
			</Content>
		</Wrapper>
  )
}

export default Header
import Heading from '@/components/heading'
import React from 'react'
import VideoBanner from '@/components/videoBanner'
import CardItem from '@/components/cardItem'
import Wrapper from '@/components/wrapper'
import { WARDROBEDATA } from './WARDROBEDATA'
// Styles
import {WardrobeWrap,BtnOne, BtnItem} from "./Wardrobe.styles"
function Wardrobe() {
  return (
		<Wrapper iconColor={`white`}>
			<VideoBanner videoSrc={"/static/video/Zimmer.mp4"} />
			<WardrobeWrap>
				<Heading text={"My Wardrobe"} />
				<CardItem cards={WARDROBEDATA} />
				<BtnItem>
					<BtnOne>visit shop</BtnOne>
				</BtnItem>
			</WardrobeWrap>
		</Wrapper>
  )
}

export default Wardrobe
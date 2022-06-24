import CardItem from '@/components/cardItem'
import Heading from '@/components/heading'
import NavBtn from '@/components/navButton'
import ReadMore from '@/components/readMore'
import VideoBanner from '@/components/videoBanner'
import Wrapper from '@/components/wrapper'
import React from 'react'
import { PRODUCT } from './PRODUCT'

function Product() {
  return (
		<Wrapper iconColor={`white`}>
			<VideoBanner videoSrc={"/static/video/Kleiderstange.mp4"} />
			<Heading text={"Select your item."} />
			<ReadMore
				desc={
					"Currently you can only evaluate environmental footprint for textiles/apparels. Select the item that belongs closest to the categories available in the list."
				}
			/>
			<CardItem cards={PRODUCT} />
			<NavBtn />
		</Wrapper>
  )
}

export default Product
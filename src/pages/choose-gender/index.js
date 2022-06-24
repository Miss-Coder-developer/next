import CardItem from '@/components/cardItem'
import Heading from '@/components/heading'
import NavBtn from '@/components/navButton'
import ReadMore from '@/components/readMore'
import VideoBanner from '@/components/videoBanner'
import Wrapper from '@/components/wrapper'
import React from 'react'
import { GENDER } from './GENDER'

function ChooseGender() {
  return (
		<Wrapper iconColor={'white'}>
			<VideoBanner videoSrc={"/static/video/Textil2.mp4"} />
			<Heading text={"Choose the items gender."} />
			<ReadMore
				desc={
					"The item’s weight varies depending on the gender it belongs to. Hence, specifying the gender helps us to show you more accurate results specific to your item. Select the gender of the person who uses this item. If you cannot identify, or if it is an unisex item then select Unisex"
				}
			/>
			<CardItem cards={GENDER} width={'187px'} height={'181px'}/>
			<NavBtn />
		</Wrapper>
  )
}

export default ChooseGender
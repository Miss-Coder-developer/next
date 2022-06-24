import React from 'react'
import InputCode from '@/components/inputCode'
import ReadMore from '@/components/readMore'
import VideoBanner from '@/components/videoBanner'
import Wrapper from '@/components/wrapper'
import NavBtn from '@/components/navButton'
import { TimeWrap, DataBuy } from "./Time.styles"
import Heading from '@/components/heading'
function Time() {
  return (
		<Wrapper iconColor={`white`}>
			<VideoBanner videoSrc={"/static/video/Kleiderstange.mp4"} />
			<TimeWrap>
				<Heading text={"When did you buy your item?"} />
				<ReadMore
					desc={`Choose the approximate year when the item was acquired. This helps in taking into consideration the time that has passed since then, and account for the total impact on the environment from washing and drying activity`}
				/>
			</TimeWrap>
			<DataBuy>
				<InputCode length={4} />
			</DataBuy>
			<NavBtn pathPrev="/wardrobe" pathNext="/" />
		</Wrapper>
  )
}

export default Time
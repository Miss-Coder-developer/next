import CardHome from '@/components/cardHome'
import VideoBanner from '@/components/videoBanner'
import Wrapper from '@/components/wrapper'
import React from 'react'
import { CARDHOMEDATA } from "./CARDHOMEDATA"
import { Desc, Title,Text,HomeWrap,HomeInfo, BtnOne,BtnTwo,BtnWrap,BtnItem, Footer } from './Home.styles'
function Home() {
	
  return (
		<Wrapper>
			<VideoBanner videoSrc={"/static/video/Textil.mp4"} />
			<HomeWrap>
				<HomeInfo>
					<Title>Welcome to your Wardrobe!</Title>
					<Desc>
						Calculate your fashion items' footprint in terms of liters of
						water consumed and CO₂ emissions with our footprint calculator!
					</Desc>
					<Text>
						Fashion is the Second most polluting industry in the world. Each
						year:
					</Text>
				</HomeInfo>

				<CardHome cards={CARDHOMEDATA} />
			</HomeWrap>
			<BtnWrap>
				<BtnItem>
					<BtnOne>visit shop</BtnOne>
				</BtnItem>
				<BtnItem>
					<BtnTwo>start calculating</BtnTwo>
				</BtnItem>
			</BtnWrap>
			<Footer>
				* These values are close estimates calculated through different reports
				and calculators.
			</Footer>
		</Wrapper>
  )
}

export default Home
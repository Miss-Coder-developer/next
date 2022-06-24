import Heading from '@/components/heading'
import HeroBanner from '@/components/heroBanner'
import NavBtn from '@/components/navButton'
import Wrapper from '@/components/wrapper'
import React from 'react'

import {Content,Item,Items,BtnWrap,BtnItem,ImgWrap,CountryWrap} from "./SelectCountry.styles"
function SelectCountry() {
  return (
		<Wrapper iconColor={"white"}>
			<CountryWrap>
				<HeroBanner image={"/static/images/selectcountry.webp"} />
				<Heading text={"Specify your item."} />
				<Content image={"/static/images/label.png"}>
					<Item>
						<Items>
							<p>Made in</p>
							<BtnWrap>
								<BtnItem>Select the country</BtnItem>
							</BtnWrap>
						</Items>
						<Items>
							<p>Made out of</p>
							<BtnWrap>
								<BtnItem disable>Choose the materials</BtnItem>
							</BtnWrap>
						</Items>
						<Items>
							<p>Care instructions</p>
							<BtnWrap>
								<BtnItem disable>Choose washing habits</BtnItem>
							</BtnWrap>
						</Items>
						<Items>
							<p>Or go straight to your RESULT </p>
							<ImgWrap>
								<img src="/static/images/barcode.png" alt="barcode" />
							</ImgWrap>
						</Items>
					</Item>
				</Content>
			</CountryWrap>

			<NavBtn />
		</Wrapper>
  )
}

export default SelectCountry
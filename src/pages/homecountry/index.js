import CardItem from '@/components/cardItem'
import Heading from '@/components/heading'
import HeroBanner from '@/components/heroBanner'
import ReadMore from '@/components/readMore'
import Wrapper from '@/components/wrapper'
import React from 'react'

function Homecountry() {

  return (
		<>
			<Wrapper iconColor={`white`}>
				<HeroBanner image={"/static/images/homecountry.webp"} />
				<Heading text={"Where did you wear your item the most?"} />
				<ReadMore
					desc={`If you have moved between countries since you acquired the item, then select the country where you used the item for majority of the time period. This information helps us in taking into consideration the geographical reference while calculating the footprint of your item’s laundry.`}
				/>
				
			</Wrapper>
		</>
  )
}

export default Homecountry
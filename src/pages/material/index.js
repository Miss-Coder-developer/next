import Heading from '@/components/heading'
import ReadMore from '@/components/readMore'
import SelectMaterial from '@/components/SelectMaterial'
import VideoBanner from '@/components/videoBanner'
import Wrapper from '@/components/wrapper'
import React from 'react'
import { useState } from 'react'
import { MATERIALDATA } from './MATERIALDATA'

function Material() {
	const [count,setCount] = useState(1)
	
  return (
		<Wrapper iconColor={'white'}>
			<VideoBanner videoSrc={"/static/video/Spule.mp4"} />
			<Heading text={"Select the materials blend and its proportion."} />
			<ReadMore
				desc={
					"Material blend is the composition of different types of materials that your item is made up of. This information can be found on the item’s label. In the drop down menu select a material and then enter the respective percentage composition in the text box. Use the ‚+‘ icon to add the remaining materials and ‚-‚ to delete. Different materials have varying impact on the environment due to the different techniques used in cultivation and manufacturing. If your item has more than 3 blends mentioned on the label, leave us feedback with a picture"
				}
			/>
			<div>
				<div>
					<div>#{count}</div>
					<div>
						<SelectMaterial materialData={MATERIALDATA}/>
					</div>
					<div>
						<input type="number" />	
					</div>
					<div>action</div>
				</div>
			</div>
		</Wrapper>
  )
}

export default Material
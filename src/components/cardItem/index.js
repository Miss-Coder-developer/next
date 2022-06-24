import React from "react"
import { Wrapper, Items, Item, Icon, AddText } from "./CardItem.styles"
function CardItem({ cards, width, height }) {
	return (
		<Wrapper>
			{cards &&
				cards.map(card => {
					const { icon, text,id } = card
					return (
						<Items key={id}>
							<Item width={width} height={height}>
								<Icon>
									<img src={icon} alt={text} />
								</Icon>
								<AddText>{text}</AddText>
							</Item>
						</Items>
					)
				})}
		</Wrapper>
	)
}

export default CardItem

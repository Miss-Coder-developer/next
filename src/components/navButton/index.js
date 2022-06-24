import { useRouter } from "next/router"
import React from "react"
import Link from "next/link"
// Styles
import { NavWrap, NavItem } from "./NavButton.styles"

function NavBtn({ pathPrev = "", pathNext = "" }) {
	return (
		<NavWrap>
			<NavItem>
				<Link href={pathPrev}>
					<a>
						<img src={"/static/icons/arrow-white.png"} alt="arrow-back" />
						<span>Back</span>{" "}
					</a>
				</Link>
			</NavItem>
			<NavItem>
				<Link href={pathNext}>
					<a>
						<span>Next</span>
						<img
							src={"/static/icons/arrow-white.png"}
							alt="arrow-back"
							className="arrow-next"
						/>
					</a>
				</Link>
			</NavItem>
		</NavWrap>
	)
}

export default NavBtn

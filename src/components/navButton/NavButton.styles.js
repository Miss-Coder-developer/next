import styled from "styled-components";

export const NavWrap = styled.div`
			display: flex;
			align-items: center;
			justify-content: space-between;
			text-transform: uppercase;
			font-weight: bold;
			font-size: 14px;
			position: absolute;
			bottom: 44px;
			width: 100%;
			text-align: center;
			transform: translate(-50%, -50%);
			left: 50%;
			padding: 0 20px;
			@media only screen and (max-width: 768px) {
				width: 100%;
				max-width: 607px;
			}
		`

export const NavItem = styled.div`
			width: 100%;
			max-width: 72px;
			a {
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
			.arrow-next {
				transform: rotate(180deg);
			}
		`
import styled from "styled-components"
export const WardrobeWrap = styled.div`
	margin-top: 99px;
	@media only screen and (max-width: 768px) {
		margin-top: 50px;
	}
`
export const Title = styled.h1`
	font-size: 30px;
	line-height: 36px;
	color: #fff;
	font-family: "Tiempons";
	text-shadow: 0px 2px 2px #00000099;
`
export const BtnItem = styled.div`
			text-transform: uppercase;
			font-weight: bold;
			font-size: 14px;
			position: absolute;
			bottom: 44px;
			width: 100%;
			text-align: center;
			transform: translate(-50%, -50%);
			left: 50%;
		`
export const BtnOne = styled.button`
			all: unset;
			border: 1px solid ${({ theme }) => theme.colors.black0};
			border-radius: 2px;
			color: ${({ theme }) => theme.colors.black0};
			padding: 15px;
			cursor: pointer;
		`
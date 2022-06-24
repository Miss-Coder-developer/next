// Third-party imports
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

// Global imports
import { Flex } from "@/components/generic"
import LoginForm from "@/components/auth/LoginForm"
import { Layout, StaiyLogo } from "@/components"
import { authActions } from "@/redux/actions"
import { useRouter } from "next/router"
import ConfirmAccountForm from "@/components/auth/ConfirmAccountForm"

// Local imports

////////////////////////////////////////////////////////////////////////////////

const ConfirmAccount = () => {
	const router = useRouter()

	const dispatch = useDispatch()

	const { registerSuccess } = router.query

	const {
		verifyAccount: { success, pending },
	} = useSelector(({ requests }) => requests)

	const { _id } = useSelector(({ auth }) => auth)

	const confirmAccountFormProps = {
		onSubmit: async values => {
			dispatch(authActions.confirmAccount(values))
		},
	}

	useEffect(() => {})

	if (success || _id) {
		router.push({ pathname: "/login", query: { verifySuccess: success } })
	}

	useEffect(() => {}, [])

	return (
		<Layout>
			<StaiyLogo />
			{registerSuccess === "true" && (
				<p
					style={{
						fontSize: "0.7em",
						color: "#232323",
						border: "solid 0.5px #232323",
						fontFamily: "Basic Sans",
						padding: "2px",
					}}
				>
					We sent you an email with a code, please enter it here in order to
					verify your account
				</p>
			)}
			{pending ? (
				<p style={{ color: "black", fontSize: "0.9em" }}>Loading...</p>
			) : (
				<div style={{ display: "block", margin: "auto" }}>
					<ConfirmAccountForm {...confirmAccountFormProps} />
				</div>
			)}
		</Layout>
	)
}

ConfirmAccount.requireAuth = false

export default ConfirmAccount

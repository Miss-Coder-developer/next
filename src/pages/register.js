// Third-party imports
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

// Global imports
import { Flex } from "@/components/generic"
import LoginForm from "@/components/auth/LoginForm"
import { Layout, StaiyLogo } from "@/components"
import { authActions } from "@/redux/actions"
import { useRouter } from "next/router"
import AuthForm from "@/components/auth/AuthForm"
import Spinner from "@/components/generic/common/Spinner/Spinner"
// Local imports

////////////////////////////////////////////////////////////////////////////////

const Login = () => {
	const router = useRouter()

	const dispatch = useDispatch()

	const {
		authenticate: { success, pending, error },
	} = useSelector(({ requests }) => requests)

	const authFormProps = {
		onSubmit: async values => {
			dispatch(authActions.authenticate(values))
		},
	}

	if (success) {
		router.push({ pathname: "/confirm", query: { registerSuccess: true } })
	}

	return (
		<Layout>
			<StaiyLogo />
		
			{pending ? (
				// <p style={{ color: "black", fontSize: "0.9em" }}>Loading...</p>
				<Spinner />
			) : (
				<div style={{ display: "block", margin: "auto" }}>
					<AuthForm {...authFormProps} error={error} />
				</div>
			)}
		</Layout>
	)
}

Login.requireAuth = false

export default Login

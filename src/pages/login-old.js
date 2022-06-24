// Third-party imports
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

// Global imports
import { Flex } from "@/components/generic"
import LoginForm from "@/components/auth/LoginForm"
import { Layout, StaiyLogo } from "@/components"
import { authActions } from "@/redux/actions"
import { useRouter } from "next/router"
import Spinner from "@/components/generic/common/Spinner/Spinner"

// Local imports

////////////////////////////////////////////////////////////////////////////////

const Login = () => {
	const router = useRouter()
	const { verifySuccess } = router.query

	const dispatch = useDispatch()

	const {
		signin: { success, pending, error },
	} = useSelector(({ requests }) => requests)

	const { _id } = useSelector(({ auth }) => auth)

	const authFormProps = {
		onSubmit: async values => {
			debugger
			dispatch(authActions.signIn(values))
		},
	}

	if (success || _id) {
		router.push("/")
	}
	return (
		<Layout>
			<StaiyLogo />
			{pending ? (
				<Spinner />
			) : (
				<div style={{ display: "block", margin: "auto" }}>
					{verifySuccess == "true" && (
						<p
							style={{
								fontSize: "0.7em",
								color: "#54ba54",
								border: "solid 0.5px #54ba54",
								fontFamily: "Basic Sans",
								padding: "2px",
							}}
						>
							Your account was successfully verified!. Now you can log in
						</p>
					)}
					<LoginForm {...authFormProps} error={error} />
				</div>
			)}
		</Layout>
	)
}

Login.requireAuth = false

export default Login

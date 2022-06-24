// Third-party imports
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { guardrobeActions } from "@/redux/actions"

// Global imports
import { Flex } from "@/components/generic"
import LoginForm from "@/components/auth/LoginForm"
import { Layout, StaiyLogo } from "@/components"
import { getJwtToken } from "../lib"
import GuardrobeMain from "@/components/guardrobe/GuardrobeMain"
import Spinner from "@/components/generic/common/Spinner/Spinner"

// Local imports

////////////////////////////////////////////////////////////////////////////////

const Guardrobe = () => {
	const dispatch = useDispatch()
	const token = getJwtToken(window)
	const { guardrobe } = useSelector(({ guardrobe }) => guardrobe)

	const {
		fetchGuardrobe: { success, pending, error },
	} = useSelector(({ requests }) => requests)

	useEffect(() => {
		dispatch(guardrobeActions.fetchGuardrobe(token))
	}, [dispatch])

	return (
		<Layout>
			<StaiyLogo />
			{pending ? <Spinner /> : <GuardrobeMain data={guardrobe} />}
		</Layout>
	)
}

Guardrobe.requireAuth = true

export default Guardrobe

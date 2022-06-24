// Third-party imports
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

// Global imports
import { useBoolean } from "@/hooks"
import { formFieldsActions } from "@/redux/actions"
import {
	Layout,
	StaiyLogo,
	FootprintCalculationResults,
	FootprintCalculatorForm,
	FootprintIntroduction,
} from "@/components"
import FootPrintDesclaimer from "@/components/footprint/FootprintDesclaimer/Disclaimer"
import FootprintPreForm from "@/components/footprint/FootprintPreForm/FootprintPreFrom"
import { FootprintBenchmark } from "@/components/footprint/FootprintBenchmark"
import { SocialMediaShareButtons } from "@/components/socialMedia"
import { getJwtToken } from "../lib"

// import { SocialMediaShareButtons } from "../components/footprint"

// Local imports

////////////////////////////////////////////////////////////////////////////////

const Homepage = () => {
	// Hooks
	const [isFormCompleted, completeForm, unCompleteForm] = useBoolean(false)
	const [isFormStarted, startForm] = useBoolean(false)
	const dispatch = useDispatch()
	const { countries, itemTypes, materials } = useSelector(
		({ formFields }) => formFields
	)

	const token = getJwtToken(window)

	const {
		waterFootprint,
		CO2Footprint,
		eqCO2KmByCar,
		eqDaysDrinkWater,
		positionUniqueCombination,
		positionGeneral,
		percentage,
		item,
		totalUniqueCombination,
		totalGeneral,
	} = useSelector(({ formFields }) => formFields)

	useEffect(() => {
		dispatch(formFieldsActions.fetchFormFields())
	}, [dispatch])

	useEffect(() => {
		if (waterFootprint && CO2Footprint) {
			window.scrollTo(0, 0)
			completeForm()
		}
	}, [waterFootprint, CO2Footprint, completeForm])

	// Props
	const footprintCalculatorFormProps = {
		countries,
		itemTypes,
		materials,
		onSubmit: async values => {
			dispatch(formFieldsActions.calculateFootprint(values, token))
		},
	}

	const setNotCompleted = () => {
		unCompleteForm()
	}

	return (
		<Layout>
			<StaiyLogo />
			{!isFormStarted ? (
				<FootprintPreForm action={startForm} setNotCompleted={setNotCompleted} />
			) : (
				<>
					{isFormCompleted ? (
						<>
							<FootprintCalculationResults
								setNotCompleted={setNotCompleted}
								waterFootprint={waterFootprint}
								CO2Footprint={CO2Footprint}
								eqCO2KmByCar={eqCO2KmByCar}
								eqDaysDrinkWater={eqDaysDrinkWater}
							/>
							<FootprintBenchmark
								data={{
									positionUniqueCombination,
									positionGeneral,
									percentage,
									item,
									totalUniqueCombination,
									totalGeneral,
								}}
							/>
							<SocialMediaShareButtons />
						</>
					) : (
						<>
							<FootprintIntroduction unCompleteForm={unCompleteForm} />
							<FootprintCalculatorForm {...footprintCalculatorFormProps} />
							<FootPrintDesclaimer />
						</>
					)}
				</>
			)}
		</Layout>
	)
}

Homepage.requireAuth = true

export default Homepage

import useHideShow from '@/hooks/useHideShow';
import React,{useState} from 'react';
// Styles
import { ImgWrap, SelectBody, SelectHeader, SelectTitle, SelectWrap,SelectItem } from './SelectMaterial.styles';

function SelectMaterial({materialData}) {
  const [selectValue, setSelectValue] = useState(null);
  const [mainValue, setMainValue] = useState({id:materialData[0].id,icon:materialData[0].icon,text:materialData[0].text})
  const [active, setActive] = useState(false);
  const [headerRef, childrenRef, setShowLinks] = useHideShow() 
  
  return (
		<SelectWrap>
			<select
				className="form-select"
				defaultValue="Acetate"
				style={{ display: "none" }}
			>
				{selectValue ? (
					<option value={selectValue.text}>{selectValue.text}</option>
				) : (
					<option value={mainValue.text}>{mainValue.text}</option>
				)}
			</select>
			<div
				className={`select-custom ${active ? "is-active" : ""}`}
				onClick={() => setActive(!active)}
			>
				<SelectHeader onClick={()=>setShowLinks(show => !show)}>
					<ImgWrap>
						{selectValue ? (
							<img src={selectValue.icon} alt={selectValue.text} />
						) : (
							<img src={mainValue.icon} alt={mainValue.text} />
						)}
					</ImgWrap>
					<SelectTitle>
						{selectValue ? <>{selectValue.text}</> : <>{mainValue.text}</>}
					</SelectTitle>
				</SelectHeader>
				<SelectBody ref={headerRef}>
					<div ref={childrenRef}>
						{materialData &&
							materialData.map(item => {
								const { icon, id, text } = item
								if (text === mainValue.text) return
								return (
									<SelectItem
										key={id}
										onClick={() => {
											setSelectValue({ icon, id, text })
											setShowLinks(show => !show)
											}}
									>
										<ImgWrap>
											<img src={icon} alt={text} />
										</ImgWrap>
										<p>{text}</p>
									</SelectItem>
								)
							})}
					</div>
				</SelectBody>
			</div>
		</SelectWrap>
  )
}

export default SelectMaterial
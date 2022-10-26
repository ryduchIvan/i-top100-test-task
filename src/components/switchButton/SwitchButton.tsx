import  Switch from "../../assets/img/two-arrow.svg";
import "./switchButton.scss";

interface SwitchButtonProps {
	switchCurrency: () => void
}

export const SwitchButton = ({switchCurrency} : SwitchButtonProps) => {
	return (
			<div className="switch__button-box"
				onClick={switchCurrency}
			>
			<img src={Switch} alt="switch" className="switch__button-img" />
		</div>
	)
}
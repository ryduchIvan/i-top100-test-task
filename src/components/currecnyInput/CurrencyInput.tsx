import {Form} from "react-bootstrap";
import { Currencies } from "../../type";
import "./currencyInput.scss"
interface CurrencyInputProps {
	currencies: string[] | undefined,
	value: number,
	handleAmount:(amount: number) => void,
	handleCurrency:(value: Currencies) => void,
	defaultCurrency: Currencies
}

export const CurrencyInput = ({currencies, value,  handleAmount, handleCurrency, defaultCurrency}: CurrencyInputProps) =>{
	return (
		<div className="d-flex justify-content-center main__field">
			    <Form.Select 
					aria-label="Default select example" 
					className="main__select"
					onChange={(event) =>{
						let value = event.target.value as Currencies;
						handleCurrency(value);
					}}
					value={defaultCurrency}
					>
					{currencies && currencies.map(currency => 
					<option
					 key={currency}
					 value={currency}
					 className="main__select-option"
					 >{currency}
					 </option>) }
    			</Form.Select>
				<Form className="">
        			<input
					type="email" 
					placeholder="100" 
					className="main__input" 
					onChange={(event) => {
					let amount = +event.target.value;
					handleAmount(amount)}}
					value={value}
					/>
				</Form>
		</div>
	)
}
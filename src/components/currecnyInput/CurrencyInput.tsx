import {Form} from "react-bootstrap";
import { Currencies } from "../../type";
import "./currencyInput.scss"
interface CurrencyInputProps {
	currencies: string[] | undefined,
	value: number,
	handleAmount:(amount: number) => void,
	handleCurrency:(value: Currencies) => void
}

export const CurrencyInput = ({currencies, value,  handleAmount, handleCurrency}: CurrencyInputProps) =>{
	return (
		<div className="row align-items-end main__field">
			    <Form.Select 
					aria-label="Default select example" 
					className="main__select col-6"
					onChange={(event) =>{
						let value = event.target.value as Currencies;
						handleCurrency(value);
					}}
					>
					{currencies ? currencies.map(currency => 
					<option
					 key={currency}
					 value={currency}
					 className="main__select-option"
					 >{currency}
					 </option>) : <option>UAH</option>}
    			</Form.Select>
				<Form className="col-6">
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
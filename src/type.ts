export type Currencies = "USD" | "EUR" | "CAD" | "CNY" | "JPY" | "TRY" | "UAH";
export type Rates = {
	USD:number, 
	EUR: number, 
	CAD: number, 
	CNY: number, 
	JPY: number, 
	TRY: number,
	UAH: number
}

export type ApiData = {
	success: boolean,
	timestamp:number, 
	base: "UAH", 
	data: string, 
	rates: Rates
}
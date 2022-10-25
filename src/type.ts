export type Rates = {
	USD:number, 
	EUR: number, 
	CAD: number, 
	CNY: number, 
	JPY: number, 
	TRY: number
}

export type ApiData = {
	success: boolean,
	timestamp:number, 
	base: "UAH", 
	data: string, 
	rates: Rates
}
import "./header.scss";
import { Rates } from "../../type";
import {Navbar, Container, Offcanvas, Nav, NavDropdown} from "react-bootstrap"

interface HeaderProps {
	USD: number | undefined,
	EUR: number | undefined
}

export const Header = ({USD, EUR}: HeaderProps) =>{
	const correctAmount = (currecny: number) =>{
		const amount = 1 / currecny;
		return amount.toFixed(4);
	}
	return (
		<>
		<Navbar  expand="lg" className=" header">
		  <Container fluid="sm">
			<Navbar.Brand>
				<img src="https://next.privat24.ua/assets/de8ddb208f4b5f95b48c.svg" alt="logo"/>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
			<Navbar.Offcanvas
			  id={`offcanvasNavbar-expand-"lg"`}
			  aria-labelledby={`offcanvasNavbarLabel-expand-"lg"`}
			  placement="end"
			>
			  <Offcanvas.Header closeButton>
				<Offcanvas.Title id={`offcanvasNavbarLabel-expand-"lg"}`}>
				  Offcanvas
				</Offcanvas.Title>
			  </Offcanvas.Header>
			  <Offcanvas.Body>
				<Nav className="flex-grow-1 pe-3 header__nav align-items-center">
				  <Nav.Link href="#action1">Гаманець</Nav.Link>
				  <NavDropdown
					title="Сервіси"
					id={`offcanvasNavbarDropdown-expand-"lg"`}
				  >
					<NavDropdown.Item href="#action3">Перекази</NavDropdown.Item>
					<NavDropdown.Item href="#action4">
					  Звязок
					</NavDropdown.Item>
					<NavDropdown.Item href="#action3">Депозити</NavDropdown.Item>
					<NavDropdown.Item href="#action4">
					  Кредити
					</NavDropdown.Item>
					<NavDropdown.Item href="#action4">
					  Послуги
					</NavDropdown.Item>
				  </NavDropdown>
				  <Nav.Link href="#action2">Архів</Nav.Link>
				</Nav>
				<Nav className="justify-content-end flex-grow-1 pe-3 header__nav align-items-center">
				  <Nav.Link className="header__currency">{
					USD ? "$" +  correctAmount(USD) : "$" + 30
				  }</Nav.Link>
				  <Nav.Link className="header__currency">{
					EUR ? "$" +  correctAmount(EUR) : "$" + 40
				  }</Nav.Link>
				  <Nav.Link>Архів</Nav.Link>
				</Nav>
			  </Offcanvas.Body>
			</Navbar.Offcanvas>
		  </Container>
		</Navbar>
	</>
	)
}
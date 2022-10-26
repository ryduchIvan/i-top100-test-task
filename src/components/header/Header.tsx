//CSS
import "./header.scss";
//Components
import {Navbar, Container, Offcanvas, Nav, NavDropdown} from "react-bootstrap"
//Icons
import Logo from "../../assets/img/logo.svg";

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
				<img src={Logo} alt="logo" className="header__logo"/>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
			<Navbar.Offcanvas
			  id={`offcanvasNavbar-expand-"lg"`}
			  aria-labelledby={`offcanvasNavbarLabel-expand-"lg"`}
			  placement="end"
			>
			  <Offcanvas.Header closeButton>
			  </Offcanvas.Header>
			  <Offcanvas.Body>
			  	<Nav className="header__nav align-items-center d-f w-100 justify-content-start justify-content-lg-end">
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
				 	<Nav.Link className="header__currency">{
						USD ? "$" +  correctAmount(USD) : "$" + 30
				  	}</Nav.Link>
				  	<Nav.Link className="header__currency">{
						EUR ? "€" +  correctAmount(EUR) : "€" + 40
				  	}</Nav.Link>
				  <Nav.Link>Аккаунт</Nav.Link>
				</Nav>
			  </Offcanvas.Body>
			</Navbar.Offcanvas>
		  </Container>
		</Navbar>
	</>
	)
}
//Components
import { Container, Nav, NavLink , NavDropdown} from "react-bootstrap";
//CSS
import "./footer.scss";
export const Footer = () =>{
	return (
		<footer className="footer">
			<Container>
				<div className="row">
					<div className="col-8">
						<Nav className="footer__nav">
							<NavLink className="footer__link">Відділення</NavLink>
							<NavLink className="footer__link">Регламент і тарифи</NavLink>
							<NavLink className="footer__link">Про персональні дані</NavLink>
							<NavLink className="footer__link">Безпека</NavLink>
							<NavLink className="footer__link">API</NavLink>
							<NavLink className="footer__link">Хочу до команди</NavLink>
						</Nav>
						<div className="row footer__phones">
							<div className="col-5 footer__phone">
								<span>3700</span> безкоштовно з мобілних
							</div>
							<div className="col-6 footer__phone">
								<span>38-073-716-11-31</span> для дзвінків з-за кордону
							</div>
						</div>
						<div className="footer__copyright">
							© 2022 ПриватБанк Ліцензія № 22 від 19.03.1992
						</div>
					</div>
					<div className="col-4 row">
					<NavDropdown title="Мова" id="nav-dropdown" className="col-2 py-3">
        				<NavDropdown.Item eventKey="4.1">
							<img src="https://cdn.privat24.ua/icons/file/UA.svg" alt="flag" className="footer__flag" />
							 Українська
						</NavDropdown.Item>
        				<NavDropdown.Item eventKey="4.2">
							<img src="https://cdn.privat24.ua/icons/file/US.svg" alt="flag" className="footer__flag"/>
							 Англійська
						</NavDropdown.Item>
     				 </NavDropdown>
					 <Nav className="col-8 mx-4 footer__nav">
						<Nav.Link className="footer__link">Підтримка</Nav.Link>
						<Nav.Link className="footer__link">Донати</Nav.Link>
					 </Nav>
					</div>
				</div>
			</Container>
		</footer>
	)
}
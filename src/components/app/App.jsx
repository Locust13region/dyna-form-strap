import { useState } from "react";
import { Icon } from "@iconify/react";
import SearchField from "../search";
import AccordionMenu from "../accordion";
import items from "../menu-items";
import {
	Row,
	Col,
	Container,
	Offcanvas,
	OffcanvasHeader,
	OffcanvasBody,
} from "reactstrap";
import "../app/app.css";

function App() {
	const [menu, setMenu] = useState(items);
	const [open, setOpen] = useState("0");

	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Container
			fluid
			className="cf p-2"
		>
			<Row>
				<Col className="d-block d-sm-none">
					<Icon
						className="burger"
						icon="iconamoon:menu-burger-horizontal"
						onClick={toggle}
					/>
					<Offcanvas
						isOpen={isOpen}
						toggle={toggle}
					>
						<OffcanvasBody>
							<Menu
								menu={menu}
								setMenu={setMenu}
								open={open}
								setOpen={setOpen}
							/>
						</OffcanvasBody>
					</Offcanvas>
				</Col>
			</Row>

			<Row>
				<Col
					className="d-none d-sm-block"
					sm="4"
					lg="3"
				>
					<Menu
						menu={menu}
						setMenu={setMenu}
						open={open}
						setOpen={setOpen}
					/>
				</Col>
				<Col
					className="bg-light border mt-2 mt-sm-0"
					sm="8"
					lg="9"
				>
					.col2 text
				</Col>
			</Row>
		</Container>
	);
}

export default App;

const Menu = ({ menu, setMenu, open, setOpen }) => {
	return (
		<>
			<SearchField
				setMenu={setMenu}
				setOpen={setOpen}
			/>
			<AccordionMenu
				menu={menu}
				open={open}
				setOpen={setOpen}
			/>
		</>
	);
};

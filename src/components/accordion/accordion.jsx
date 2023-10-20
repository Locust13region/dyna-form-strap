import {
	Accordion,
	AccordionBody,
	AccordionHeader,
	AccordionItem,
	Button,
} from "reactstrap";

const AccordionMenu = ({ menu, open, setOpen }) => {
	const toggle = (id) => {
		if (open === id) {
			setOpen();
		} else {
			setOpen(id);
		}
	};
	return (
		<Accordion
			open={open}
			toggle={toggle}
		>
			{menu.map(({ header, headerId, content }, index) => {
				return (
					<AccordionItem key={index}>
						<AccordionHeader targetId={headerId}>{header}</AccordionHeader>
						{content.length !== 0 && (
							<AccordionBody accordionId={headerId}>
								{content.map(({ icon, name }, index) => {
									return (
										<Button
											key={index}
											className="cf mb-1 text-start"
											block
											color="primary"
											size="sm"
											type="text"
										>
											{icon}
											{name}
										</Button>
									);
								})}
							</AccordionBody>
						)}
					</AccordionItem>
				);
			})}
		</Accordion>
	);
};

export default AccordionMenu;

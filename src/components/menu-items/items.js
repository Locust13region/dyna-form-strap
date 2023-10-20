import { Icon } from "@iconify/react";
const items = [
	{
		header: "Basic",
		headerId: "0",
		content: [
			{
				icon: (
					<Icon icon="material-symbols:text-select-move-forward-character" />
				),
				name: "Text Field",
				field: "",
			},
			{
				icon: <Icon icon="material-symbols:text-snippet-outline-sharp" />,
				name: "Text Aria",
				field: "",
			},
			{
				icon: <Icon icon="material-symbols:date-range-outline-sharp" />,
				name: "Date",
				field: "",
			},
		],
	},
	{
		header: "Advanced",
		headerId: "1",
		content: [
			{
				icon: <Icon icon="material-symbols:local-post-office-outline-sharp" />,
				name: "E-mail",
				field: "",
			},
			{
				icon: <Icon icon="material-symbols:http" />,
				name: "Url",
				field: "",
			},
			{
				icon: (
					<Icon
						icon="material-symbols:phone-enabled-outline"
						rotate={1}
					/>
				),
				name: "Phone",
				field: "",
			},
			{
				icon: <Icon icon="material-symbols:home-work-outline" />,
				name: "Address",
				field: "",
			},
		],
	},
];
export default items;

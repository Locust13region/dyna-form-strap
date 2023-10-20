import { useState } from "react";
import { Icon } from "@iconify/react";
import items from "../menu-items";

const SearchField = ({ setMenu, setOpen }) => {
	const [search, setSearch] = useState("");

	const handleOnClick = () => {
		setSearch("");
		menuItems("");
	};
	const handleOnChange = (v) => {
		setSearch(v);
		menuItems(v);
	};

	const menuItems = (search) => {
		if (search === "") {
			setMenu(items);
			setOpen("0");
		} else {
			const searchItems = items.map((item) => {
				const searchItem = {
					...item,
					content: item.content.filter((button) =>
						button.name.toLowerCase().includes(search.toLowerCase())
					),
				};
				return searchItem;
			});
			setMenu(searchItems);
			setOpen(
				searchItems.map((item) =>
					item.content.length === 0 ? "" : item.headerId
				)
			);
		}
	};

	const clearSearchField = () => {
		return search !== "" ? (
			<Icon
				icon="material-symbols:cancel-outline"
				color="gray"
				onClick={() => handleOnClick()}
			/>
		) : null;
	};

	return (
		<div className="search mb-2 w-100">
			<input
				type="text"
				placeholder="Search field(s)"
				onChange={(e) =>
					console.log(e.target.value) || handleOnChange(e.target.value)
				}
				value={search}
			></input>
			{clearSearchField()}
		</div>
	);
};

export default SearchField;

import * as React from "react";
import {ListItem} from './components/list-item'
import {getData} from './utils/data'
import {PluginData, Item} from './types'

const displayItems = (items: Item[]) => {
	return items.map((item) => {
		return <ListItem
			key={`item-${item.id}`}
			item={item}
			onChange={(value, item) => {console.log(value, item)}}
		/>
	})
}

export const ReactView = () => {
	const [data, setData] = React.useState<PluginData|null>(null);

	React.useEffect(() => {
		getData().then((value) => {
			setData(value)
		})
	}, [])

	const items = displayItems(data?.list?.items || [])

	return (<>
		<h4>Obsidian Chef List</h4>
		{items}
	</>)
};

import { accessSync, writeFileSync} from 'fs'
import defaultData from './default-db'

export async function getRoot() {
	return `${(this.app.vault.adapter as any).getBasePath()}/.obsidian/plugins/obsidian-chef/`
}

export async function createDataFile() {
	// console.log(this.app.workspace.getActiveFile()?.parent?.path, this.app.vault.getRoot().vault.adapter.read
	const root = await getRoot()
	try {
		accessSync(`${root}/data.json`)
		console.log('File already exists!')
	} catch (error) {
		if (error.code === 'ENOENT') {
			console.log('File does not exist. Creating file...')
			writeFileSync(`${root}/data.json`, defaultData)
			console.log('File created!')
		} else {
			throw error
		}
	}
}
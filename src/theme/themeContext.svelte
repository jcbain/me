<script lang="ts">
	import { setContext, onMount } from 'svelte';
	import {writable} from 'svelte/store';
	import { themes as _themes, defaultTheme } from './themes';
	import type { Theme as ThemeType} from './themes';

	let themes: [ThemeType] = [..._themes];
	let _current: string = themes[0].name;

	
	const getCurrentTheme: (name: string) => ThemeType | undefined = (name) => themes.find(h => h.name === name);
  	// set up Theme store, holding current theme object
  	const Theme = writable(getCurrentTheme(_current));

	setContext('theme', {
    // provide Theme store through context
		theme: Theme,
		toggle: () => {
		// update internal state
			let _currentIndex = themes.findIndex(h => h.name === _current)
			_current = themes[_currentIndex === themes.length - 1 ? 0 : (_currentIndex += 1)].name
			// update Theme store
			Theme.update(t => ({ ...t, ...getCurrentTheme(_current) }))
		},
  	})

	onMount(() => {
    	// set CSS vars on mount
    	setRootColors(getCurrentTheme(_current ) || defaultTheme)
  	})

	// sets CSS vars for easy use in components
	// ex: var(--theme-background)
	const setRootColors: (theme: ThemeType) => void  = theme => {
		for (let [prop, value] of Object.entries(theme.values)) {
		let varString = `--theme-${prop}`
		document.documentElement.style.setProperty(varString, value)
		}
		document.documentElement.style.setProperty('--theme-name', theme.name)
	}
</script>


<slot />
import { resolve } from 'path'

const icons = ['Phone', 'Alarm', 'Home', 'Rabbit' , 'Rabbitvariant', 'Play', 'Pause']

export default function () {
	this.nuxt.hook('components:dirs', (dirs) => {
		dirs.push({
			path: resolve('node_modules/vue-material-design-icons'),
			prefix: 'MIcon',
			pattern: `**/@(${icons.join('|')}).vue`,
		})
	})
}
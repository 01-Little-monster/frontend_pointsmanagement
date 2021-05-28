module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				'src': '@',
				'assets': '@/assets',
				'components': '@/components',
				'network': '@/network',
				'views': '@/views',
				'router': '@/router',
				'store': '@/store'
			}
		}
	}
}
/** @type {import('next').NextConfig} */

const nextConfig = {
    sassOptions: {
		includePaths: ['@/src/scss'],
		prependData: `@import 'abstract/_breakpoints';
		 @import 'abstract/_variables';
		 @import 'abstract/_functions';
		 @import 'abstract/_typography';`,
	},
};

export default nextConfig;

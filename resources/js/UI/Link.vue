<template>
	<inertia-link
		:href="href"
		class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md text-xs text-white hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"
	>
		<slot></slot>
	</inertia-link>
</template>

<script>
export default {
	props: {
		href: {
			type: String,
			defualt: route().current(),
		},
	},
};
</script>

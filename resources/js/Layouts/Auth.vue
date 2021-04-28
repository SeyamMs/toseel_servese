<template>
	<main class="flex items-center justify-center min-h-screen bg-gray-100">
		<teleport to="head">
			<title v-if="title">سفالاني | {{ title }}</title>
			<title v-else>سفالاني | الادارة</title>
		</teleport>
		<div class="flex-grow max-w-sm">
			<slot />
		</div>
	</main>
</template>

<script>
export default {
	props: ["title"],
};
</script>

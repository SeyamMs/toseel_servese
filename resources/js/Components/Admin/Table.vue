<template>
	<div class="md:grid md:grid-cols-3 md:gap-4">
		<div class="md:col-span-3">
			<div class="px-4 sm:px-0">
				<div class="flex items-center justify-between">
					<h1 class="text-xl text-gray-900">
						<slot name="title"></slot>
					</h1>
					<div>
						<slot name="actions"></slot>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-5 md:mt-0 md:col-span-3">
			<div
				class="max-w-full overflow-x-scroll bg-white rounded-lg shadow scrolling-area"
			>
				<table class="w-full whitespace-no-wrap">
					<slot name="tr"></slot>
					<slot name="rows"></slot>
				</table>
			</div>
		</div>
		<div class="mt-5 md:mt-0 md:col-span-3">
			<Pagination :links="links" />
		</div>
	</div>
</template>

<script>
import Pagination from "@/UI/Pagination";

export default {
	props: ["links"],

	components: {
		Pagination,
	},
};
</script>

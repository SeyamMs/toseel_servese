<template>
	<div class="grid gap-6">
		<div class="">
			<div class="px-4 sm:px-0">
				<h3 class="text-xl font-medium text-gray-900">
					<slot name="title"></slot>
				</h3>

				<p class="mt-1 text-sm text-gray-600">
					<slot name="description"></slot>
				</p>
			</div>
		</div>

		<div class="">
			<form @submit.prevent="$emit('submitted')">
				<div class="overflow-hidden shadow sm:rounded-md">
					<div class="px-4 py-5 bg-white sm:p-6">
						<div class="grid grid-cols-6 gap-6">
							<slot name="form"></slot>
						</div>
					</div>

					<div
						class="flex items-center justify-end px-4 py-3 text-right bg-gray-50 sm:px-6 space-s-3"
						v-if="hasActions"
					>
						<slot name="actions"></slot>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import { computed } from "vue";

export default {
	setup(props, { slots }) {
		const hasActions = computed(() => !!slots.actions);

		return { hasActions };
	},
};
</script>

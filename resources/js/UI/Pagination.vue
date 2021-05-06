<template>
	<div
		class="flex flex-wrap items-center justify-center my-3 -mb-1 space-s-1"
	>
		<template v-for="(link, key) in links" :key="key">
			<div
				v-if="link.url === null"
				class="flex items-center justify-center w-8 h-8 text-xs text-gray-400 border rounded"
			>
				<Icon
					v-if="link.label.includes('السابق')"
					icon="previous"
					width="16"
					height="16"
				/>
				<Icon
					v-else-if="link.label.includes('التالي')"
					icon="next"
					width="16"
					height="16"
				/>
				<span v-else>
					{{ link.label }}
				</span>
			</div>
			<inertia-link
				v-else
				class="flex items-center justify-center w-8 h-8 text-xs border rounded hover:bg-white focus:border-blue-500 focus:text-blue-500"
				:class="{
					'bg-white': link.active,
				}"
				:href="link.url"
			>
				<Icon
					v-if="String(link.label).includes('السابق')"
					icon="previous"
					width="16"
					height="16"
				/>
				<Icon
					v-else-if="String(link.label).includes('التالي')"
					icon="next"
					width="16"
					height="16"
				/>
				<span v-else>
					{{ link.label }}
				</span>
			</inertia-link>
		</template>
	</div>
</template>

<script>
import Icon from "@/UI/Icon";

export default {
	components: {
		Icon,
	},

	props: ["links"],
};
</script>
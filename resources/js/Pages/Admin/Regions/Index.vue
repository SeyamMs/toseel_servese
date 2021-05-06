<template>
	<layout title="المناطق">
		<Table :links="regions.links">
			<template #title> المناطق </template>

			<template #actions>
				<Link :href="route('admin.regions.create')"> اضافة منطقة </Link>
			</template>

			<template #tr>
				<tr class="text-xs text-right text-white bg-gray-600">
					<th class="px-4 py-3">المنطقة</th>
					<th class="px-4 py-3">عدد المدن</th>
				</tr>
			</template>

			<template #rows>
				<tr
					v-for="region in regions.data"
					:key="region.id"
					class="hover:bg-gray-100 focus-within:bg-gray-100"
				>
					<td class="border-t">
						<inertia-link
							class="flex items-center px-4 py-2 text-sm text-gray-700 focus:text-blue-500 focus:outline-none"
							:href="route('admin.regions.show', region.id)"
						>
							{{ region.name }}
						</inertia-link>
					</td>
					<td class="border-t">
						<inertia-link
							class="flex items-center px-4 py-2 text-xs focus:outline-none"
							:href="route('admin.regions.show', region.id)"
							tabindex="-1"
						>
							{{ region.cities_count }}
						</inertia-link>
					</td>
				</tr>
				<tr v-if="regions.data.length === 0">
					<td class="px-6 py-4 border-t" colspan="3">
						لا يوجد مناطق حتى الان.
					</td>
				</tr>
			</template>
		</Table>
	</layout>
</template>

<script>
import Layout from "@/Layouts/Panel";
import Table from "@/Components/Admin/Table";
import Link from "@/UI/Link";

export default {
	props: ["regions"],

	components: {
		Layout,
		Table,
		Link,
	},
};
</script>

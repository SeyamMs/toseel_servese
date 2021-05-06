<template>
	<layout title="المدن">
		<Table :links="cities.links">
			<template #title> المدن </template>

			<template #actions>
				<Link :href="route('admin.cities.create')"> اضافة مدينة </Link>
			</template>

			<template #tr>
				<tr class="text-xs text-right text-white bg-gray-600">
					<th class="px-4 py-3">المدينة</th>
					<th class="px-4 py-3">المنطقة</th>
				</tr>
			</template>

			<template #rows>
				<tr
					v-for="city in cities.data"
					:key="city.id"
					class="hover:bg-gray-100 focus-within:bg-gray-100"
				>
					<td class="border-t">
						<inertia-link
							class="flex items-center px-4 py-2 text-sm text-gray-700 focus:text-blue-500 focus:outline-none"
							:href="route('admin.cities.show', city.id)"
						>
							{{ city.name }}
						</inertia-link>
					</td>
					<td class="border-t">
						<inertia-link
							class="flex items-center px-4 py-2 text-xs focus:outline-none"
							:href="route('admin.cities.show', city.id)"
							tabindex="-1"
						>
							{{ city.region.name }}
						</inertia-link>
					</td>
				</tr>
				<tr v-if="cities.data.length === 0">
					<td class="px-6 py-4 border-t" colspan="3">
						لا يوجد مدن حتى الان.
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
	props: ["cities"],

	components: {
		Layout,
		Table,
		Link,
	},
};
</script>

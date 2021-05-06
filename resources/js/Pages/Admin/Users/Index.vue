<template>
	<layout title="الاعضاء">
		<Table :links="users.links">
			<template #title> الاعضاء </template>

			<template #actions>
				<Link :href="route('admin.users.create')"> اضافة عضو </Link>
			</template>

			<template #tr>
				<tr class="text-xs text-right text-white bg-gray-600">
					<th class="px-4 py-3">نوع الحساب</th>
					<th class="px-4 py-3">البريد</th>
					<th class="px-4 py-3">الهاتف</th>
					<th class="px-4 py-3">منذ</th>
				</tr>
			</template>

			<template #rows>
				<tr
					v-for="user in users.data"
					:key="user.id"
					class="hover:bg-gray-100 focus-within:bg-gray-100"
				>
					<td class="border-t">
						<inertia-link
							class="flex items-center px-4 py-2 text-sm text-gray-700 focus:text-blue-500 focus:outline-none"
							:href="route('admin.users.show', user.id)"
						>
							{{
								{
									client: "عميل",
									company: "شركة",
									worker: "فرد",
								}[user.role]
							}}
						</inertia-link>
					</td>
					<td class="border-t">
						<inertia-link
							class="flex items-center px-4 py-2 text-sm text-gray-700 focus:text-blue-500 focus:outline-none"
							:href="route('admin.users.show', user.id)"
						>
							{{ user.email }}
						</inertia-link>
					</td>
					<td class="border-t">
						<inertia-link
							class="flex items-center px-4 py-2 text-sm text-gray-700 focus:outline-none"
							:href="route('admin.users.show', user.id)"
							tabindex="-1"
						>
							9665{{ user.phone }}
						</inertia-link>
					</td>
					<td class="border-t">
						<inertia-link
							class="flex items-center px-4 py-2 text-xs focus:outline-none"
							:href="route('admin.users.show', user.id)"
							tabindex="-1"
						>
							{{ format(user.created_at) }}
						</inertia-link>
					</td>
				</tr>
				<tr v-if="users.data.length === 0">
					<td class="px-6 py-4 border-t" colspan="3">
						لا يوجد اعضاء حتى الان.
					</td>
				</tr>
			</template>
		</Table>
	</layout>
</template>

<script>
import moment from "moment";
moment.locale("ar");

import Layout from "@/Layouts/Panel";
import Table from "@/Components/Admin/Table";
import Link from "@/UI/Link";

export default {
	props: ["users"],

	components: {
		Layout,
		Table,
		Link,
	},

	setup() {
		const format = (date) => {
			return moment(date).fromNow();
		};

		return { format };
	},
};
</script>

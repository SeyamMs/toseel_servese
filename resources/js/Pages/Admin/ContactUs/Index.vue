<template>
	<layout title="رسائل اتصل بنا">
		<Table :links="messages.links">
			<template #title>
				{{
					route().current("admin.contact-us")
						? "رسائل اتصل بنا"
						: "رسائل اتصل بنا الغير مقروؤة"
				}}
			</template>

			<template #actions>
				<Link
					v-if="route().current('admin.contact-us.unread')"
					:href="route('admin.contact-us')"
				>
					الكل
				</Link>
				<Link v-else :href="route('admin.contact-us.unread')">
					الجديد
				</Link>
			</template>

			<template #tr>
				<tr class="text-xs text-right text-white bg-gray-600">
					<th class="px-4 py-3">الاسم</th>
					<th class="px-4 py-3">البريد</th>
					<th class="px-4 py-3">تلقي رد</th>
					<th class="px-4 py-3">منذ</th>
				</tr>
			</template>

			<template #rows>
				<tr
					v-for="message in messages.data"
					:key="message.id"
					class="hover:bg-gray-100 focus-within:bg-gray-100"
					:class="{ 'font-bold': !message.read_at }"
				>
					<td class="border-t">
						<inertia-link
							class="flex items-center px-4 py-2 text-sm text-gray-700 focus:text-blue-500 focus:outline-none"
							:href="route('admin.contact-us.show', message.id)"
						>
							{{ message.name }}
						</inertia-link>
					</td>
					<td class="border-t">
						<inertia-link
							class="flex items-center px-4 py-2 text-sm text-gray-700 focus:outline-none"
							:href="route('admin.contact-us.show', message.id)"
							tabindex="-1"
						>
							{{ message.email }}
						</inertia-link>
					</td>
					<td class="border-t">
						<inertia-link
							class="flex items-center px-4 py-2 text-sm text-gray-700 focus:outline-none"
							:href="route('admin.contact-us.show', message.id)"
							tabindex="-1"
						>
							{{ message.reply ? "نعم" : "لا" }}
						</inertia-link>
					</td>
					<td class="border-t">
						<inertia-link
							class="flex items-center px-4 py-2 text-xs focus:outline-none"
							:href="route('admin.contact-us.show', message.id)"
							tabindex="-1"
						>
							{{ format(message.created_at) }}
						</inertia-link>
					</td>
				</tr>
				<tr v-if="messages.data.length === 0">
					<td class="px-6 py-4 border-t" colspan="3">
						لا يوجد رسائل حتى الان.
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
import Button from "@/UI/Button";
import Link from "@/UI/Link.vue";

export default {
	props: ["messages"],

	components: {
		Layout,
		Table,
		Link,
		Button,
	},

	setup() {
		const format = (date) => {
			return moment(date).fromNow();
		};

		return { format };
	},
};
</script>

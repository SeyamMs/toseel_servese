<template>
	<main class="flex flex-col min-h-screen pt-12 bg-gray-100">
		<teleport to="head">
			<title v-if="title">لوحة التحكم | {{ title }}</title>
			<title v-else>لوحة التحكم</title>
		</teleport>
		<header class="fixed top-0 z-10 flex w-full shadow">
			<div class="flex items-center w-56 h-12 px-5 bg-gray-800 space-s-2">
				<inertia-link
					:href="route('admin.dashboard')"
					class="text-white"
				>
					لوحة التحكم
				</inertia-link>
			</div>
			<div
				class="flex items-center justify-end flex-grow h-12 px-5 bg-gray-700 border-b border-gray-800 space-s-1"
			>
				<inertia-link
					:href="route('admin.profile')"
					class="px-2 py-1 text-white rounded hover:bg-gray-800"
					:class="{
						'bg-gray-800': route().current() == 'admin.profile',
					}"
				>
					ملفي
				</inertia-link>
				<button
					@click="logout"
					class="px-2 py-1 text-white rounded hover:bg-gray-800"
				>
					خروج
				</button>
			</div>
		</header>
		<article class="flex flex-grow">
			<div
				class="fixed right-0 z-10 w-full h-12 pb-0 bg-gray-700 md:pb-12 top-12 md:w-56 md:h-screen"
			>
				<div
					class="flex h-full p-1 overflow-x-auto md:p-2 space-s-2 md:space-s-0 md:space-y-2 md:flex-col md:overflow-y-auto scrolling-area"
				>
					<inertia-link
						:href="route('admin.dashboard')"
						class="flex items-center flex-shrink-0 h-8 px-2 text-white rounded md:h-10 md:px-4 hover:bg-gray-800"
						:class="{
							'bg-gray-800':
								route().current() == 'admin.dashboard',
						}"
					>
						الاحصائيات
					</inertia-link>
					<inertia-link
						:href="route('admin.regions')"
						class="flex items-center flex-shrink-0 h-8 px-2 text-white rounded md:h-10 md:px-4 hover:bg-gray-800"
						:class="{
							'bg-gray-800': [
								'admin.regions',
								'admin.regions.create',
								'admin.regions.show',
							].includes(route().current()),
						}"
					>
						المناطق
					</inertia-link>
					<inertia-link
						:href="route('admin.cities')"
						class="flex items-center flex-shrink-0 h-8 px-2 text-white rounded md:h-10 md:px-4 hover:bg-gray-800"
						:class="{
							'bg-gray-800': [
								'admin.cities',
								'admin.cities.create',
								'admin.cities.show',
							].includes(route().current()),
						}"
					>
						المدن
					</inertia-link>
					<inertia-link
						:href="route('admin.users')"
						class="flex items-center flex-shrink-0 h-8 px-2 text-white rounded md:h-10 md:px-4 hover:bg-gray-800"
						:class="{
							'bg-gray-800': [
								'admin.users',
								'admin.users.create',
								'admin.users.show',
							].includes(route().current()),
						}"
					>
						الاعضاء
					</inertia-link>
					<inertia-link
						:href="route('admin.subscriptions')"
						class="flex items-center flex-shrink-0 h-8 px-2 text-white rounded md:h-10 md:px-4 hover:bg-gray-800"
						:class="{
							'bg-gray-800': ['admin.subscriptions'].includes(
								route().current()
							),
						}"
					>
						الاشتراكات
					</inertia-link>
					<inertia-link
						:href="route('admin.contact-us')"
						class="flex items-center flex-shrink-0 h-8 px-2 text-white rounded md:h-10 md:px-4 hover:bg-gray-800"
						:class="{
							'bg-gray-800': [
								'admin.contact-us',
								'admin.contact-us.create',
								'admin.contact-us.show',
							].includes(route().current()),
						}"
					>
						رسائل اتصل بنا
					</inertia-link>
					<inertia-link
						:href="route('admin.settings')"
						class="flex items-center flex-shrink-0 h-8 px-2 text-white rounded md:h-10 md:px-4 hover:bg-gray-800"
						:class="{
							'bg-gray-800': ['admin.settings'].includes(
								route().current()
							),
						}"
					>
						الاعدادات
					</inertia-link>
				</div>
			</div>
			<div class="flex-grow w-full pt-12 md:pt-0 md:pr-56">
				<div class="p-5">
					<slot />
				</div>
			</div>
		</article>
	</main>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";

export default {
	props: ["title"],

	setup() {
		const logout = () => {
			Inertia.post(route("admin.logout"));
		};

		return { logout };
	},
};
</script>

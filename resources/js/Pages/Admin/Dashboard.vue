<template>
	<layout title="الاحصائيات">
		<div class="grid grid-cols-6 gap-4">
			<div class="col-span-6 md:col-span-2">
				<h1 class="text-xl text-gray-900">المناطق</h1>
				<div class="mt-2 bg-white rounded shadow-sm px-4 py-2">
					<div class="flex items-center justify-center">
						<h1 class="text-2xl py-4">{{ statistics.regions }}</h1>
					</div>
				</div>
			</div>
			<div class="col-span-6 md:col-span-2">
				<h1 class="text-xl text-gray-900">المدن</h1>
				<div class="mt-2 bg-white rounded shadow-sm px-4 py-2">
					<div class="flex items-center justify-center">
						<h1 class="text-2xl py-4">{{ statistics.cities }}</h1>
					</div>
				</div>
			</div>
			<div class="md:col-span-2"></div>
			<div class="col-span-6 md:col-span-2">
				<h1 class="text-xl text-gray-900">العملاء</h1>
				<div class="mt-2 bg-white rounded shadow-sm px-4 py-2">
					<div class="flex items-center justify-center">
						<h1 class="text-2xl py-4">{{ statistics.clients }}</h1>
					</div>
				</div>
			</div>
			<div class="col-span-6 md:col-span-2">
				<h1 class="text-xl text-gray-900">الشركات</h1>
				<div class="mt-2 bg-white rounded shadow-sm px-4 py-2">
					<div class="flex items-center justify-center">
						<h1 class="text-2xl py-4">
							{{ statistics.companies }}
						</h1>
					</div>
				</div>
			</div>
			<div class="col-span-6 md:col-span-2">
				<h1 class="text-xl text-gray-900">الافراد</h1>
				<div class="mt-2 bg-white rounded shadow-sm px-4 py-2">
					<div class="flex items-center justify-center">
						<h1 class="text-2xl py-4">{{ statistics.workers }}</h1>
					</div>
				</div>
			</div>

			<div class="col-span-6 md:col-span-4">
				<h1 class="text-xl text-gray-900">رسائل اتصل بنا</h1>
				<div class="mt-2 bg-white rounded shadow-sm px-4 py-2">
					<div class="flex items-center justify-around">
						<h1 class="text-2xl py-4">{{ statistics.messages }}</h1>
						<h1 class="text-2xl py-4">
							{{ statistics.new_messages }}
							<span class="text-xs italic">جديدة</span>
						</h1>
					</div>
				</div>
			</div>
		</div>
	</layout>
</template>

<script>
import Layout from "@/Layouts/Panel";

export default {
	props: ["statistics"],

	components: {
		Layout,
	},
};
</script>

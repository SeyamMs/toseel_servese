<template>
	<div class="border hover:shadow-lg overflow-hidden">
		<div class="grid grid-cols-2 md:grid-cols-4 bg-gray-700">
			<button
				@click="selected = 'login'"
				:class="{ 'bg-gray-800': selected === 'login' }"
				class="text-white text-sm hover:text-black hover:bg-gray-400 py-2"
			>
				سجل دخولك
			</button>
			<button
				@click="selected = 'client'"
				:class="{ 'bg-gray-800': selected === 'client' }"
				class="text-white text-sm hover:text-black hover:bg-gray-400 py-2"
			>
				سجل كعميل
			</button>
			<button
				@click="selected = 'company'"
				:class="{ 'bg-gray-800': selected === 'company' }"
				class="text-white text-sm hover:text-black hover:bg-gray-400 py-2"
			>
				مقدم خدمة - كشركة
			</button>
			<button
				@click="selected = 'worker'"
				:class="{ 'bg-gray-800': selected === 'worker' }"
				class="text-white text-sm hover:text-black hover:bg-gray-400 py-2"
			>
				مقدم خدمة - كفرد
			</button>
		</div>

		<transition
			mode="out-in"
			enter-active-class="transition duration-500 ease-in transform"
			leave-active-class="transition duration-500 ease-out transform"
			enter-from-class="opacity-0 -translate-x-10"
			enter-to-class="opacity-1 translate-x-0"
			leave-from-class="opacity-1 translate-x-0"
			leave-to-class="opacity-0 translate-x-10"
		>
			<Login v-if="selected === 'login'" key="login" />
			<Register
				v-else-if="selected === 'client'"
				as="client"
				key="client"
			/>
			<Register
				v-else-if="selected === 'company'"
				as="company"
				key="company"
			/>
			<Register
				v-else-if="selected === 'worker'"
				as="worker"
				key="worker"
			/>
		</transition>
	</div>
</template>

<script>
import { ref } from "vue";

import Login from "@/Components/Login";
import Register from "@/Components/Register";

export default {
	components: {
		Login,
		Register,
	},
	setup() {
		const selected = ref("login");

		return { selected };
	},
};
</script>
<template>
	<div
		class="py-16 px-8 min-h-screen bg-gray-100 flex items-center justify-center"
	>
		<div class="w-full">
			<div
				class="max-w-screen-xl mx-auto lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm"
			>
				<h1 class="my-3 text-3xl">يرجى اكمال ملفك الشخصي</h1>
				<transition
					mode="out-in"
					enter-active-class="transition duration-500 ease-in transform"
					leave-active-class="transition duration-500 ease-out transform"
					enter-from-class="opacity-0 translate-x-10"
					enter-to-class="opacity-1 translate-x-0"
					leave-from-class="opacity-1 translate-x-0"
					leave-to-class="opacity-0 translate-x-10"
				>
					<First
						:user="$page.props.auth.user"
						@next="step++"
						v-if="step == 1"
					/>
					<Second
						:user="$page.props.auth.user"
						:regions="regions"
						:countries="countries"
						@previous="step--"
						@next="step++"
						v-else-if="step == 2"
					/>
					<Third
						:user="$page.props.auth.user"
						@previous="step--"
						@next="step++"
						v-else-if="step == 3"
					/>
					<Fourth
						:user="$page.props.auth.user"
						@previous="step--"
						v-else-if="step == 4"
					/>
				</transition>
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";
import First from "@/Components/Complete/First";
import Second from "@/Components/Complete/Second";
import Third from "@/Components/Complete/Third";
import Fourth from "@/Components/Complete/Fourth";

export default {
	props: ["countries", "regions"],

	components: {
		First,
		Second,
		Third,
		Fourth,
	},

	setup(props, context) {
		const step = ref(context.attrs.auth.user.step);

		return { step };
	},
};
</script>
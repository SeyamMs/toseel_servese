<template>
	<select
		class="form-select border rounded-md shadow-sm"
		v-model="value"
		ref="select"
	>
		<slot />
	</select>
</template>

<script>
import { ref, computed } from "vue";

export default {
	props: ["modelValue"],

	setup(props, { emit }) {
		const value = computed({
			get: () => props.modelValue,
			set: (value) => emit("update:modelValue", value),
		});

		const input = ref(null);
		const focus = () => {
			input.focus();
		};

		return { value, input, focus };
	},
};
</script>


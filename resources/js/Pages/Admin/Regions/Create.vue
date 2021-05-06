<template>
	<layout title="اضافة منطقة">
		<Form @submitted="store">
			<template #title>
				<inertia-link
					:href="route('admin.regions')"
					class="text-blue-500 hover:text-blue-700"
				>
					المناطق
				</inertia-link>
				/ اضافة منطقة
			</template>

			<template #form>
				<div class="col-span-6">
					<Label for="name" value="الاسم" />
					<Input
						id="name"
						type="text"
						class="block w-full mt-1"
						v-model="form.name"
					/>
					<InputError :message="form.errors.name" class="mt-2" />
				</div>
			</template>

			<template #actions>
				<ActionMessage :on="form.recentlySuccessful">
					تم اضافة المنطقة
				</ActionMessage>

				<Button
					:class="{ 'opacity-25': form.processing }"
					:disabled="form.processing"
				>
					اضافة المنطقة
				</Button>
			</template>
		</Form>
	</layout>
</template>

<script>
import { useForm } from "@inertiajs/inertia-vue3";

import Layout from "@/Layouts/Panel";
import Form from "@/Components/Admin/Form";
import Label from "@/UI/Label";
import Input from "@/UI/Input";
import InputError from "@/UI/InputError";
import Button from "@/UI/Button";
import ActionMessage from "@/UI/ActionMessage";

export default {
	components: {
		Layout,
		Form,
		Label,
		Input,
		InputError,
		Button,
		ActionMessage,
	},

	setup() {
		const form = useForm({
			name: null,
		});

		const store = () => {
			form.post(route("admin.regions.store"), {
				preserveScroll: true,
			});
		};

		return { form, store };
	},
};
</script>

<template>
	<layout title="اضافة مدينة">
		<Form @submitted="store">
			<template #title>
				<inertia-link
					:href="route('admin.cities')"
					class="text-blue-500 hover:text-blue-700"
				>
					المدن
				</inertia-link>
				/ اضافة مدينة
			</template>

			<template #form>
				<div class="col-span-6 md:col-span-3">
					<Label for="region_id" value="المنطقة" />
					<Select
						id="region_id"
						class="block w-full mt-1"
						v-model="form.region_id"
					>
						<option
							v-for="region in regions"
							:key="region.id"
							:value="region.id"
						>
							{{ region.name }}
						</option>
					</Select>
					<InputError :message="form.errors.region_id" class="mt-2" />
				</div>
				<div class="col-span-6 md:col-span-3">
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
					تم اضافة المدينة
				</ActionMessage>

				<Button
					:class="{ 'opacity-25': form.processing }"
					:disabled="form.processing"
				>
					اضافة المدينة
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
import Select from "@/UI/Select.vue";
import Button from "@/UI/Button";
import ActionMessage from "@/UI/ActionMessage";

export default {
	props: ["regions"],

	components: {
		Layout,
		Form,
		Label,
		Input,
		InputError,
		Select,
		Button,
		ActionMessage,
	},

	setup() {
		const form = useForm({
			name: null,
			region_id: null,
		});

		const store = () => {
			form.post(route("admin.cities.store"), {
				preserveScroll: true,
			});
		};

		return { form, store };
	},
};
</script>

<template>
	<layout :title="city.name">
		<Form @submitted="update">
			<template #title>
				<inertia-link
					:href="route('admin.cities')"
					class="text-blue-500 hover:text-blue-700"
				>
					المدن
				</inertia-link>
				/ {{ city.name }}
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
					تم تعديل المدينة
				</ActionMessage>

				<DangerButton class="mx-3" @click="confirmation = true">
					حذف المدينة
				</DangerButton>

				<ConfirmationModal
					:show="confirmation"
					@close="confirmation = false"
				>
					<template #title> تأكيد حذف المدينة </template>

					<template #content>
						هل انت متاكد؟ لا يمكن التراجع عن هذه الخطوة
					</template>

					<template #footer>
						<SecondaryButton @click="confirmation = false">
							تراجع
						</SecondaryButton>

						<DangerButton
							@click="destroy"
							:class="{ 'opacity-25': form.processing }"
							:disabled="form.processing"
						>
							حذف
						</DangerButton>
					</template>
				</ConfirmationModal>

				<Button
					:class="{ 'opacity-25': form.processing }"
					:disabled="form.processing"
				>
					تعديل المدينة
				</Button>
			</template>
		</Form>
	</layout>
</template>

<script>
import { ref } from "vue";
import { useForm } from "@inertiajs/inertia-vue3";

import Layout from "@/Layouts/Panel";
import Form from "@/Components/Admin/Form";
import Label from "@/UI/Label";
import Input from "@/UI/Input";
import InputError from "@/UI/InputError";
import Select from "@/UI/Select";
import DangerButton from "@/UI/DangerButton";
import ConfirmationModal from "@/UI/ConfirmationModal";
import SecondaryButton from "@/UI/SecondaryButton";
import Button from "@/UI/Button";
import ActionMessage from "@/UI/ActionMessage";

export default {
	props: ["city", "regions"],

	components: {
		Layout,
		Form,
		Label,
		Input,
		InputError,
		Select,
		DangerButton,
		ConfirmationModal,
		SecondaryButton,
		Button,
		ActionMessage,
	},

	setup(props) {
		const form = useForm({ ...props.city });
		const confirmation = ref(false);

		const update = () => {
			form.post(route("admin.cities.update", props.city.id), {
				preserveScroll: true,
			});
		};

		const destroy = () => {
			form.delete(route("admin.cities.destroy", props.city.id), {
				onSuccess: () => {
					document.body.style.removeProperty("overflow");
				},
			});
		};

		return { form, confirmation, update, destroy };
	},
};
</script>

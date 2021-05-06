<template>
	<layout :title="region.name">
		<Form @submitted="update">
			<template #title>
				<inertia-link
					:href="route('admin.regions')"
					class="text-blue-500 hover:text-blue-700"
				>
					المناطق
				</inertia-link>
				/ {{ region.name }}
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
					تم تعديل المنطقة
				</ActionMessage>

				<DangerButton class="mx-3" @click="confirmation = true">
					حذف المنطقة
				</DangerButton>

				<ConfirmationModal
					:show="confirmation"
					@close="confirmation = false"
				>
					<template #title> تأكيد حذف المنطقة </template>

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
					تعديل المنطقة
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
import DangerButton from "@/UI/DangerButton";
import ConfirmationModal from "@/UI/ConfirmationModal";
import SecondaryButton from "@/UI/SecondaryButton";
import Button from "@/UI/Button";
import ActionMessage from "@/UI/ActionMessage";

export default {
	props: ["region"],

	components: {
		Layout,
		Form,
		Label,
		Input,
		InputError,
		DangerButton,
		ConfirmationModal,
		SecondaryButton,
		Button,
		ActionMessage,
	},

	setup(props) {
		const form = useForm({ ...props.region });
		const confirmation = ref(false);

		const update = () => {
			form.post(route("admin.regions.update", props.region.id), {
				preserveScroll: true,
			});
		};

		const destroy = () => {
			form.delete(route("admin.regions.destroy", props.region.id), {
				onSuccess: () => {
					document.body.style.removeProperty("overflow");
				},
			});
		};

		return { form, confirmation, update, destroy };
	},
};
</script>

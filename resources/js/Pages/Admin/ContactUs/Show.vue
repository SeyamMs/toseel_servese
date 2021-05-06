<template>
	<layout :title="`رسائل اتصل بنا | رسالة من ${message.name}`">
		<View>
			<template #title>
				<inertia-link
					:href="route('admin.contact-us')"
					class="text-blue-500 hover:text-blue-700"
				>
					رسائل اتصل بنا
				</inertia-link>
				/ رسالة من {{ message.name }}
			</template>

			<template #content>
				<div class="col-span-6 md:col-span-2">
					<span class="text-xs text-gray-700"> الاسم </span>
					<h1 class="text-lg">
						{{ message.name }}
					</h1>
				</div>

				<div class="col-span-4 md:col-span-2">
					<span class="text-xs text-gray-700">
						البريد الالكتروني
					</span>
					<a
						:href="`mailto:${message.email}`"
						class="block text-lg hover:line-through"
					>
						{{ message.email }}
					</a>
				</div>

				<div class="col-span-2">
					<span class="text-xs text-gray-700"> تلقي رد </span>
					<p class="block text-lg hover:line-through">
						{{ message.reply ? "نعم" : "لا" }}
					</p>
				</div>

				<div class="col-span-6">
					<span class="text-xs text-gray-700"> الرسالة </span>
					<div class="flex items-center mt-1 space-s-1">
						<p class="text-lg">
							{{ message.message }}
						</p>
					</div>
				</div>
			</template>

			<template #actions>
				<DangerButton class="mx-3" @click="confirmation = true">
					حذف الرسالة
				</DangerButton>

				<ConfirmationModal
					:show="confirmation"
					@close="confirmation = false"
				>
					<template #title> تأكيد حذف الرسالة</template>

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
			</template>
		</View>
	</layout>
</template>

<script>
import { ref } from "vue";
import { useForm } from "@inertiajs/inertia-vue3";

import Layout from "@/Layouts/Panel";
import View from "@/Components/Admin/View";
import DangerButton from "@/UI/DangerButton";
import SecondaryButton from "@/UI/SecondaryButton";
import ConfirmationModal from "@/UI/ConfirmationModal";

export default {
	props: ["message"],

	components: {
		Layout,
		View,
		DangerButton,
		SecondaryButton,
		ConfirmationModal,
	},

	setup(props) {
		const form = useForm({});
		const confirmation = ref(false);

		const destroy = () => {
			form.delete(route("admin.contact-us.destroy", props.message.id), {
				onSuccess: () => {
					document.body.style.removeProperty("overflow");
				},
			});
		};

		return { form, confirmation, destroy };
	},
};
</script>

<template>
	<div>
		<div class="p-4 text-center">
			<h3 class="my-3 text-2xl">
				سجل
				<span class="text-red-500"> {{ title }} </span>
			</h3>
			<p class="my-4">{{ description }}</p>
		</div>
		<form @submit.prevent="register">
			<div class="grid gap-3 px-4 pb-4">
				<div>
					<Label for="email" value="البريد الالكتروني" />
					<Input
						id="email"
						type="email"
						class="block w-full mt-1"
						v-model="form.email"
					/>
					<InputError :message="form.errors.email" class="mt-1" />
				</div>

				<div>
					<Label for="phone" value="رقم الجوال" />
					<div
						class="flex items-center mt-1 border rounded-md shadow-sm focus-within:border-blue-400"
					>
						<Input
							id="phone"
							type="tel"
							dir="ltr"
							:grouped="true"
							class="block w-full shadow-none"
							v-model="form.phone"
						/>
						<span class="flex-shrink-0 px-4 text-gray-700">
							9665
						</span>
					</div>

					<InputError :message="form.errors.phone" class="mt-1" />
				</div>

				<div>
					<Label for="password" value="كلمة المرور" />
					<Input
						id="password"
						type="password"
						class="block w-full mt-1"
						v-model="form.password"
					/>
					<InputError :message="form.errors.password" class="mt-1" />
				</div>
			</div>
			<div class="p-4 bg-gray-50">
				<Button
					:class="{ 'opacity-25': form.processing }"
					:disabled="form.processing"
				>
					سجل {{ title }}
				</Button>
			</div>
		</form>
	</div>
</template>

<script>
import { useForm } from "@inertiajs/inertia-vue3";

import Label from "@/UI/Label";
import Input from "@/UI/Input";
import InputError from "@/UI/InputError";
import Button from "@/UI/Button";
import { computed } from "vue";
import { Inertia } from "@inertiajs/inertia";

export default {
	props: {
		as: {
			type: String,
			required: true,
		},
	},

	components: {
		Label,
		Input,
		InputError,
		Button,
	},

	setup(props) {
		const form = useForm({
			role: props.as,
			email: "",
			phone: "",
			password: "",
		});

		const register = () => {
			form.post(route("register"), {
				preserveScroll: true,
			});
		};

		const title = computed(() => {
			return {
				client: "كعميل",
				company: "كمقدم خدمة - فئة الشركات",
				worker: "كمقدم خدمة - فئة الأفراد",
			}[props.as];
		});

		const description = computed(() => {
			return {
				client:
					"يمكنك من خلال هذا الحساب استئجار مقدم الخدمة الذي يناسبك ليقدم لك الخدمة التي تناسبك",
				company: "",
				worker: "انت على بعد عدة نقرات لتعريف العميل بنفسك وماذا تقدم",
			}[props.as];
		});

		return { title, description, form, register };
	},
};
</script>
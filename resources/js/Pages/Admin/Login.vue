<template>
	<layout title="تسجيل الدخول">
		<div class="my-4 overflow-hidden bg-white rounded shadow">
			<h1 class="px-4 py-2 text-2xl">يرجى تسجيل الدخول</h1>
			<form @submit.prevent="login">
				<div class="grid gap-3 px-4 py-2">
					<div>
						<Label for="email" value="البريد الالكتروني" />
						<Input
							id="email"
							type="text"
							class="block w-full mt-1"
							v-model="form.email"
						/>
						<InputError :message="form.errors.email" class="mt-1" />
					</div>

					<div>
						<Label for="password" value="كلمة المرور" />
						<Input
							id="password"
							type="password"
							class="block w-full mt-1"
							v-model="form.password"
						/>
						<InputError
							:message="form.errors.password"
							class="mt-1"
						/>
					</div>
				</div>

				<div class="p-4 bg-gray-50">
					<Button
						:class="{ 'opacity-25': form.processing }"
						:disabled="form.processing"
					>
						دخول
					</Button>
				</div>
			</form>
		</div>
	</layout>
</template>

<script>
import { useForm } from "@inertiajs/inertia-vue3";

import Layout from "@/Layouts/Auth";
import Label from "@/UI/Label";
import Input from "@/UI/Input";
import InputError from "@/UI/InputError";
import Button from "@/UI/Button";

export default {
	setup() {
		const form = useForm({
			email: "",
			password: "",
		});

		const login = () => {
			form.post(route("admin.login"), {
				preserveScroll: true,
			});
		};

		return { form, login };
	},

	components: {
		Layout,
		Label,
		Input,
		InputError,
		Button,
	},
};
</script>

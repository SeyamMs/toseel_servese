<template>
	<div>
		<div class="p-4 text-center">
			<h3 class="my-3 text-2xl">
				سجل
				<span class="text-red-500"> دخولك </span>
			</h3>
			<p class="my-4">
				سجل دخولك كعميل أو مقدم خدمة (كفرد) أو مقدم خدمة (كشركة)
			</p>
		</div>
		<form @submit.prevent="login">
			<div class="grid gap-3 px-4 pb-4">
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
					<InputError :message="form.errors.password" class="mt-1" />
				</div>
			</div>
			<div class="p-4 bg-gray-50">
				<Button
					:class="{ 'opacity-25': form.processing }"
					:disabled="form.processing"
				>
					سجل دخول
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
export default {
	components: {
		Label,
		Input,
		InputError,
		Button,
	},

	setup() {
		const form = useForm({
			email: "",
			password: "",
		});
		const login = () => {
			form.post(route("login"), {
				preserveScroll: true,
			});
		};

		return { form, login };
	},
};
</script>
<template>
	<div class="py-4 px-8">
		<form @submit.prevent="send">
			<div class="grid gap-3">
				<div>
					<Label for="name" value="الاسم" />
					<Input
						id="name"
						type="text"
						class="block w-full mt-1"
						v-model="form.name"
					/>
					<InputError :message="form.errors.name" class="mt-1" />
				</div>
				<div>
					<Label for="contact_email" value="البريد الالكتروني" />
					<Input
						id="contact_email"
						type="email"
						class="block w-full mt-1"
						v-model="form.email"
					/>
					<InputError :message="form.errors.email" class="mt-1" />
				</div>

				<div>
					<Label for="message" value="الرسالة" />
					<Input
						id="message"
						type="text"
						class="block w-full mt-1"
						v-model="form.message"
					/>
					<InputError :message="form.errors.message" class="mt-1" />
				</div>

				<div class="flex items-center justify-between">
					<div>
						<label class="inline-flex items-center">
							<input
								type="checkbox"
								class="form-checkbox border rounded"
								v-model="form.reply"
							/>
							<span class="mr-2">تلقي رد</span>
						</label>
					</div>

					<Button
						:class="{ 'opacity-25': form.processing }"
						:disabled="form.processing"
					>
						ارسال
					</Button>
				</div>
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
			name: "",
			email: "",
			message: "",
			reply: true,
		});

		const send = () => {};

		return { form, send };
	},
};
</script>
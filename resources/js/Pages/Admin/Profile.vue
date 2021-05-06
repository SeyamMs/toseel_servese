<template>
	<layout title="ملفك الشخصي">
		<Form @submitted="update">
			<template #title> ملفك الشخصي </template>
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

				<div class="col-span-6">
					<Label for="email" value="البريد الالكتروني" />
					<Input
						id="email"
						type="text"
						class="block w-full mt-1"
						v-model="form.email"
					/>
					<InputError :message="form.errors.email" class="mt-2" />
				</div>

				<div class="col-span-6 px-6 py-3 bg-blue-500 rounded-md">
					<p class="text-white">
						اترك كلمة المرور فارغة اذا كنت لا ترغب في تعديلها
					</p>
				</div>

				<div class="col-span-6">
					<Label for="password" value="كلمة المرور" />
					<Input
						autocomplete="off"
						id="password"
						type="password"
						class="block w-full mt-1"
						v-model="form.password"
					/>
					<InputError :message="form.errors.password" class="mt-2" />
				</div>

				<div class="col-span-6">
					<Label
						for="password_confirmation"
						value="تاكيد كلمة المرور"
					/>
					<Input
						id="password_confirmation"
						type="password"
						class="block w-full mt-1"
						v-model="form.password_confirmation"
					/>
				</div>
			</template>
			<template #actions>
				<ActionMessage :on="form.recentlySuccessful" class="mx-3">
					تم تعديل ملفك الشخصي
				</ActionMessage>

				<Button
					:class="{ 'opacity-25': form.processing }"
					:disabled="form.processing"
				>
					تعديل
				</Button>
			</template>
		</Form>
	</layout>
</template>

<script>
import Layout from "@/Layouts/Panel";
import Form from "@/Components/Admin/Form";
import Label from "@/UI/Label";
import Input from "@/UI/Input";
import InputError from "@/UI/InputError";
import Button from "@/UI/Button";
import ActionMessage from "@/UI/ActionMessage";
import { useForm } from "@inertiajs/inertia-vue3";

export default {
	props: ["auth"],

	components: {
		Layout,
		Form,
		Label,
		Input,
		InputError,
		Button,
		ActionMessage,
	},

	setup(props) {
		const form = useForm({ ...props.auth.admin });

		const update = () => {
			form.post(route("admin.profile"), {
				preserveScroll: true,
			});
		};

		return { form, update };
	},
};
</script>

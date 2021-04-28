<template>
	<div>
		<p class="text-gray-700 mb-3" v-if="user.role == 'company'">
			بيانات مندوب/معقب الشركة
		</p>
		<p class="text-gray-700 mb-3" v-else>البيانات الشخصية</p>
		<div class="shadow bg-white w-full">
			<form @submit.prevent="fill">
				<div class="grid gap-3 py-4 px-8">
					<div>
						<Label for="first_name" value="الاسم الاول" />
						<Input
							id="first_name"
							type="text"
							class="block w-full mt-1"
							v-model="form.first_name"
						/>
						<InputError
							:message="form.errors.first_name"
							class="mt-1"
						/>
					</div>

					<div>
						<Label for="middle_name" value="اسم الاب" />
						<Input
							id="middle_name"
							type="text"
							class="block w-full mt-1"
							v-model="form.middle_name"
						/>
						<InputError
							:message="form.errors.middle_name"
							class="mt-1"
						/>
					</div>

					<div>
						<Label for="last_name" value="اسم العائلة" />
						<Input
							id="last_name"
							type="text"
							class="block w-full mt-1"
							v-model="form.last_name"
						/>
						<InputError
							:message="form.errors.last_name"
							class="mt-1"
						/>
					</div>

					<template v-if="user.role == 'worker'">
						<div>
							<Label for="age" value="العمر" />
							<Input
								id="age"
								type="number"
								min="18"
								class="block w-full mt-1"
								v-model="form.age"
							/>
							<InputError
								:message="form.errors.age"
								class="mt-1"
							/>
						</div>

						<div>
							<Label for="bio" value="أكتب وصفا مختصرا عن نفسك" />
							<Textarea
								id="bio"
								type="text"
								class="block w-full mt-1"
								v-model="form.bio"
							/>
							<InputError
								:message="form.errors.bio"
								class="mt-1"
							/>
						</div>
					</template>

					<div>
						<label class="inline-flex items-center">
							<input
								type="checkbox"
								class="form-checkbox border rounded"
								v-model="form.saudi"
							/>
							<span class="mr-2">سعودي</span>
						</label>
					</div>
				</div>
				<div class="py-4 px-8 flex justify-end bg-gray-50">
					<Button
						:class="{
							'opacity-25': form.processing,
						}"
						:disabled="form.processing"
					>
						التالي
					</Button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import { useForm } from "@inertiajs/inertia-vue3";

import Label from "@/UI/Label";
import Input from "@/UI/Input";
import InputError from "@/UI/InputError";
import Button from "@/UI/Button";
import Textarea from "@/UI/Textarea.vue";

export default {
	props: ["user"],

	components: {
		Label,
		Input,
		InputError,
		Button,
		Textarea,
	},

	setup(props, { emit }) {
		const form = useForm({
			first_name: props.user.first_name,
			middle_name: props.user.middle_name,
			last_name: props.user.last_name,
			age: props.user.age ? props.user.age : 18,
			bio: props.user.bio,
			saudi: props.user.saudi !== null ? props.user.saudi : true,
		});

		const fill = () => {
			form.post(route("first.step"), {
				preserveScroll: true,
				onSuccess: () => {
					emit("next");
				},
			});
		};

		return { form, fill };
	},
};
</script>
<template>
	<layout title="الاعدادات">
		<Form @submitted="update">
			<template #title> الاعدادات </template>

			<template #form>
				<div class="col-span-6">
					<Label for="about_us" value="من نحن" />
					<Textarea
						id="about_us"
						class="block w-full mt-1"
						v-model="form.about_us"
					/>
					<InputError :message="form.errors.about_us" class="mt-2" />
				</div>
				<div class="col-span-6">
					<Label for="message" value="الرسالة" />
					<Textarea
						id="message"
						class="block w-full mt-1"
						v-model="form.message"
					/>
					<InputError :message="form.errors.message" class="mt-2" />
				</div>
				<div class="col-span-6">
					<Label for="vision" value="الرؤية" />
					<Textarea
						id="vision"
						class="block w-full mt-1"
						v-model="form.vision"
					/>
					<InputError :message="form.errors.vision" class="mt-2" />
				</div>
				<div class="col-span-6">
					<Label for="goal" value="الهدف" />
					<Textarea
						id="goal"
						class="block w-full mt-1"
						v-model="form.goal"
					/>
					<InputError :message="form.errors.goal" class="mt-2" />
				</div>

				<hr class="col-span-6 my-2" />

				<div class="col-span-6">
					<Label for="address" value="العنوان" />
					<Input
						id="address"
						type="text"
						class="block w-full mt-1"
						v-model="form.address"
					/>
					<InputError :message="form.errors.address" class="mt-2" />
				</div>
				<div class="col-span-6">
					<Label for="address_link" value="رابط العنوان" />
					<Input
						id="address_link"
						type="url"
						dir="ltr"
						class="block w-full mt-1"
						v-model="form.address_link"
					/>
					<InputError
						:message="form.errors.address_link"
						class="mt-2"
					/>
				</div>
				<div class="col-span-6">
					<Label for="phone" value="رقم الهاتف" />
					<Input
						id="phone"
						type="tel"
						dir="ltr"
						class="block w-full shadow-none"
						v-model="form.phone"
					/>
					<InputError :message="form.errors.phone" class="mt-2" />
				</div>
				<div class="col-span-6">
					<Label for="email" value="البريد الالكتروني" />
					<Input
						id="email"
						dir="ltr"
						type="email"
						class="block w-full mt-1"
						v-model="form.email"
					/>
					<InputError :message="form.errors.email" class="mt-2" />
				</div>

				<hr class="col-span-6 my-2" />

				<div
					class="col-span-6"
					v-for="social in form.socials"
					:key="social.icon"
				>
					<Label
						:for="social.icon"
						:value="socialTitle(social.icon)"
					/>
					<Input
						:id="social.icon"
						dir="ltr"
						type="url"
						class="block w-full mt-1"
						v-model="form.socials[form.socials.indexOf(social)].url"
					/>
					<InputError
						:message="form.errors[`socials.${social.icon}`]"
						class="mt-2"
					/>
				</div>

				<div class="col-span-6">
					<Label for="footer" value="نص الذيل" />
					<Textarea
						id="footer"
						class="block w-full mt-1"
						v-model="form.footer"
					/>
					<InputError :message="form.errors.footer" class="mt-2" />
				</div>

				<hr class="col-span-6 my-2" />

				<div class="col-span-6">
					<Label for="company_pdf" value="رابط PDF الشركات" />
					<Input
						id="company_pdf"
						dir="ltr"
						type="company_pdf"
						class="block w-full mt-1"
						v-model="form.company_pdf"
					/>
					<InputError
						:message="form.errors.company_pdf"
						class="mt-2"
					/>
				</div>

				<div class="col-span-6">
					<Label for="worker_pdf" value="رابط PDF الافراد" />
					<Input
						id="worker_pdf"
						dir="ltr"
						type="worker_pdf"
						class="block w-full mt-1"
						v-model="form.worker_pdf"
					/>
					<InputError
						:message="form.errors.worker_pdf"
						class="mt-2"
					/>
				</div>
			</template>

			<template #actions>
				<ActionMessage :on="form.recentlySuccessful" class="mx-3">
					تم تعديل الاعدادات
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
import SecondaryButton from "@/UI/SecondaryButton";
import ActionMessage from "@/UI/ActionMessage";
import Select from "@/UI/Select";
import Textarea from "@/UI/Textarea";
import { useForm } from "@inertiajs/inertia-vue3";

export default {
	props: ["settings"],

	components: {
		Layout,
		Form,
		Label,
		Input,
		InputError,
		Button,
		SecondaryButton,
		ActionMessage,
		Select,
		Textarea,
	},

	setup(props) {
		const form = useForm({ photo: null, ...props.settings });

		const update = () => {
			form.post(route("admin.settings"), {
				preserveScroll: true,
			});
		};

		const socialTitle = (social) => {
			return {
				facebook: "فيسبوك",
				twitter: "تويتر",
				instagram: "انستاجرام",
				linkedin: "لينكدان",
			}[social];
		};

		return { form, update, socialTitle };
	},
};
</script>

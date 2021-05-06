<template>
	<div>
		<p class="text-gray-700 mb-3">بيانات المركبة والسائق</p>
		<div class="shadow bg-white w-full">
			<form @submit.prevent="fill">
				<div class="grid gap-3 py-4 px-8">
					<div class="grid grid-cols-2 gap-3">
						<div class="col-span-2 md:col-span-1">
							<Label for="vehicle_type" value="النوع" />
							<Select
								id="vehicle_type"
								class="block w-full mt-1"
								v-model="form.vehicle.type"
							>
								<option value="dina">دينا</option>
								<option value="dabbab">دباب</option>
								<option value="wanet">وانيت</option>
								<option value="car">سيارة</option>
							</Select>
							<InputError
								:message="form.errors['vehicle.type']"
								class="mt-1"
							/>
						</div>

						<div class="col-span-2 md:col-span-1">
							<Label for="vehicle_model" value="الموديل" />
							<Input
								id="vehicle_model"
								type="number"
								min="1999"
								max="2040"
								class="block w-full mt-1"
								v-model="form.vehicle.model"
							/>
							<InputError
								:message="form.errors['vehicle.model']"
								class="mt-1"
							/>
						</div>

						<div class="col-span-2 md:col-span-1">
							<Label for="vehicle_license" value="رقم الرخصة" />
							<Input
								id="vehicle_license"
								type="text"
								class="block w-full mt-1"
								v-model="form.vehicle.license"
							/>
							<InputError
								:message="form.errors['vehicle.license']"
								class="mt-1"
							/>
						</div>

						<div class="col-span-2 md:col-span-1">
							<Label
								for="vehicle_license_image"
								value="صورة الرخصة"
							/>
							<input
								id="vehicle_license_image"
								accept="images/*"
								type="file"
								class="hidden"
								ref="license"
								@change="licensePreview"
							/>
							<SecondaryButton
								class="mt-1"
								type="button"
								@click.prevent="license.click()"
							>
								<span class="py-1"> اختيار صورة </span>
							</SecondaryButton>
							<InputError
								:message="form.errors['vehicle.license_image']"
								class="mt-2"
							/>
							<div class="mt-2">
								<img
									v-show="form.license"
									class="rounded w-64"
									:src="form.license"
								/>
							</div>
						</div>

						<div class="col-span-2">
							<label class="inline-flex items-center">
								<input
									type="checkbox"
									class="form-checkbox border rounded"
									v-model="form.not_owner"
								/>
								<span class="mr-2">المستخدم غير المالك</span>
							</label>
						</div>

						<div class="col-span-2" v-if="form.not_owner">
							<h3 class="my-3 text-2xl">بيانات المستخدم</h3>
							<div class="grid gap-3 grid-cols-1 md:grid-cols-3">
								<div class="col-span-1">
									<Label
										for="driver_name"
										value="اسم المستخدم"
									/>
									<Input
										id="driver_name"
										type="text"
										class="block w-full mt-1"
										v-model="form.driver.name"
									/>
									<InputError
										:message="form.errors['driver.name']"
										class="mt-1"
									/>
								</div>

								<div class="col-span-1">
									<Label
										for="driver_id"
										value="هوية المستخدم"
									/>
									<Input
										id="driver_id"
										type="text"
										class="block w-full mt-1"
										v-model="form.driver.id"
									/>
									<InputError
										:message="form.errors['driver.id']"
										class="mt-1"
									/>
								</div>

								<div class="col-span-1">
									<Label
										for="driver_id_image"
										value="صورة هوية المستخدم"
									/>
									<input
										id="driver_id_image"
										accept="images/*"
										type="file"
										class="hidden"
										ref="id"
										@change="idPreview"
									/>
									<SecondaryButton
										class="mt-1"
										type="button"
										@click.prevent="id.click()"
									>
										<span class="py-1"> اختيار صورة </span>
									</SecondaryButton>
									<InputError
										:message="
											form.errors['driver.id_image']
										"
										class="mt-2"
									/>
									<div class="mt-2">
										<img
											v-show="form.id"
											class="rounded w-64"
											:src="form.id"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="py-4 px-8 flex justify-between bg-gray-50">
					<SecondaryButton
						@click.prevent="$emit('previous')"
						:class="{
							'opacity-25': form.processing,
						}"
						:disabled="form.processing"
					>
						السابق
					</SecondaryButton>

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
import { ref } from "vue";
import { useForm } from "@inertiajs/inertia-vue3";

import Label from "@/UI/Label";
import Select from "@/UI/Select";
import Input from "@/UI/Input";
import InputError from "@/UI/InputError";
import Button from "@/UI/Button";
import SecondaryButton from "@/UI/SecondaryButton";

export default {
	props: ["user"],

	components: {
		Label,
		Select,
		Input,
		InputError,
		Button,
		SecondaryButton,
	},

	setup(props) {
		const form = useForm({
			vehicle: { ...props.user.vehicle },
			driver: { ...props.user.driver },
			not_owner: false,
			license: null,
			id: null,
		});

		const license = ref(null);
		const id = ref(null);

		const fill = () => {
			if (form.license)
				form.vehicle.license_image = license.value.files[0];
			if (form.id) form.driver.id_image = id.value.files[0];

			form.post(route("fourth.step"), { preserveScroll: true });
		};

		const licensePreview = () => {
			const reader = new FileReader();
			reader.onload = (e) => (form.license = e.target.result);
			reader.readAsDataURL(license.value.files[0]);
		};

		const idPreview = () => {
			const reader = new FileReader();
			reader.onload = (e) => (form.id = e.target.result);
			reader.readAsDataURL(id.value.files[0]);
		};

		return { form, fill, license, id, licensePreview, idPreview };
	},
};
</script>
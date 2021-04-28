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
								v-model="form.vehicle_type"
							>
								<option value="dina">دينا</option>
								<option value="dabbab">دباب</option>
								<option value="wanet">وانيت</option>
								<option value="car">سيارة</option>
							</Select>
							<InputError
								:message="form.errors.vehicle_type"
								class="mt-1"
							/>
						</div>
						<div class="col-span-2 md:col-span-1">
							<Label for="vehicle_model" value="الموديل" />
							<Input
								id="vehicle_model"
								type="text"
								class="block w-full mt-1"
								v-model="form.vehicle_model"
							/>
							<InputError
								:message="form.errors.vehicle_model"
								class="mt-1"
							/>
						</div>
						<div class="col-span-2 md:col-span-1">
							<Label for="vehicle_license" value="رقم الرخصة" />
							<Input
								id="vehicle_license"
								type="text"
								class="block w-full mt-1"
								v-model="form.vehicle_license"
							/>
							<InputError
								:message="form.errors.vehicle_license"
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
								type="file"
								class="hidden"
								ref="vehicle_license_image"
								@change="updateVehicleLicensePreview"
							/>
							<SecondaryButton
								class="mt-1"
								type="button"
								@click.prevent="vehicle_license_image.click()"
							>
								<span class="py-1"> اختيار صورة </span>
							</SecondaryButton>

							<InputError
								:message="form.errors.vehicle_license_image"
								class="mt-2"
							/>
							<div class="mt-2">
								<img
									v-show="form.vehicle_license_image_preview"
									class="rounded w-64"
									:src="form.vehicle_license_image_preview"
								/>
							</div>
						</div>

						<div class="col-span-2">
							<label class="inline-flex items-center">
								<input
									type="checkbox"
									class="form-checkbox border rounded"
									v-model="form.owner"
								/>
								<span class="mr-2">المستخدم هو المالك</span>
							</label>
						</div>

						<div class="col-span-2" v-if="!form.owner">
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
										v-model="form.driver_name"
									/>
									<InputError
										:message="form.errors.driver_name"
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
										v-model="form.driver_id"
									/>
									<InputError
										:message="form.errors.driver_id"
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
										type="file"
										class="hidden"
										ref="driver_id_image"
										@change="updateDriverIdPreview"
									/>
									<SecondaryButton
										class="mt-1"
										type="button"
										@click.prevent="driver_id_image.click()"
									>
										<span class="py-1"> اختيار صورة </span>
									</SecondaryButton>

									<InputError
										:message="form.errors.driver_id_image"
										class="mt-2"
									/>
									<div class="mt-2">
										<img
											v-show="
												form.driver_id_image_preview
											"
											class="rounded w-64"
											:src="form.driver_id_image_preview"
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

	setup(props, { emit }) {
		const form = useForm({
			vehicle_type: props.user.vehicle_type,
			vehicle_model: props.user.vehicle_model,
			vehicle_license: props.user.vehicle_license,
			vehicle_license_image: null,
			vehicle_license_image_preview: null,

			owner: true,
			driver_name: props.user.driver_name,
			driver_id: props.user.driver_id,
			driver_id_image: null,
			driver_id_image_preview: null,
		});

		const vehicle_license_image = ref(null);
		const driver_id_image = ref(null);

		const fill = () => {
			if (vehicle_license_image.value)
				form.vehicle_license_image =
					vehicle_license_image.value.files[0];
			if (driver_id_image.value)
				form.driver_id_image = driver_id_image.value.files[0];

			form.post(route("fourth.step"), { preserveScroll: true });
		};

		const updateVehicleLicensePreview = () => {
			const reader = new FileReader();

			reader.onload = (e) => {
				form.vehicle_license_image_preview = e.target.result;
			};

			reader.readAsDataURL(vehicle_license_image.value.files[0]);
		};

		const updateDriverIdPreview = () => {
			const reader = new FileReader();

			reader.onload = (e) => {
				form.driver_id_image_preview = e.target.result;
			};

			reader.readAsDataURL(driver_id_image.value.files[0]);
		};

		return {
			form,
			fill,
			vehicle_license_image,
			driver_id_image,
			updateVehicleLicensePreview,
			updateDriverIdPreview,
		};
	},
};
</script>
<template>
	<div>
		<p class="text-gray-700 mb-3" v-if="user.role == 'client'">
			بيانات العنوان
		</p>
		<p class="text-gray-700 mb-3" v-if="user.role == 'company'">
			البيانات الرسمية لــ(الشركة / المؤسسة)
		</p>
		<p class="text-gray-700 mb-3" v-if="user.role == 'worker'">
			البيانات الرسمية وبيانات العنوان
		</p>

		<div class="shadow bg-white w-full">
			<form @submit.prevent="fill">
				<div class="grid gap-3 py-4 px-8">
					<div
						class="grid gap-3 grid-cols-1 md:grid-cols-2"
						v-if="user.role == 'company'"
					>
						<div class="col-span-1">
							<Label for="company_name" value="اسم الشركة" />
							<Input
								id="company_name"
								type="text"
								class="block w-full mt-1"
								v-model="form.company_name"
							/>
							<InputError
								:message="form.errors.company_name"
								class="mt-1"
							/>
						</div>

						<div class="col-span-1" v-if="form.iqama">
							<Label
								for="national_id"
								value="رفم السجل المدني أو الإقامة"
							/>
							<Input
								id="national_id"
								type="text"
								class="block w-full mt-1"
								v-model="form.national_id"
							/>
							<InputError
								:message="form.errors.national_id"
								class="mt-1"
							/>
						</div>
						<div class="col-span-1" v-else>
							<Label
								for="commercial_registration"
								value="السجل التجاري"
							/>
							<Input
								id="commercial_registration"
								type="text"
								class="block w-full mt-1"
								v-model="form.commercial_registration"
							/>
							<InputError
								:message="form.errors.commercial_registration"
								class="mt-1"
							/>
						</div>

						<div class="col-span-1 md:col-start-2">
							<label class="inline-flex items-center">
								<input
									type="checkbox"
									class="form-checkbox border rounded"
									v-model="form.iqama"
								/>
								<span class="mr-2">
									رقم السجل المدني أو الافامة
								</span>
							</label>
						</div>

						<div class="col-span-1">
							<Label for="activity" value="النشاط" />
							<Select
								id="activity"
								class="block w-full mt-1"
								v-model="form.activity"
							>
								<option value="transport">نقليات</option>
								<option value="livestock">تجارة مواشي</option>
								<option value="contracting">
									مقاولات عامة
								</option>
								<option value="farms">
									تشغيل وإدارة مزارع
								</option>
								<option value="related">
									ذو صلة بالخيارات السابقة
								</option>
								<option value="other">أخرى</option>
							</Select>
							<InputError
								:message="form.errors.activity"
								class="mt-1"
							/>
						</div>

						<div class="col-span-1">
							<Label for="origin" value="بلد المنشأ" />
							<Select
								id="origin"
								class="block w-full mt-1"
								v-model="form.origin"
							>
								<option
									v-for="(country, key) in countries"
									:key="key"
									:value="key"
								>
									{{ country }}
								</option>
							</Select>
							<InputError
								:message="form.errors.origin"
								class="mt-1"
							/>
						</div>
					</div>

					<div v-if="user.role == 'worker'">
						<Label
							for="national_id"
							value="أدخل رفم السجل المدني أو رقم الإقامة"
						/>
						<Input
							id="national_id"
							type="text"
							class="block w-full mt-1"
							v-model="form.national_id"
						/>
						<InputError
							:message="form.errors.national_id"
							class="mt-1"
						/>
					</div>

					<div>
						<Label for="region_id" value="المنطقة" />
						<Select
							id="region_id"
							class="block w-full mt-1"
							v-model="form.region_id"
						>
							<option
								v-for="region in regions"
								:key="region.id"
								:value="region.id"
							>
								{{ region.name }}
							</option>
						</Select>
						<InputError
							:message="form.errors.region_id"
							class="mt-1"
						/>
					</div>
					<div>
						<Label for="city_id" value="المدينة" />
						<Select
							id="city_id"
							class="block w-full mt-1"
							v-model="form.city_id"
						>
							<template v-if="form.region_id">
								<option
									v-for="city in regions.find(
										(region) => region.id == form.region_id
									).cities"
									:key="city.id"
									:value="city.id"
								>
									{{ city.name }}
								</option>
							</template>
							<option v-else value="">اختر المنطقة اولا</option>
						</Select>
						<InputError
							:message="form.errors.city_id"
							class="mt-1"
						/>
					</div>

					<div
						class="grid gap-3 grid-cols-3"
						v-if="user.role == 'company'"
					>
						<div class="col-span-3 md:col-span-1 self-center">
							<label class="inline-flex items-center">
								<input
									type="checkbox"
									class="form-checkbox border rounded"
									v-model="form.has_website"
								/>
								<span class="mr-2">
									هل تمتلك الشركة موقعا إلكترونيا ؟
								</span>
							</label>
						</div>

						<div
							class="col-span-3 md:col-span-2"
							v-if="form.has_website"
						>
							<Label
								for="website"
								value="موقع الشركة على الانترنت"
							/>
							<Input
								id="website"
								type="text"
								class="block w-full mt-1"
								v-model="form.website"
							/>
							<InputError
								:message="form.errors.website"
								class="mt-1"
							/>
						</div>

						<div class="col-span-3">
							<Label
								for="bio"
								value="أكتب وصفا مختصرا عن شركتك/مؤسستك (اختياري)"
							/>
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
import { useForm } from "@inertiajs/inertia-vue3";

import Label from "@/UI/Label";
import Input from "@/UI/Input";
import Select from "@/UI/Select";
import InputError from "@/UI/InputError";
import Button from "@/UI/Button";
import Textarea from "@/UI/Textarea.vue";
import SecondaryButton from "@/UI/SecondaryButton";

export default {
	props: ["user", "countries", "regions"],

	components: {
		Label,
		Input,
		Select,
		Textarea,
		InputError,
		Button,
		SecondaryButton,
	},

	setup(props, { emit }) {
		const form = useForm({
			region_id: props.user.region_id,
			city_id: props.user.city_id,
			national_id: props.user.national_id,
			company_name: props.user.company_name,
			commercial_registration: props.user.commercial_registration,
			iqama: false,
			activity: props.user.activity,
			origin: props.user.origin,
			has_website: false,
			website: props.user.website,
			bio: props.user.bio,
		});

		const fill = () => {
			form.post(route("second.step"), {
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
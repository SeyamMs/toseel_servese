<template>
	<layout
		:title="
			user.first_name
				? `${user.first_name} ${user.last_name}`
				: 'لم يكمل ملفه'
		"
	>
		<Form @submitted="update">
			<template #title>
				<inertia-link
					:href="route('admin.users')"
					class="text-blue-500 hover:text-blue-700"
				>
					الاعضاء
				</inertia-link>
				/
				{{
					user.first_name
						? `${user.first_name} ${user.last_name}`
						: "لم يكمل ملفه"
				}}
			</template>

			<template #form>
				<div class="flex items-center col-span-6">
					<hr class="flex-grow" />
					<h1 class="flex-shrink-0 px-2">بيانات الحساب</h1>
					<hr class="flex-grow" />
				</div>
				<div class="col-span-6 md:col-span-3">
					<Label for="role" value="نوع الحساب" />
					<Input
						id="role"
						type="text"
						class="block w-full mt-1"
						:modelValue="
							{ client: 'عميل', company: 'شركة', worker: 'فرد' }[
								user.role
							]
						"
						disabled
					/>
				</div>
				<div class="col-span-6 md:col-span-3">
					<Label for="created_at" value="انشئ منذ" />
					<Input
						id="created_at"
						type="text"
						class="block w-full mt-1"
						:modelValue="format(user.created_at)"
						disabled
					/>
				</div>

				<div class="flex items-center col-span-6">
					<hr class="flex-grow" />
					<h1 class="flex-shrink-0 px-2">بيانات التسجيل</h1>
					<hr class="flex-grow" />
				</div>
				<div class="col-span-6">
					<Label for="email" value="البريد الالكتروني" />
					<Input
						dir="ltr"
						id="email"
						type="text"
						class="block w-full mt-1"
						v-model="form.email"
					/>
					<InputError :message="form.errors.email" class="mt-2" />
				</div>
				<div class="col-span-6">
					<Label for="phone" value="رقم الهاتف" />
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
					<InputError :message="form.errors.phone" class="mt-2" />
				</div>
				<div class="col-span-6 px-6 py-3 bg-blue-500 rounded-md">
					<p class="text-white">
						اترك كلمة المرور فارغة اذا كنت لا ترغب في تعديلها
					</p>
				</div>
				<div class="col-span-6 md:col-span-3">
					<Label for="password" value="كلمة المرور" />
					<Input
						id="password"
						type="password"
						class="block w-full mt-1"
						v-model="form.password"
					/>
					<InputError :message="form.errors.password" class="mt-2" />
				</div>
				<div class="col-span-6 md:col-span-3">
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
					<InputError
						:message="form.errors.password_confirmation"
						class="mt-2"
					/>
				</div>

				<div class="flex items-center col-span-6">
					<hr class="flex-grow" />
					<h1
						class="flex-shrink-0 px-2"
						v-if="user.role === 'company'"
					>
						بيانات مندوب/معقب الشركة
					</h1>
					<h1 class="flex-shrink-0 px-2" v-else>البيانات الشخصية</h1>

					<hr class="flex-grow" />
				</div>
				<div class="col-span-6">
					<Label for="first_name" value="الاسم الاول" />
					<Input
						id="first_name"
						type="text"
						class="block w-full mt-1"
						v-model="form.first_name"
					/>
					<InputError
						:message="form.errors.first_name"
						class="mt-2"
					/>
				</div>
				<div class="col-span-6">
					<Label for="middle_name" value="الاسم الاب" />
					<Input
						id="middle_name"
						type="text"
						class="block w-full mt-1"
						v-model="form.middle_name"
					/>
					<InputError
						:message="form.errors.middle_name"
						class="mt-2"
					/>
				</div>
				<div class="col-span-6">
					<Label for="last_name" value="الاسم العائلة" />
					<Input
						id="last_name"
						type="text"
						class="block w-full mt-1"
						v-model="form.last_name"
					/>
					<InputError :message="form.errors.last_name" class="mt-2" />
				</div>
				<template v-if="user.role == 'worker'">
					<div class="col-span-6">
						<Label for="age" value="العمر" />
						<Input
							id="age"
							type="number"
							min="18"
							class="block w-full mt-1"
							v-model="form.age"
						/>
						<InputError :message="form.errors.age" class="mt-1" />
					</div>

					<div class="col-span-6">
						<Label for="bio" value="أكتب وصفا مختصرا عن نفسك" />
						<Textarea
							id="bio"
							type="text"
							class="block w-full mt-1"
							v-model="form.bio"
						/>
						<InputError :message="form.errors.bio" class="mt-1" />
					</div>
				</template>
				<div class="col-span-6">
					<label class="inline-flex items-center">
						<input
							type="checkbox"
							class="form-checkbox border rounded"
							v-model="form.saudi"
						/>
						<span class="mr-2">سعودي</span>
					</label>
					<InputError :message="form.errors.saudi" class="mt-2" />
				</div>

				<div class="flex items-center col-span-6">
					<hr class="flex-grow" />
					<h1
						class="flex-shrink-0 px-2"
						v-if="user.role === 'client'"
					>
						بيانات العنوان
					</h1>
					<h1
						class="flex-shrink-0 px-2"
						v-if="user.role === 'company'"
					>
						البيانات الرسمية لــ(الشركة / المؤسسة)
					</h1>
					<h1
						class="flex-shrink-0 px-2"
						v-if="user.role === 'worker'"
					>
						البيانات الرسمية وبيانات العنوان
					</h1>
					<hr class="flex-grow" />
				</div>
				<template v-if="user.role == 'company'">
					<div class="col-span-6 md:col-span-3">
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
					<div class="col-span-6 md:col-span-3" v-if="form.iqama">
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
					<div class="col-span-6 md:col-span-3" v-else>
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
					<div class="col-span-6 md:col-span-3 md:col-start-4">
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
					<div class="col-span-6 md:col-span-3">
						<Label for="activity" value="النشاط" />
						<Select
							id="activity"
							class="block w-full mt-1"
							v-model="form.activity"
						>
							<option value="transport">نقليات</option>
							<option value="livestock">تجارة مواشي</option>
							<option value="contracting">مقاولات عامة</option>
							<option value="farms">تشغيل وإدارة مزارع</option>
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
					<div class="col-span-6 md:col-span-3">
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
				</template>
				<template v-if="user.role == 'worker'">
					<div class="col-span-6">
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
				</template>
				<div class="col-span-6">
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
					<InputError :message="form.errors.region_id" class="mt-1" />
				</div>
				<div class="col-span-6">
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
					<InputError :message="form.errors.city_id" class="mt-1" />
				</div>
				<template v-if="user.role == 'company'">
					<div class="col-span-6 md:col-span-2 self-center">
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
						class="col-span-6 md:col-span-4"
						v-if="form.has_website"
					>
						<Label for="website" value="موقع الشركة على الانترنت" />
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

					<div class="col-span-6">
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
						<InputError :message="form.errors.bio" class="mt-1" />
					</div>
				</template>

				<template v-if="user.role === 'company'">
					<div class="flex items-center col-span-6">
						<hr class="flex-grow" />
						<h1 class="flex-shrink-0 px-2">
							المجالات التي ترغب الشركة / المؤسسة بالعمل بها
						</h1>

						<hr class="flex-grow" />
					</div>
					<InputError
						:message="form.errors['workers.total']"
						class="col-span-6 text-center"
					/>

					<div
						v-for="job in jobs"
						:key="job"
						class="col-span-6 grid gap-3 grid-cols-6"
					>
						<div class="col-span-2">
							<label class="inline-flex items-center">
								<input
									name="jobs[]"
									type="checkbox"
									class="form-chectitlekbox border rounded"
									:value="job"
									@change="
										(e) => {
											if (e.target.checked)
												form.workers[job] = 1;
											else delete form.workers[job];
										}
									"
									v-model="form.jobs"
								/>
								<span class="mr-2">{{ title(job) }}</span>
							</label>
						</div>
						<div class="col-span-4" v-if="form.jobs.includes(job)">
							<Label :for="job">
								عدد العاملين في مجال ({{ title(job) }})
							</Label>
							<Input
								:id="job"
								type="number"
								class="block w-full mt-1"
								min="1"
								v-model.number="form.workers[job]"
							/>
							<InputError
								:message="form.errors[`workers.${job}`]"
								class="mt-1"
							/>
						</div>
					</div>
				</template>
				<template v-if="user.role === 'worker'">
					<div class="flex items-center col-span-6">
						<hr class="flex-grow" />

						<h1 class="flex-shrink-0 px-2">
							المجالات التي ترغب بالعمل بها
						</h1>
						<hr class="flex-grow" />
					</div>
					<InputError
						:message="form.errors.jobs"
						class="col-span-6 text-center"
					/>
					<div
						v-for="job in jobs"
						:key="job"
						class="col-span-6 md:col-span-3"
					>
						<label class="inline-flex items-center">
							<input
								v-if="job == 'general'"
								type="checkbox"
								ref="general"
								@change="
									(e) => {
										if (e.target.checked)
											form.jobs = [
												'porter',
												'cattle',
												'fodder',
												'driver',
												'teacher',
											];
										else form.jobs = [];
									}
								"
								class="form-checkbox border rounded"
							/>
							<input
								v-else
								name="jobs[]"
								type="checkbox"
								:value="job"
								class="form-checkbox border rounded"
								v-model="form.jobs"
							/>
							<span class="mr-2">{{ title(job) }}</span>
						</label>
					</div>
				</template>
				<template v-if="['company', 'worker'].includes(user.role)">
					<!-- monthly_fee & total -->
					<div class="col-span-6 md:col-span-3">
						<Label for="monthly_fee" value="قيمة الرسم الشهري" />
						<Input
							id="monthly_fee"
							type="text"
							class="block w-full mt-1"
							v-model="form.monthly_fee"
							disabled
						/>
					</div>
					<div class="col-span-6 md:col-span-3">
						<Label for="total" value="الإجمالي" />
						<Input
							id="total"
							type="text"
							class="block w-full mt-1"
							v-model="form.total"
							disabled
						/>
						<span
							class="text-xs italic text-gray-600"
							v-if="form.workers"
						>
							القيمة أعلاه تعبر عن قيمة الرسم الشهري لمدة تبلغ
							<b>{{ form.release }}</b>
							شهر/أشهر
						</span>
					</div>
				</template>

				<template v-if="user.role === 'worker'">
					<div class="flex items-center col-span-6">
						<hr class="flex-grow" />
						<h1 class="flex-shrink-0 px-2">
							بيانات المركبة والسائق
						</h1>
						<hr class="flex-grow" />
					</div>

					<div class="col-span-6 md:col-span-3">
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

					<div class="col-span-6 md:col-span-3">
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

					<div class="col-span-6 md:col-span-3">
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

					<div class="col-span-6 md:col-span-3">
						<Label
							for="vehicle_license_image"
							value="صورة الرخصة"
						/>
						<input
							id="vehicle_license_image"
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
								v-if="form.license"
								class="rounded w-64"
								:src="form.license"
							/>
							<img
								v-else
								class="rounded w-64"
								:src="form.vehicle_license"
							/>
						</div>
					</div>

					<div class="col-span-6">
						<label class="inline-flex items-center">
							<input
								type="checkbox"
								class="form-checkbox border rounded"
								v-model="form.driver.owner"
							/>
							<span class="mr-2">المستخدم هو المالك</span>
						</label>
					</div>

					<template v-if="!form.driver?.owner">
						<h3 class="col-span-6 text-2xl">بيانات المستخدم</h3>

						<div class="col-span-6 md:col-span-2">
							<Label for="driver_name" value="اسم المستخدم" />
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

						<div class="col-span-6 md:col-span-2">
							<Label for="driver_id" value="هوية المستخدم" />
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

						<div class="col-span-6 md:col-span-2">
							<Label
								for="driver_id_image"
								value="صورة هوية المستخدم"
							/>
							<input
								id="driver_id_image"
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
								:message="form.errors['driver.id_image']"
								class="mt-2"
							/>
							<div class="mt-2">
								<img
									v-if="form.id"
									class="rounded w-64"
									:src="form.id"
								/>
								<img
									v-else
									class="rounded w-64"
									:src="form.driver_id"
								/>
							</div>
						</div>
					</template>
				</template>
			</template>

			<template #actions>
				<ActionMessage :on="form.recentlySuccessful">
					تم تعديل العضو
				</ActionMessage>

				<DangerButton class="mx-3" @click="confirmation = true">
					حذف العضو
				</DangerButton>

				<ConfirmationModal
					:show="confirmation"
					@close="confirmation = false"
				>
					<template #title> تأكيد حذف حساب العضو </template>

					<template #content>
						هل انت متاكد؟ لا يمكن التراجع عن هذه الخطوة
					</template>

					<template #footer>
						<SecondaryButton @click="confirmation = false">
							تراجع
						</SecondaryButton>

						<DangerButton
							@click="destroy"
							:class="{ 'opacity-25': form.processing }"
							:disabled="form.processing"
						>
							حذف
						</DangerButton>
					</template>
				</ConfirmationModal>

				<Button
					:class="{ 'opacity-25': form.processing }"
					:disabled="form.processing"
				>
					تعديل العضو
				</Button>
			</template>
		</Form>
	</layout>
</template>

<script>
import moment from "moment";
moment.locale("ar");

import { onMounted, ref, watchEffect } from "vue";
import { useForm } from "@inertiajs/inertia-vue3";

import Layout from "@/Layouts/Panel";
import Form from "@/Components/Admin/Form";
import Label from "@/UI/Label";
import Input from "@/UI/Input";
import InputError from "@/UI/InputError";
import DangerButton from "@/UI/DangerButton";
import ConfirmationModal from "@/UI/ConfirmationModal";
import SecondaryButton from "@/UI/SecondaryButton";
import Button from "@/UI/Button";
import ActionMessage from "@/UI/ActionMessage";
import Select from "@/UI/Select";
import Textarea from "@/UI/Textarea";
import Icon from "@/UI/Icon";

export default {
	props: ["user", "regions", "countries"],

	components: {
		Layout,
		Form,
		Label,
		Input,
		InputError,
		DangerButton,
		ConfirmationModal,
		SecondaryButton,
		Button,
		ActionMessage,
		Select,
		Textarea,
		Icon,
	},

	setup(props) {
		const form = useForm({ ...props.user });
		const jobs = [
			"porter",
			"cattle",
			"fodder",
			"driver",
			"teacher",
			"general",
		];
		const general = ref(null);
		const confirmation = ref(false);
		const license = ref(null);
		const id = ref(null);

		const format = (date) => {
			return moment(date).fromNow();
		};

		const title = (job) => {
			return {
				porter: "تحميل وتنزيل",
				cattle: "نقل الانعام",
				fodder: "نقل وتوصيل الاعلاف",
				driver: "نقل (بضائع أثاث منزلي أغذية إلخ)",
				teacher: "معلم/يــن فك وتركيب",
				general: "الكل",
			}[job];
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

		const update = () => {
			if (license.value)
				form.vehicle.license_image = license.value.files[0];
			if (id.value) form.driver.id_image = id.value.files[0];

			form.post(route("admin.users.update", props.user.id), {
				preserveScroll: true,
			});
		};

		const destroy = () => {
			form.delete(route("admin.users.destroy", props.user.id), {
				onSuccess: () => {
					document.body.style.removeProperty("overflow");
				},
			});
		};

		onMounted(() => {
			if (general.value) general.value.checked = form.jobs.length === 5;
		});

		watchEffect(() => {
			// company form calculations :D
			if (props.user.role == "company") {
				// define 3 variables to hold calculations :D
				let workers = 0,
					discout = 1,
					release = 1;

				// sum up the workers number in all jobs :D
				jobs.forEach((job) => {
					if (form.jobs.includes(job))
						workers += parseInt(form.workers[job]);
				});

				// depending on the number of workers we determine the amount of the discount and the release period in months :D
				if (workers < 5) (discout = 2), (release = 1);
				else if (workers < 10) (discout = 0.75), (release = 3);
				else if (workers < 15) (discout = 0.5), (release = 6);
				else (discout = 0.25), (release = 9);

				// finally, set the form values to the calculations results :D
				form.release = release;
				form.workers.total = workers;
				form.monthly_fee = workers * 50 * discout;
				form.total = form.monthly_fee * release;
			}

			// worker form calculations :D
			if (props.user.role == "worker") {
				// special thing here is to bind all checkbox with others :D
				if (general.value)
					general.value.checked = form.jobs.length === 5;

				form.monthly_fee = form.jobs.length * 50;
				if (form.jobs.length === 5) form.monthly_fee -= 25;
				form.total = form.monthly_fee;
			}

			// define formatter to replace integers with this sleek form XX.XX SAR :D
			let formatter = new Intl.NumberFormat("en-US", {
				style: "currency",
				currency: "SAR",
			});

			// finally format the values :D
			form.monthly_fee = formatter.format(form.monthly_fee);
			form.total = formatter.format(form.total);
		});

		return {
			form,
			jobs,
			general,
			confirmation,
			license,
			id,
			format,
			title,
			licensePreview,
			idPreview,
			update,
			destroy,
		};
	},
};
</script>

<template>
	<div>
		<template v-if="user.role == 'company'">
			<p class="text-gray-700 mb-3">
				المجالات التي ترغب الشركة / المؤسسة بالعمل بها
			</p>
			<div class="shadow bg-white w-full">
				<form @submit.prevent="fill">
					<div class="grid gap-3 py-4 px-8">
						<div>
							<label class="inline-flex items-center">
								<input
									type="checkbox"
									class="form-checkbox border rounded"
									v-model="form.all"
									@change="checkall"
								/>
								<span class="mr-2">الكل</span>
							</label>
						</div>

						<div
							class="grid gap-3 grid-cols-1 md:grid-cols-3 border-t pt-4"
						>
							<div class="col-span-1">
								<label class="inline-flex items-center">
									<input
										type="checkbox"
										class="form-checkbox border rounded"
										v-model="form.porter"
									/>
									<span class="mr-2">تحميل وتنزيل</span>
								</label>
							</div>
							<div class="col-span-2" v-if="form.porter">
								<Label
									for="porters"
									value="عدد العاملين في مجال (التحميل و التنزيل)"
								/>
								<Input
									id="porters"
									type="number"
									class="block w-full mt-1"
									min="1"
									v-model="form.porters"
								/>
								<InputError
									:message="form.errors.porters"
									class="mt-1"
								/>
							</div>
						</div>

						<div
							class="grid gap-3 grid-cols-1 md:grid-cols-3 border-t pt-4"
						>
							<div class="col-span-1">
								<label class="inline-flex items-center">
									<input
										type="checkbox"
										class="form-checkbox border rounded"
										v-model="form.cattle"
									/>
									<span class="mr-2">نقل الانعام</span>
								</label>
							</div>
							<div class="col-span-2" v-if="form.cattle">
								<Label
									for="cattles"
									value="عدد العاملين في مجال(نقل الانعام (طيور مواشي حيوانات اليفة إلخ))"
								/>
								<Input
									id="cattles"
									type="number"
									class="block w-full mt-1"
									min="1"
									v-model="form.cattles"
								/>
								<InputError
									:message="form.errors.cattles"
									class="mt-1"
								/>
							</div>
						</div>

						<div
							class="grid gap-3 grid-cols-1 md:grid-cols-3 border-t pt-4"
						>
							<div class="col-span-1">
								<label class="inline-flex items-center">
									<input
										type="checkbox"
										class="form-checkbox border rounded"
										v-model="form.fodder"
									/>
									<span class="mr-2">
										نقل وتوصيل الاعلاف
									</span>
								</label>
							</div>
							<div class="col-span-2" v-if="form.fodder">
								<Label
									for="fodders"
									value="عدد العاملين في مجال(نقل وتوصيل الاعلاف (برسيم شعير قصب إلخ))"
								/>
								<Input
									id="fodders"
									type="number"
									class="block w-full mt-1"
									min="1"
									v-model="form.fodders"
								/>
								<InputError
									:message="form.errors.fodders"
									class="mt-1"
								/>
							</div>
						</div>

						<div
							class="grid gap-3 grid-cols-1 md:grid-cols-3 border-t pt-4"
						>
							<div class="col-span-1">
								<label class="inline-flex items-center">
									<input
										type="checkbox"
										class="form-checkbox border rounded"
										v-model="form.driver"
									/>
									<span class="mr-2">
										نقل (بضائع أثاث منزلي أغذية إلخ)
									</span>
								</label>
							</div>
							<div class="col-span-2" v-if="form.driver">
								<Label
									for="drivers"
									value="عدد العاملين في مجال(سواق نقل (بضائع أثاث منزلي أغذية إلخ))"
								/>
								<Input
									id="drivers"
									type="number"
									class="block w-full mt-1"
									min="1"
									v-model="form.drivers"
								/>
								<InputError
									:message="form.errors.drivers"
									class="mt-1"
								/>
							</div>
						</div>

						<div
							class="grid gap-3 grid-cols-1 md:grid-cols-3 border-t pt-4"
						>
							<div class="col-span-1">
								<label class="inline-flex items-center">
									<input
										type="checkbox"
										class="form-checkbox border rounded"
										v-model="form.teacher"
									/>
									<span class="mr-2">
										معلم/يــن فك وتركيب
									</span>
								</label>
							</div>
							<div class="col-span-2" v-if="form.teacher">
								<Label
									for="teachers"
									value="عدد العاملين في مجال(معلم/يــن فك وتركيب)"
								/>
								<Input
									id="teachers"
									type="number"
									class="block w-full mt-1"
									min="1"
									v-model="form.teachers"
								/>
								<InputError
									:message="form.errors.teachers"
									class="mt-1"
								/>
							</div>
						</div>

						<div
							class="grid gap-3 grid-cols-2 md:grid-cols-4 border-t pt-4"
						>
							<div class="col-span-2">
								<Label
									for="monthly_fee"
									value="قيمة الرسم الشهري"
								/>
								<Input
									id="monthly_fee"
									type="text"
									class="block w-full mt-1"
									v-model="form.monthly_fee"
									disabled
								/>
							</div>
							<div class="col-span-2">
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
									القيمة أعلاه تعبر عن قيمة الرسم الشهري لمدة
									تبلغ
									<b>{{ form.release }}</b>
									شهر/أشهر
								</span>
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

						<InputError
							:message="form.errors.workers"
							class="mt-1"
						/>

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
		</template>
		<template v-else>
			<p class="text-gray-700 mb-3">المجالات التي ترغب بالعمل بها</p>
			<div class="shadow bg-white w-full">
				<form @submit.prevent="fill">
					<div class="grid gap-3 py-4 px-8">
						<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
							<div class="col-span-1">
								<label class="inline-flex items-center">
									<input
										type="checkbox"
										class="form-checkbox border rounded"
										v-model="form.all"
										@change="checkall"
									/>
									<span class="mr-2">الكل</span>
								</label>
							</div>
							<div class="col-span-1">
								<label class="inline-flex items-center">
									<input
										type="checkbox"
										class="form-checkbox border rounded"
										v-model="form.porter"
									/>
									<span class="mr-2">تحميل وتنزيل</span>
								</label>
							</div>

							<div class="col-span-1">
								<label class="inline-flex items-center">
									<input
										type="checkbox"
										class="form-checkbox border rounded"
										v-model="form.cattle"
									/>
									<span class="mr-2">نقل الانعام</span>
								</label>
							</div>
							<div class="col-span-1">
								<label class="inline-flex items-center">
									<input
										type="checkbox"
										class="form-checkbox border rounded"
										v-model="form.fodder"
									/>
									<span class="mr-2">
										نقل وتوصيل الاعلاف
									</span>
								</label>
							</div>

							<div class="col-span-1">
								<label class="inline-flex items-center">
									<input
										type="checkbox"
										class="form-checkbox border rounded"
										v-model="form.driver"
									/>
									<span class="mr-2">
										نقل (بضائع أثاث منزلي أغذية إلخ)
									</span>
								</label>
							</div>

							<div class="col-span-1">
								<label class="inline-flex items-center">
									<input
										type="checkbox"
										class="form-checkbox border rounded"
										v-model="form.teacher"
									/>
									<span class="mr-2">
										معلم/يــن فك وتركيب
									</span>
								</label>
							</div>
						</div>
						<div
							class="grid gap-3 grid-cols-1 md:grid-cols-2 border-t pt-4"
						>
							<div class="col-span-1">
								<Label
									for="monthly_fee"
									value="قيمة الرسم الشهري"
								/>
								<Input
									id="monthly_fee"
									type="text"
									class="block w-full mt-1"
									v-model="form.monthly_fee"
									disabled
								/>
							</div>
							<div class="col-span-1">
								<Label for="total" value="الإجمالي" />
								<Input
									id="total"
									type="text"
									class="block w-full mt-1"
									v-model="form.total"
									disabled
								/>
								<span class="text-xs italic text-gray-600">
									القيمة أعلاه تعبر عن قيمة الرسم الشهري لمدة
									تبلغ شهر واحد
								</span>
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

						<InputError :message="form.errors.jobs" class="mt-1" />

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
		</template>
	</div>
</template>

<script>
import { useForm } from "@inertiajs/inertia-vue3";
import { watchEffect } from "vue";

import Label from "@/UI/Label";
import Input from "@/UI/Input";
import InputError from "@/UI/InputError";
import Button from "@/UI/Button";
import SecondaryButton from "@/UI/SecondaryButton";

export default {
	props: ["user"],

	components: {
		Label,
		Input,
		InputError,
		Button,
		SecondaryButton,
	},

	setup(props, { emit }) {
		let data = {
			all: false,
			porter: props.user.porter !== null ? props.user.porter : false,
			cattle: props.user.cattle !== null ? props.user.cattle : false,
			fodder: props.user.fodder !== null ? props.user.fodder : false,
			driver: props.user.driver !== null ? props.user.driver : false,
			teacher: props.user.teacher !== null ? props.user.teacher : false,
			porters: props.user.porters !== null ? props.user.teacher : 1,
			cattles: props.user.cattles !== null ? props.user.teacher : 1,
			fodders: props.user.fodders !== null ? props.user.teacher : 1,
			drivers: props.user.drivers !== null ? props.user.teacher : 1,
			teachers: props.user.teachers !== null ? props.user.teacher : 1,
			workers: 0,
			release: "",
			monthly_fee: "",
			total: "",
		};

		if (props.user.role == "worker")
			data = {
				all: false,
				porter: props.user.porter !== null ? props.user.porter : false,
				cattle: props.user.cattle !== null ? props.user.cattle : false,
				fodder: props.user.fodder !== null ? props.user.fodder : false,
				driver: props.user.driver !== null ? props.user.driver : false,
				teacher:
					props.user.teacher !== null ? props.user.teacher : false,
				jobs: [],
				monthly_fee: "",
				total: "",
			};

		const form = useForm(data);

		const fill = () => {
			form.post(route("third.step"), {
				preserveScroll: true,
				onSuccess: () => {
					emit("next");
				},
			});
		};

		watchEffect(() => {
			form.all =
				form.porter &&
				form.cattle &&
				form.fodder &&
				form.driver &&
				form.teacher;

			if (props.user.role == "company") {
				let workers = 0;
				if (form.porter) workers = workers + parseInt(form.porters);
				if (form.cattle) workers = workers + parseInt(form.cattles);
				if (form.fodder) workers = workers + parseInt(form.fodders);
				if (form.driver) workers = workers + parseInt(form.drivers);
				if (form.teacher) workers = workers + parseInt(form.teachers);

				let discout = 1,
					release = 1;
				if (workers < 5) (discout = 2), (release = 1);
				else if (workers < 10) (discout = 0.75), (release = 3);
				else if (workers < 15) (discout = 0.5), (release = 6);
				else (discout = 0.25), (release = 9);

				form.workers = workers;
				form.release = release;
				form.monthly_fee = workers * 50 * discout;
				form.total = form.monthly_fee * release;
			}

			if (props.user.role == "worker") {
				let jobs = [];
				if (form.porter) jobs.push("porter");
				if (form.cattle) jobs.push("cattle");
				if (form.fodder) jobs.push("fodder");
				if (form.driver) jobs.push("driver");
				if (form.teacher) jobs.push("teacher");

				form.jobs = jobs;
				form.monthly_fee = form.jobs.length * 50;
				form.total = form.monthly_fee;
			}

			let formatter = new Intl.NumberFormat("en-US", {
				style: "currency",
				currency: "SAR",
			});

			form.monthly_fee = formatter.format(form.monthly_fee);
			form.total = formatter.format(form.total);
		});

		const checkall = () => {
			form.porter = form.cattle = form.fodder = form.driver = form.teacher =
				form.all;
		};

		return { form, fill, checkall };
	},
};
</script>
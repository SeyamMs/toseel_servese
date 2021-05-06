<template>
	<div>
		<p class="text-gray-700 mb-3" v-if="user.role == 'company'">
			المجالات التي ترغب الشركة / المؤسسة بالعمل بها
		</p>
		<p class="text-gray-700 mb-3" v-if="user.role == 'worker'">
			المجالات التي ترغب بالعمل بها
		</p>

		<div class="shadow bg-white w-full">
			<div class="py-4 px-8 flex justify-center border-b">
				<SecondaryButton @click.prevent="modal = true" class="px-10">
					دليل الاسعار
				</SecondaryButton>
				<DialogModal
					maxWidth="fit"
					:show="modal"
					@close="modal = false"
				>
					<template #title>
						<h1>دليل الاسعار</h1>
					</template>

					<template #content>
						<div class="">
							<object
								v-if="user.role == 'company'"
								class="w-full h-96"
								:data="$page.props.settings.company_pdf"
								type="application/pdf"
							></object>

							<object
								v-if="user.role == 'worker'"
								class="w-full h-96"
								:data="$page.props.settings.worker_pdf"
								type="application/pdf"
							></object>
						</div>
					</template>

					<template #footer>
						<SecondaryButton @click="modal = false">
							اغلاق
						</SecondaryButton>
					</template>
				</DialogModal>
			</div>

			<form @submit.prevent="fill">
				<!-- for company -->
				<div class="grid gap-3 py-4 px-8" v-if="user.role == 'company'">
					<div
						v-for="(job, index) in jobs"
						:key="job"
						:class="{ 'border-t pt-4': index !== 0 }"
						class="grid gap-3 grid-cols-1 md:grid-cols-3"
					>
						<div class="col-span-1">
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
						<div class="col-span-2" v-if="form.jobs.includes(job)">
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
				</div>

				<!-- for workers -->
				<div
					class="grid gap-3 grid-cols-1 md:grid-cols-2 py-4 px-8"
					v-if="user.role == 'worker'"
				>
					<div v-for="job in jobs" :key="job" class="col-span-1">
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
				</div>

				<!-- monthly_fee & total -->
				<div
					class="grid gap-3 grid-cols-1 md:grid-cols-2 py-4 px-8 border-t pt-4"
				>
					<div class="col-span-1">
						<Label for="monthly_fee" value="قيمة الرسم الشهري" />
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
							class="block w-full mt-1 mb-2"
							v-model="form.total"
							disabled
						/>
						<span class="text-green-600" v-if="form.workers">
							القيمة أعلاه تعبر عن قيمة الرسم الشهري لمدة تبلغ
							<b class="text-green-800">{{ form.release }}</b>
							شهر/أشهر
						</span>
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
						v-if="user.role == 'company'"
						:message="form.errors['workers.total']"
						class="mt-1"
					/>

					<InputError
						v-if="user.role == 'worker'"
						:message="form.errors.jobs"
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
	</div>
</template>

<script>
import { useForm } from "@inertiajs/inertia-vue3";
import { onMounted, ref, watchEffect } from "vue";

import DialogModal from "@/UI/DialogModal";
import Label from "@/UI/Label";
import Input from "@/UI/Input";
import InputError from "@/UI/InputError";
import Button from "@/UI/Button";
import SecondaryButton from "@/UI/SecondaryButton";

export default {
	props: ["user"],

	components: {
		DialogModal,
		Label,
		Input,
		InputError,
		Button,
		SecondaryButton,
	},

	setup(props, { emit }) {
		const jobs = [
			"porter",
			"cattle",
			"fodder",
			"driver",
			"teacher",
			"general",
		];

		const general = ref(null);
		const modal = ref(false);

		const form = useForm({
			jobs: [...props.user.workers],
			workers: { ...props.user.workers },
			monthly_fee: 0,
			total: 0,
			release: 1,
		});

		const fill = () => {
			form.transform((data) => ({
				workers: { ...data.workers },
				jobs: [...data.jobs],
			})).post(route("third.step"), {
				preserveScroll: true,
				onSuccess: () => {
					emit("next");
				},
			});
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

		return { jobs, title, form, fill, general, modal };
	},
};
</script>
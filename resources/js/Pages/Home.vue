<template>
	<div>
		<layout>
			<div class="fixed w-full z-50 shadow-sm bg-white">
				<div
					class="flex items-center justify-between sm:justify-start h-10"
				>
					<a
						v-smooth-scroll
						href="#home"
						class="flex items-center h-full px-4 text-sm text-gray-700 md:px-6 md:text-base hover:bg-gray-100"
					>
						توصيل
						<Icon class="w-4 h-4 mr-2" icon="home" />
					</a>
					<div class="hidden h-full sm:flex">
						<a
							v-smooth-scroll
							href="#team"
							class="flex items-center h-full px-4 text-sm text-gray-700 md:px-6 md:text-base hover:bg-gray-100"
						>
							فريقنا
						</a>
						<a
							v-smooth-scroll
							href="#about"
							class="flex items-center h-full px-4 text-sm text-gray-700 md:px-6 md:text-base hover:bg-gray-100"
						>
							عنا
						</a>
						<a
							v-if="!$page.props.auth.user"
							v-smooth-scroll
							href="#forms"
							class="flex items-center h-full px-4 text-sm text-gray-700 md:px-6 md:text-base hover:bg-gray-100"
						>
							التسجيل
						</a>
						<a
							v-smooth-scroll
							href="#contact"
							class="flex items-center h-full px-4 text-sm text-gray-700 md:px-6 md:text-base hover:bg-gray-100"
						>
							تواصل معنا
						</a>
						<template v-if="$page.props.auth.user">
							<a
								:href="route('my.services')"
								class="flex items-center h-full px-4 text-sm text-gray-700 md:px-6 md:text-base hover:bg-gray-100"
							>
								خدماتي
							</a>
							<button
								@click="logout"
								class="flex items-center h-full px-4 text-sm text-gray-700 md:px-6 md:text-base hover:bg-gray-100"
							>
								خروج
							</button>
						</template>
					</div>

					<div class="relative flex h-full sm:hidden">
						<button
							@click="menu = !menu"
							:class="{ 'bg-gray-100': menu }"
							class="flex items-center justify-center h-full px-3 text-gray-700 focus:outline-none hover:bg-gray-100"
						>
							<Icon icon="menu" class="w-5 h-5" />
						</button>
						<div
							v-show="menu"
							class="fixed inset-0 z-40"
							@click="menu = false"
						></div>
						<transition
							enter-active-class="transition duration-500 ease-in transform"
							leave-active-class="transition duration-500 ease-out transform"
							enter-from-class="opacity-0 translate-x-10"
							enter-to-class="opacity-1 translate-x-0"
							leave-from-class="opacity-1 translate-x-0"
							leave-to-class="opacity-0 translate-x-10"
						>
							<div
								v-if="menu"
								key="menu"
								class="absolute top-0 left-0 z-40 w-56 mt-10 bg-gray-800 shadow"
							>
								<a
									v-smooth-scroll
									href="#team"
									class="flex items-center px-6 py-2 text-white hover:bg-gray-700"
								>
									فريقنا
								</a>
								<a
									v-smooth-scroll
									href="#about"
									class="flex items-center px-6 py-2 text-white hover:bg-gray-700"
								>
									عنا
								</a>
								<a
									v-if="!$page.props.auth.user"
									v-smooth-scroll
									href="#forms"
									class="flex items-center px-6 py-2 text-white hover:bg-gray-700"
								>
									التسجيل
								</a>
								<a
									v-smooth-scroll
									href="#contact"
									class="flex items-center px-6 py-2 text-white hover:bg-gray-700"
								>
									تواصل معنا
								</a>
							</div>
						</transition>
					</div>
				</div>
			</div>

			<section id="home">
				<div class="w-full flex justify-center items-center relative">
					<img
						src="../../assets/delivery-truck.svg"
						alt="delivery-truck"
						class="w-full max-h-truck min-h-truck max-w-full py-16 px-4"
					/>

					<div class="absolute bottom-6 right-8">
						<button
							class="bg-black px-4 py-2 text-white text-2xl font-light"
						>
							هل انت مهتم؟
						</button>
					</div>
				</div>
			</section>

			<section id="team">
				<div class="py-16 px-4 text-center">
					<h2 class="my-3 text-3xl">فريقنا</h2>
					<p class="my-4">
						قابل أفراد مكتبنا الذين قدموا لك هذا العمل
					</p>

					<div
						class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
					>
						<div
							class="hover:shadow border rounded-md p-4 flex flex-col items-center"
						>
							<img
								src="../../assets/profile.svg"
								alt="user"
								class="w-48 h-48 object-scale-down"
							/>
							<h3 class="text-2xl my-3">معتز المشكلي</h3>
							<p class="text-gray-600 italic">مطور ويب</p>
						</div>
						<div
							class="hover:shadow border rounded-md p-4 flex flex-col items-center"
						>
							<img
								src="../../assets/profile.svg"
								alt="user"
								class="w-48 h-48 object-scale-down"
							/>
							<h3 class="text-2xl my-3">معتز المشكلي</h3>
							<p class="text-gray-600 italic">مطور ويب</p>
						</div>
						<div
							class="hover:shadow border rounded-md p-4 flex flex-col items-center"
						>
							<img
								src="../../assets/profile.svg"
								alt="user"
								class="w-48 h-48 object-scale-down"
							/>
							<h3 class="text-2xl my-3">معتز المشكلي</h3>
							<p class="text-gray-600 italic">مطور ويب</p>
						</div>
						<div
							class="hover:shadow border rounded-md p-4 flex flex-col items-center"
						>
							<img
								src="../../assets/profile.svg"
								alt="user"
								class="w-48 h-48 object-scale-down"
							/>
							<h3 class="text-2xl my-3">معتز المشكلي</h3>
							<p class="text-gray-600 italic">مطور ويب</p>
						</div>
					</div>
				</div>
			</section>

			<section id="about">
				<div class="py-16 px-4">
					<div
						class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
					>
						<div class="p-4 flex flex-col">
							<h2 class="my-3 text-3xl">من نحن</h2>
							<p class="leading-relaxed text-justify my-5">
								نحن شركة تعمل على الانترنت بالكامل متوجه إلى جلب
								العميل لمقدم في هذه المجالات (التحميل و التنزيل
								نقل الانعام, نقل وتوصيل الاعلاف,نقل بضائع أثاث
								منزلي أغذية إلخ عمال الفك وتركيب) و تغطي جميع
								مناطق المملكة. .
							</p>
						</div>

						<div class="shadow p-4 flex flex-col">
							<img
								src="../../assets/email.svg"
								alt="user"
								class="w-48 h-48 lg:w-full md:h-full object-scale-down self-center"
							/>
							<h3 class="text-2xl my-3">الرسالة</h3>
							<p
								class="text-gray-600 leading-relaxed text-justify"
							>
								هذا النص هو مثال لنص يمكن أن يستبدل في نفس
								المساحة، لقد تم توليد هذا النص من مولد النص
								العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
								من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى
								يولدها التطبيق.
							</p>
						</div>
						<div class="shadow p-4 flex flex-col">
							<img
								src="../../assets/email.svg"
								alt="user"
								class="w-48 h-48 lg:w-full md:h-full object-scale-down self-center"
							/>
							<h3 class="text-2xl my-3">الرؤية</h3>
							<p
								class="text-gray-600 leading-relaxed text-justify"
							>
								هذا النص هو مثال لنص يمكن أن يستبدل في نفس
								المساحة، لقد تم توليد هذا النص من مولد النص
								العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
								من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى
								يولدها التطبيق.
							</p>
						</div>
						<div class="shadow p-4 flex flex-col">
							<img
								src="../../assets/email.svg"
								alt="user"
								class="w-48 h-48 lg:w-full md:h-full object-scale-down self-center"
							/>
							<h3 class="text-2xl my-3">الهدف</h3>
							<p
								class="text-gray-600 leading-relaxed text-justify"
							>
								هذا النص هو مثال لنص يمكن أن يستبدل في نفس
								المساحة، لقد تم توليد هذا النص من مولد النص
								العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
								من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى
								يولدها التطبيق.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section id="forms" v-if="!$page.props.auth.user">
				<div class="py-16 px-4">
					<h2 class="my-3 text-3xl text-center">
						التسجيل وتسجيل الدخول
					</h2>
					<p class="my-4 text-center">
						اختر خطة التسجيل التي تناسبك أو سجل دخولك إذا كنت تمتلك
						حسابا لدينا.
					</p>

					<Forms />
				</div>
			</section>

			<section id="contact">
				<div class="py-16 px-4 bg-gray-100">
					<div class="grid grid-cols-3 gap-4">
						<div class="p-4 flex flex-col col-span-3 md:col-span-1">
							<div class="py-4">
								<h2
									class="leading-loose inline-block text-2xl border-b-8 border-green-700"
								>
									تواصل معنا
								</h2>
							</div>
							<h3 class="my-3 text-2xl">العنوان</h3>
							<ul class="pr-4 space-y-2">
								<li class="flex items-center">
									<Icon
										icon="location"
										class="w-5 h-5 ml-2 text-green-700"
									/>
									<a
										class="font-light"
										href="https://www.google.com/maps/place/Aziziyah,+Mecca+Saudi+Arabia/@21.4157064,39.8468221,15z/data=!3m1!4b1!4m5!3m4!1s0x15c20469096c99cf:0x37ba8f982355d299!8m2!3d21.4194706!4d39.8582709"
										target="_blank"
									>
										المملكة العربية السعودية، مكة، العزيزية
									</a>
								</li>
								<li class="flex items-center">
									<Icon
										icon="phone"
										class="w-5 h-5 ml-2 text-green-700"
									/>
									<a
										dir="ltr"
										class="font-light"
										href="tel:966123456789"
									>
										+966 123456789
									</a>
								</li>
								<li class="flex items-center">
									<Icon
										icon="email"
										class="w-5 h-5 ml-2 text-green-700"
									/>
									<a
										class="font-light"
										href="mailto:tawsil@support.com"
									>
										tawsil@support.com
									</a>
								</li>
							</ul>
						</div>

						<div
							class="shadow col-span-3 md:col-span-2 p-4 flex flex-col bg-white"
						>
							<Contact />
						</div>
					</div>
				</div>
			</section>

			<div class="py-16 px-4">
				<div class="flex justify-center">
					<img
						src="../../assets/kaaba.svg"
						class="w3-image filter-grayscale-50"
					/>
				</div>
			</div>

			<a
				v-if="top"
				class="fixed flex items-center justify-center bg-black text-white p-4 bottom-4 right-8 group"
				v-smooth-scroll
				href="#home"
			>
				<Icon icon="previous" class="w-5 h-5 transform -rotate-90" />
				<span
					class="hidden group-hover:block mr-2 text-sm font-light italic"
					>إذهب إلى الاعلى</span
				>
			</a>
		</layout>
	</div>
</template>

<script>
import { onMounted, ref } from "vue";
import { Inertia } from "@inertiajs/inertia";

import Layout from "@/Layouts/App";
import Icon from "@/UI/Icon";
import Forms from "@/Components/Forms";
import Contact from "@/Components/Contact";

export default {
	components: {
		Layout,
		Icon,
		Forms,
		Contact,
	},

	setup() {
		const top = ref(false);
		const menu = ref(false);

		const logout = () => {
			Inertia.post(route("logout"));
		};

		onMounted(() => {
			// toggle to top button on scroll
			window.addEventListener("scroll", () => {
				top.value = window.pageYOffset > 400;
			});
			// colse menu at maximize :D
			window.addEventListener("resize", () => {
				if (window.innerWidth > 639) menu.value = false;
			});
		});

		return { top, menu, logout };
	},
};
</script>

<template>
	<div>
		<layout>
			<div class="fixed w-full z-10 shadow-sm bg-white">
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
							href="#contact-us"
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
									href="#contact-us"
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
							@click="search = !search"
							class="bg-black px-4 py-2 text-white text-2xl font-light"
						>
							هل انت مهتم؟
						</button>

						<teleport to="#modals">
							<DialogModal :show="search" @close="search = false">
								<template #title>
									<h1>توصيل - البحث</h1>
								</template>

								<template #content>
									<div class="">
										<p class="mb-4 text-lg text-gray-700">
											يبدو أنك مهتم بنا أكثر أهلا بك على
											متن قاعدة بياناتنا
										</p>
										<div class="flex space-s-3">
											<div class="flex-grow">
												<Input
													class="w-full"
													placeholder="ابحث في قاعدة بياناتنا"
												/>
											</div>
											<Button>
												<Icon
													icon="search"
													class="w-5 h-5"
												/>
											</Button>
										</div>
									</div>
								</template>

								<template #footer>
									<SecondaryButton @click="search = false">
										اغلاق
									</SecondaryButton>
								</template>
							</DialogModal>
						</teleport>
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
							<h3 class="text-2xl my-3">كايد الشيخي</h3>
							<p class="text-gray-600 italic">
								المدير العام وصاحب الفكرة
							</p>
						</div>
						<div
							class="hover:shadow border rounded-md p-4 flex flex-col items-center"
						>
							<img
								src="../../assets/profile.svg"
								alt="user"
								class="w-48 h-48 object-scale-down"
							/>
							<h3 class="text-2xl my-3">لؤي ثاني</h3>
							<p class="text-gray-600 italic">
								هندسة الشبكات وإدارة الخوادم
							</p>
						</div>
						<div
							class="hover:shadow border rounded-md p-4 flex flex-col items-center"
						>
							<img
								src="../../assets/profile.svg"
								alt="user"
								class="w-48 h-48 object-scale-down"
							/>
							<h3 class="text-2xl my-3">شعيب انو</h3>
							<p class="text-gray-600 italic">الدعم - التسويق</p>
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
								{{ $page.props.settings.about_us }}
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
								{{ $page.props.settings.message }}
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
								{{ $page.props.settings.vision }}
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
								{{ $page.props.settings.goal }}
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

			<section id="contact-us">
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
										:href="
											$page.props.settings.address_link
										"
										target="_blank"
									>
										{{ $page.props.settings.address }}
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
										:href="`tel:${$page.props.settings.phone}`"
									>
										{{ $page.props.settings.phone }}
									</a>
								</li>
								<li class="flex items-center">
									<Icon
										icon="email"
										class="w-5 h-5 ml-2 text-green-700"
									/>
									<a
										class="font-light"
										:href="`mailto:${$page.props.settings.email}`"
									>
										{{ $page.props.settings.email }}
									</a>
								</li>
							</ul>
						</div>

						<div
							class="shadow col-span-3 md:col-span-2 p-4 flex flex-col bg-white"
						>
							<ContactUs />
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
				>
					إذهب إلى الاعلى
				</span>
			</a>
		</layout>
	</div>
</template>

<script>
import { onMounted, ref } from "vue";
import { Inertia } from "@inertiajs/inertia";

import Layout from "@/Layouts/App";
import Icon from "@/UI/Icon";
import DialogModal from "@/UI/DialogModal";
import Button from "@/UI/Button";
import Input from "@/UI/Input";
import SecondaryButton from "@/UI/SecondaryButton";
import Forms from "@/Components/Forms";
import ContactUs from "@/Components/ContactUs";

export default {
	components: {
		Layout,
		Icon,
		DialogModal,
		Input,
		Button,
		SecondaryButton,
		Forms,
		ContactUs,
	},

	setup() {
		const top = ref(false);
		const menu = ref(false);
		const search = ref(false);

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

			window.addEventListener("load", () => {
				let hash = new URL(window.location.href).hash;
				if (hash) {
					let hashs = document.querySelectorAll(`[href='${hash}']`);
					if (hashs.length) hashs[0].click();
				}
			});
		});

		return { top, menu, search, logout };
	},
};
</script>

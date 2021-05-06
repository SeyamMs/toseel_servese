<template>
	<main class="flex flex-col min-h-screen">
		<teleport to="head">
			<title v-if="title">خدمة توصيل | {{ title }}</title>
			<title v-else>خدمة توصيل</title>
		</teleport>
		<article class="flex-grow">
			<slot />
		</article>
		<footer class="text-white">
			<div class="pb-16 pt-8 text-center bg-black">
				<div
					class="max-w-screen-xl mx-auto lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm"
				>
					<h4 class="text-xl my-3">تابعنا</h4>
					<div
						class="flex items-center justify-center space-s-2 mb-6"
					>
						<a
							v-for="social in $page.props.settings.socials"
							:key="social.icon"
							:href="social.url"
							target="_blank"
							rel="noopener noreferrer"
							class="text-white hover:text-gray-800 hover:bg-white w-10 h-10 flex items-center justify-center rounded"
						>
							<Icon :icon="social.icon" class="w-5 h-5" />
						</a>
					</div>
					<p class="text-sm">{{ $page.props.settings.footer }}</p>
				</div>
			</div>
		</footer>
	</main>
</template>

<script>
import Icon from "@/UI/Icon";

export default {
	props: ["title"],

	components: {
		Icon,
	},
};
</script>

<template>
	<main class="flex flex-col min-h-screen">
		<article class="flex-grow">
			<slot />
		</article>
		<footer class="text-white">
			<div class="pb-16 pt-8 text-center bg-black">
				<div
					class="max-w-screen-xl mx-auto lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm"
				>
					<h4 class="text-xl my-3">تابعنا</h4>
					<p class="text-sm">
						يشكر تطبيق/موقع/شركة توصيل موقع w3.css الذي أتاح هذا
						القالب بشكب مجاني ومفتوح المصدر وقد تمت برمجته من قبل
						منصة شكرا لك
					</p>
				</div>
			</div>
		</footer>
	</main>
</template>

<script>
export default {
	props: ["title"],
};
</script>

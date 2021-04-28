<template>
	<portal to="modal">
		<transition leave-active-class="duration-200">
			<div
				v-show="show"
				class="fixed inset-x-0 top-0 z-20 h-full max-h-screen px-4 py-4 sm:px-0 sm:flex sm:items-top sm:justify-center"
			>
				<transition
					enter-active-class="duration-300 ease-out"
					enter-class="opacity-0"
					enter-to-class="opacity-100"
					leave-active-class="duration-200 ease-in"
					leave-class="opacity-100"
					leave-to-class="opacity-0"
				>
					<div v-show="show" class="fixed inset-0 transition-all transform" @click="close">
						<div class="absolute inset-0 bg-gray-500 opacity-75"></div>
					</div>
				</transition>

				<transition
					enter-active-class="duration-300 ease-out"
					enter-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
					enter-to-class="translate-y-0 opacity-100 sm:scale-100"
					leave-active-class="duration-200 ease-in"
					leave-class="translate-y-0 opacity-100 sm:scale-100"
					leave-to-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
				>
					<div
						v-show="show"
						class="h-full overflow-y-auto transition-all transform sm:w-full scrolling-area"
						:class="maxWidthClass"
					>
						<div class="overflow-hidden bg-white rounded-lg shadow-xl">
							<slot></slot>
						</div>
					</div>
				</transition>
			</div>
		</transition>
	</portal>
</template>

<script>
export default {
	props: {
		show: {
			default: false,
		},
		maxWidth: {
			default: '2xl',
		},
		closeable: {
			default: true,
		},
	},

	methods: {
		close() {
			if (this.closeable) {
				this.$emit('close')
			}
		},
	},

	watch: {
		show: {
			immediate: true,
			handler: (show) => {
				if (show) {
					document.body.style.overflow = 'hidden'
				} else {
					document.body.style.overflow = null
				}
			},
		},
	},

	created() {
		const closeOnEscape = (e) => {
			if (e.key === 'Escape' && this.show) {
				this.close()
			}
		}

		document.addEventListener('keydown', closeOnEscape)

		this.$once('hook:destroyed', () => {
			document.removeEventListener('keydown', closeOnEscape)
		})
	},

	computed: {
		maxWidthClass() {
			return {
				sm: 'sm:max-w-sm',
				md: 'sm:max-w-md',
				lg: 'sm:max-w-lg',
				xl: 'sm:max-w-xl',
				'2xl': 'sm:max-w-2xl',
				fit: 'px-2',
			}[this.maxWidth]
		},
	},
}
</script>

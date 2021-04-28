<template>
    <div>
        <button
            type="submit"
            :class="contentClasses"
            class="block w-full text-sm leading-5 text-right transition duration-150 ease-in-out focus:outline-none"
            v-if="as == 'button'"
        >
            <slot></slot>
        </button>

        <inertia-link
            :href="href"
            :class="contentClasses"
            class="block text-sm leading-5 transition duration-150 ease-in-out focus:outline-none"
            v-else
        >
            <slot></slot>
        </inertia-link>
    </div>
</template>

<script>
export default {
    props: {
        href: {
            type: String,
        },
        as: {
            type: String,
        },
        contentClasses: {
            default: () => [
                "px-4",
                "py-2",
                "text-gray-700",
                "hover:bg-gray-100",
                "focus:bg-gray-100",
            ],
        },
    },
};
</script>

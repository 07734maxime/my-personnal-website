<template>
    <div class="bg-white text-sm text-gray-600 border border-2 ">
        <div class="text-xs font-mono flex p-1 border-b border-b-2 justify-between">
            README.txt
            <div class="flex gap-1 items-center">
                <hr class="p-0.5 border border-2" />
                <hr class="p-0.5 border border-2 bg-black" />
            </div>
        </div>
        <div class="px-1">
            <slot></slot>
        </div>
    </div>
</template>
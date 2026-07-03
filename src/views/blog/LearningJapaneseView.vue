<template>
    <main>
        <h1>{{ route.name }}</h1>
            <p class="italic">Note: You will need to have suitable fonts installed to properly display Japanese characters.</p>
            <p>From a simple idea to a concrete project, I will relate my path of learning Japanese.
                First of all, you may wonder why would I want to learn Japanese ? Well, there is no reason.
                I have ease to learn languages, but it was never used except for English, and I wanted to learn once a non-latin / non-germanic language.
                This combined with my interest with Japanese culture made me start learning.
            </p>
        <h2>Context</h2>
            <p>My plan to learn Japanese started when I was 15. Although I did not know where to start, so I basically gave up really really fast, even though
                I haven't forgotten this idea. Time flew by, I'm not 20. It's been 5 years, and I just continually thanks my old me about for not forgetting.
                Thus, I've really started learning Japanese this year, in 2026. Even if this was probably not optimal, due to my lack of time caused by my studies,
                I was and I am still that motivated to learn Japanese. I'm aiming to reach a good level in Japanese, thus I'll be able to communicate
                with Japanese people, read books, watch movies and anime without subtitles.
            </p>
            <p>I'm too lazy to make another section for that, so I'll explain here how Japanese is actually structured.
                Basically, Japanese uses 3 differents writing systems, which are Hiragana (<span class="font-bold">ひらがな</span>), Katakana (<span class="font-bold">カタカナ</span>) and Kanji (<span class="font-bold">漢字</span>). Hiragana and Katakana are phonetic alphabets,
                while Kanji are ideograms (they represent meanings rather than sounds). <span class="underline">If you're confused about Kanji, just accept it, and you'll understand it later, trust me.</span>
            </p>
            <p>
                Let's now talk about the alphabet itself. Hiragana and Katakana are both made of 46 basic characters, which represent the same sounds.
                The main difference is that Hiragana is used for native Japanese words, while Katakana is used for foreign words.
                Kanji, on the other hand, are Chinese characters that have been adopted into the Japanese writing system.
                There are thousands of Kanji characters, but you only need to know a few hundred to be able to read and write in Japanese.
            </p>
            <table class="border-collapse border border-gray-400">
                <thead>
                    <tr>
                        <th class="border border-gray-400 px-3 py-2"></th>
                        <th class="border border-gray-400 px-3 py-2">a</th>
                        <th class="border border-gray-400 px-3 py-2">i</th>
                        <th class="border border-gray-400 px-3 py-2">u</th>
                        <th class="border border-gray-400 px-3 py-2">e</th>
                        <th class="border border-gray-400 px-3 py-2">o</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th class="border border-gray-400 px-3 py-2">Hiragana</th>
                        <td class="border border-gray-400 px-3 py-2">あ</td>
                        <td class="border border-gray-400 px-3 py-2">い</td>
                        <td class="border border-gray-400 px-3 py-2">う</td>
                        <td class="border border-gray-400 px-3 py-2">え</td>
                        <td class="border border-gray-400 px-3 py-2">お</td>
                    </tr>
                    <tr>
                        <th class="border border-gray-400 px-3 py-2">Katakana</th>
                        <td class="border border-gray-400 px-3 py-2">ア</td>
                        <td class="border border-gray-400 px-3 py-2">イ</td>
                        <td class="border border-gray-400 px-3 py-2">ウ</td>
                        <td class="border border-gray-400 px-3 py-2">エ</td>
                        <td class="border border-gray-400 px-3 py-2">オ</td>
                    </tr>
                    <tr>
                        <th class="border border-gray-400 px-3 py-2">Romaji</th>
                        <td class="border border-gray-400 px-3 py-2">a</td>
                        <td class="border border-gray-400 px-3 py-2">i</td>
                        <td class="border border-gray-400 px-3 py-2">u</td>
                        <td class="border border-gray-400 px-3 py-2">e</td>
                        <td class="border border-gray-400 px-3 py-2">o</td>
                    </tr>
                </tbody>
            </table>
            <p class="italic">This is actually the first time of my life I'm creating a table in HTML, who really uses tables?</p>
            <p>This table shows the basic hiragana, katakana, and romaji characters for the vowels a, i, u, e, and o.
                You may have deduced that this is not the complete alphabet, and you're right. There are also consonants that can be combined with these vowels to form syllables.
                You can use consonants like k, s, t, n, h, m, y, r, and w to form syllables like ka (<span class="font-bold">か</span>), shi (<span class="font-bold">し</span>), tsu (<span class="font-bold">つ</span>), ne (<span class="font-bold">ね</span>), ho (<span class="font-bold">ほ</span>)...
            </p>
            <p class="p-2 border text-red-500 text-xl font-semibold">I've created a page so you can explore the full Japanese alphabet. If you want to learn more, <RouterLink class="text-xl" to="/stuff/japanese-alphabet">click here</RouterLink></p>
    </main>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>
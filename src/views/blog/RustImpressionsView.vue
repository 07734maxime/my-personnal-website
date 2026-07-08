<template>
    <main class="flex flex-col gap-4">

        <hgroup class="flex flex-col gap-2">
            <h1 class="highlight-title text-center text-xl">{{ route.name }}</h1>
            <ul class="flex gap-2">
                <li v-for="(tag, index) in route.meta.tags" :key="index"
                    class="select-none cursor-pointer border border-black border-2 text-white bg-gray-200 text-gray-800 text-xs px-2 py-1 uppercase font-mono font-bold"
                    :class="tag.color">
                    <span class="highlight-tag">{{ tag.label }}</span>
                </li>
            </ul>
        </hgroup>

        <p class="font-mono">
            As someone who used a lot of high-level languages, Rust was kinda surprising in its approach to memory
            management and performance. I had to read the doc for a long time to start understanding how it works.
        </p>

        <div class="flex gap-3 items-stretc ">
            <div class="w-1 bg-orange-300 flex-shrink-0"></div>
            <h2 class="font-mono! text-xl">My first Rust project</h2>
        </div>

        <p class="font-mono">Implementing a simple linear algebra library, including: vector spaces, linear
            independence, rank theorem, row echeclon form, matrix inversion...</p>

        <div class="flex gap-3 items-stretc ">
            <div class="w-1 bg-orange-300 flex-shrink-0"></div>
            <h2 class="font-mono! text-xl">Matrix Definition</h2>
        </div>

        <p class="font-mono">
            First of all, let's define the
            <Latex :displayMode="false">A_{i,j}</Latex>
            Matrix with
            <Latex :displayMode="false">\{(i, j) \in \{1, \dots, n\}^2 \mid i = j\} :</Latex>
        </p>
        <div class="relative bg-white p-1 border border-2 solid-shadow-3 rounded">
            <Latex :displayMode="true">A = \begin{pmatrix} a_{11} & a_{12} & \cdots & a_{1j} \\ a_{21} & a_{22} & \cdots
                & a_{2j} \\ \vdots & \vdots & \ddots & \vdots \\ a_{i1} & a_{i2} & \cdots & a_{ij} \end{pmatrix}</Latex>
            <p class="text-sm text-gray-500/50 m-2 absolute bottom-0 right-0">LaTeX</p>
        </div>

        <p class="font-mono">Implementing a vector of a vector is not straightforward in Rust : I'm using a flat vector
            <code class="bg-gray-100 px-2">Vec&lt;f64&gt;</code> instead to represent the matrix.
        </p>


        <p class="font-mono">
            I needed then to establish a mapping between the 2D indices and the 1D index in the flat vector,
            so I used the formula <Latex :displayMode="false">k = i \times n + j</Latex>.
        </p>

        <p class="font-mono">Thus, I created the following <code>struct</code>.</p>

        <div class="select-none flex flex-col solid-shadow-3 rounded-lg bg-black">
            <ul class="flex gap-1 bg-neutral-900 rounded-t-lg py-1 px-2">
                <li><i class="fas fa-circle text-red-400"></i></li>
                <li><i class="fas fa-circle text-orange-400"></i></li>
                <li><i class="fas fa-circle text-green-400"></i></li>
            </ul>
            <CodeBlock language="rust" :code="`struct Matrix {
  data: Vec<f64>,
  n: usize
}`" />
        </div>

        <p class="font-mono">Take acknowledge that all the functions are implemented inside of the <code
                class="bg-gray-100 px-2">impl Matrix</code> block.</p>


        <div class="flex gap-3 items-stretc ">
            <div class="w-1 bg-orange-300 flex-shrink-0"></div>
            <h2 class="font-mono! text-xl">Elementary operations</h2>
        </div>
        <p class="font-mono">Let's implement the elementary operations on our matrix. Consider the following matrix :
        </p>

        <div class="relative bg-white p-1 border border-2 solid-shadow-3 rounded">
            <Latex :displayMode="true">A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{pmatrix}</Latex>
            <p class="text-sm text-gray-500/50 m-2 absolute bottom-0 right-0">LaTeX</p>
        </div>

        <p class="font-mono">We can perform the following operations on this matrix (all of these operations are
            independent):</p>

        <ul class="flex flex-col gap-2">
            <li class="solid-shadow-3 flex flex-col p-2 bg-white border border-2 rounded-tl rounded-br">
                <span class="font-mono flex flex-col text-center">Row swapping <Latex :displayMode="false">L_1
                        \longleftrightarrow L_2</Latex></span>
                <span>
                    <Latex :displayMode="true">A \sim \begin{pmatrix} 4 & 5 & 6 \\ 1 & 2 & 3 \\ 7 & 8 & 9 \end{pmatrix}
                    </Latex>
                </span>
            </li>
            <li class="solid-shadow-3 flex flex-col p-2 bg-white border border-2 rounded-tl rounded-br">
                <span class="font-mono flex flex-col text-center">Row multiplication by a scalar <Latex
                        :displayMode="false">L_i \leftarrow 2L_i</Latex></span>
                <span>
                    <Latex :displayMode="true">A \sim \begin{pmatrix} 1 & 2 & 3 \\ 8 & 10 & 12 \\ 7 & 8 & 9
                        \end{pmatrix}</Latex>
                </span>

            </li>
            <li class="solid-shadow-3 flex flex-col p-2 bg-white border border-2 rounded-tl rounded-br">
                <span class="font-mono flex flex-col text-center">Row addition <Latex :displayMode="false">L_3
                        \leftarrow L_1 - 2 L_2</Latex></span>
                <span>
                    <Latex :displayMode="true">A \sim \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ -2 & -3 & -4
                        \end{pmatrix}</Latex>
                </span>
            </li>
        </ul>

        <p class="font-mono">These operations are fundamental to linear algebra and are used in the Gaussian elimination
            algorithm.</p>

        <div class="flex gap-3 items-stretc ">
            <div class="w-1 bg-orange-300 flex-shrink-0"></div>
            <h2 class="font-mono! text-xl">Let's code!</h2>
        </div>

        <AboutBox title="TODO.txt">TBA</AboutBox>




        <div class="flex gap-3 items-stretc ">
            <div class="w-1 bg-orange-300 flex-shrink-0"></div>
            <h2 class="font-mono! text-xl">What's next?</h2>
        </div>


        <AboutBox title="TODO.txt">
            <ul>
                <li>Implement the Gaussian elimination algorithm</li>
                <li>Implement determinant calculation
                    <ul>
                        <li>Implement the determinant calculation using the Gaussian elimination algorithm</li>
                        <li>Implement the determinant calculation using the Laplace expansion (cofactor expansion)</li>
                    </ul>
                </li>
                <li>Implement matrix inversion
                    <ul>
                        <li>Implement the matrix inversion using the Gaussian elimination algorithm</li>
                        <li>Implement the matrix inversion using the adjugate matrix and determinant</li>
                        <li>Implement matrix inversion using the characteristic polynomial (Cayley-Hamilton theorem)
                        </li>
                    </ul>
                </li>
                <li>I'll see for more features if I have time and motivation</li>
                <li>Optimize the code for better performance</li>
            </ul>
        </AboutBox>



        <div class="flex gap-3 items-stretc ">
            <div class="w-1 bg-orange-300 flex-shrink-0"></div>
            <h2 class="font-mono! text-xl">My Thoughts</h2>
        </div>
        <p class="font-mono">Honestly, Rust is very frustrating when you always used high-level languages. However, I
            feel like I can
            get used to it with practice, thus progressing.
            Maybe using maths to learn Rust was not the best idea, but I would not have learned it otherwise, and
            practicing like that may improve my maths skills and my programming skills at the same time.
        </p>
        <p class="font-mono">I could've write something more efficient though, but I had no idea how.</p>
    </main>
</template>

<script setup>
import Latex from '@/components/Latex.vue';
import CodeBlock from '@/components/CodeBlock.vue';
import { useRoute } from 'vue-router';
import AboutBox from '@/components/boxes/AboutBox.vue';
const route = useRoute();
</script>
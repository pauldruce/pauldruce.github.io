---
layout: post
title: Set Theory Questions - Unfinished
author: Paul Druce
summary: Some questions for my students on Set Theory.
category: tutoring
tags: [post,questions,university,academic,unfinished]
---

If you find errors in any of the question here, please feel free to leave a comment below and I will fix it ASAP.

<details >
<summary>
:::{.question name="Cartesian Conundrum"}
Let $A = \{\text{badger, snake, mushroom}\}$ and $\{\text{snake, mushroom, fox}\}$.

a. Write down $A\cap B$
b. Write down $A \cup B$
c. Write down $A\setminus B$
d. Write down $A\times B$.
:::
</summary>
<u> Solutions </u>

a. $\{snake, mushroom\}$
b. $\{badger, snake, mushroom,fox \}$
c. $\{badger \}$
d. $$\begin{align} \{ &(badger,snake), (badger, mushroom), (badger, fox),\\
  &(snake, snake), (snake, mushroom), (snake,fox)\\
  &(mushroom,snake), (mushroom,mushroom),(mushroom,fox) \}\end{align}$$
</details>


<details>
<summary>
:::{.question}
Which of the following does $A \cap (B\cup C)$ equal?

1. $(A \cup B) \cap (A\cup C)$
2. $(A \cap B) \cup C$
3. $(A \cap B) \cup (A \cap C)$
4. $B \cup (A\cap C)$

Which of the above does $A\cup (B\cap C)$ equal?
:::
</summary>
$A \cap (B\cup C) = (A\cap B)\cup (A \cap C)$, so 3.

$A\cup (B\cap C) = (A\cup B)\cap (A\cup B)$ so 1.
</details>

<details>
<summary>
:::{.question}
Donald Trump is writing his speech for the next rally he is going to. He decides his sentences won't contain more than 5 words taken from the following list of words:
$$\text{The Best Words} = \{\text{tremendous}, \text{huge}, \text{bigly} , \text{billions}, \text{wall}\}$$

a. How many "sentences" can you form from this list if you can't repeat words?
b. Trump learns a new word "$\text{fake-news}$", how many "sentences" can you form now?

:::
</summary>

</details>
:::{.question}
Find a counter example to the statement $\mathcal{P}(A) \cup \mathcal{P}(B) = \mathcal{P}(A\cup B)$.

What is a correct statement between the left and right side of the equality above?
:::

<details open>
<summary>
:::{.question}
You are making a multiplayer racing game. The players have a choice of the following characters: $\text{CHAR} = \{\text{pikachu, bulbasaur, charmander, venosaur} \}$.

a. Write down all the possible pairings of characters.
    - What set operation would form this set?
    - How many pairings are there? What is the set operation that would give you this value?
b. One of the people playing has paid the company extra money to unlock a premium character, they now have the choice of $\text{CHAR}^* = \{\text{pikachu, } \text{bulbasaur, } \text{charmander, } \text{venosaur, } \text{meowth}\}.$ What are all the possible pairings now?
c. The player who has unlocked the $\text{CHAR}^*$ selection always plays with meowth. What are the possible pairings now?
    - Calculate the size of this set.
:::
</summary>
<u> Solutions </u>

a. All the possible pairings are as follows:
$$\begin{align} \{ & (\text{bulbasaur,bulbasaur}),(\text{bulbasaur,charmander}),(\text{bulbasaur,pikachu}),\\
  &(\text{bulbasaur,venosaur}),(\text{charmander,bulbasaur}),(\text{charmander,charmander}),\\
  &(\text{charmander,pikachu}),(\text{charmander,venosaur}),(\text{pikachu,bulbasaur}),\\
  &(\text{pikachu,charmander}),(\text{pikachu,pikachu}),(\text{pikachu,venosaur}),\\
  &(\text{venosaur,bulbasaur}),(\text{venosaur,charmander}),(\text{venosaur,pikachu}),\\
    &(\text{venosaur,venosaur}) \}
\end{align}
$$
Which is given by the cartesian product of $\text{CHAR}$ with itself, i.e. $\text{CHAR}\times \text{CHAR}$. There are $16$ total pairings which is given by the cardinality of the cartesian product, i.e. $|\text{CHAR}\times \text{CHAR}|$.
</details>
:::{.question}
State which of the following relations are *reflexive, transitive, symmetry*.

Let $R$ be the set of relations $(a,b)$,

a. where $a,b\in \mathbb{N}$ such that $a<b$.
b. where $a,b\in \mathbb{N}$ such that $a\leq b$
c. where $a$ is a country and $b$ is the capital city of $a$.
d. where $a,b$ are people such that $b$ is a relative of $a$.
e. where $a,b$ are people such that $b$ is an ancestor of $a$.
:::



## Functions: Special maps between sets

Most people think they have a good understanding of what a function is. However, the definition in set theory typically causes some issues. "What do you mean the square-root isn't a function?", "I want a function that characterises my blog posts in the categories. Why is that an issue?". These are questions that are very reasonable to ask, and as always in mathematics, understanding why these questions might be asked comes down to understanding the **definition** of a function.

So a function is a subset of the cartesian product, $A\times B$ of two sets $A,B$, such that there is only one elements in the subset for each and every element $a\in A$.

This definition is complete, but it lacks depth. It's nice, it's short, you can rattle it off in an exam say, but this doesn't help you understand unless you pick it apart, word by word.

So let's do that.

<details>
<summary>
:::{.question}
Are the following maps functions? If they aren't can you change the domain and/or the co-domain, to make them functions?

a. $f:\mathbb{N}\to\mathbb{N}$, $f(x) = x^2$
b. $f:\mathbb{N}\to\mathbb{N}$, $f(x) = x+3$
c. $f:\mathbb{N}\to\mathbb{N}$, $f(x) = x-3$
d. $f:\mathbb{N}\to\mathbb{N}$, $f(x) = \sqrt{x}$

:::
</summary>
<u> Solutions</u>

a. Yes this is a function, every element of $\mathbb{N}$ has a unique square, so every element of $\mathbb{N}$ is mapped to an element of $\mathbb{N}$. Note that we don't require that every element of the co-domain be a square number.
b. Yes this is a function. For every element, $x$, of $\mathbb{N}$, $x+3$ is again a unique natural number. Note that despite the numbers $0,1,2$ in the co-domain not being "hit" by this function, it still satisfies the definition, just as the above example.
c. This is not a function, this is because the elements $0,1,2\in \mathbb{N}$ do not get mapped. There are no elements $-3,-2,-1$ in $\mathbb{N}$. This map can be made into a function if we remove the problematic values from the domain. I.e. if we define $f\colon \mathbb{N}\setminus \{0,1,2\} \to \mathbb{N}$. Then this is perfectly valid function. Alternatively, if we enhanced the co-domain from $\mathbb{N}$ to the integers $\mathbb{Z}$, then $f\colon \mathbb{N} \to \mathbb{Z}$ is also a perfectly valid function.
d. No this is not a function, as $\sqrt{2}\notin \mathbb{N}$. Making this into a valid function requires a bit of thinking. We need to include the irrational numbers, which can be done by enlarging the co-domain from the natural numbers to the real numbers, i.e. $f\colon \mathbb{N} \to \mathbb{R}$. BUT, this introduces a new issue. The square-root function is not single valued over this new co-domain. Both $-\sqrt{2}$ and $+\sqrt{2}$ are valid under this map, this means that the pairs $(2,-\sqrt{2})$ and $(2,\sqrt{2})$ are in this map. So we need to remove this duplicity. This can be done in two simple ways by defining $\mathbb{R}^+ = \{x\in \mathbb{R} \ | \ x\geq 0\}$ and $\mathbb{R}^- \{ x\in \mathbb{R} \ | \ x<0\}$. Then $\sqrt{x}\colon \mathbb{N} \to \mathbb{R}^+$ and $\sqrt{x}\colon \mathbb{N} \to \mathbb{R}^-$ are now perfectly valid functions. Note that there are many other ways to make this a well defined function, but these are the most common.
  Note that $\sqrt{x}\colon\mathbb{R}\to \mathbb{R}^{\pm}$ is not a well defined function for a completely different reason. We don't have real numbers which are the square root of negative numbers. We need to enhance the real numbers to the **complex numbers*. Which requires much more work to understand properly, so we will still to taking square roots of positive real numbers.
</details>


<details><summary>
:::{.question}
It is common for blogs to try organise their posts into a number of different categories. The aim is then to provide you with links to show posts from different categories for easy viewing. Is the map that sends a blog post to the different categories necessarily a function? Justify your answer.  
:::
</summary>
<u> Solutions </u>

No it is not necessary a function. For instance, on my website I sometimes write posts which are notes on a specific topic, questions for a specific topic or posts that contain both questions and notes. If I want to show characterise my posts, the map needed would have to map the posts contain both notes and questions to two different categories. Functions can not, **by definition**, do this. This doesn't mean that the map in questions isn't useful, it's just not a function as defined by set theory.
</details>

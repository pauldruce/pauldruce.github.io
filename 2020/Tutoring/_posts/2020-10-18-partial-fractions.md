---
layout: post
title: Partial Fractions - Unfinished
author: Paul Druce
description: A guide for A level mathematics students about partial fractions. An explanation of why the procedures work is given along with easy, medium and difficult questions.
summary: A guide for A level mathematics students about partial fractions. An explanation of why the procedures work is given along with easy, medium and difficult questions.
category: tutoring
tags: [post, questions, notes,unfinished]
<!-- published: false -->
---

# Summary
For those looking for the tl;dr here is a summary of the techniques:

The coefficients $a,b,c,A,B,C, \alpha,\beta$ in the table below can be any real number, which need to be found. A polynomial $a_ix^2 + b_ix + c_i$ is said to be irreducible if it has no real roots.

<center><table>
| $$P(x)\over Q(x)$$ | Partial Fraction |
|:------:|:-----:|
| $${ax+b \over (x-r_1)(x-r_2)} \text{ where } r_1 \neq r_2$$  | $${A\over(x-r_1)} + {B\over (x-r_2)}$$ |
| $${ax+b \over (x-r)^2}$$ | $${A\over(x-r)} + {B\over (x-r)^2}$$ |
|$${ax^2+bx +c \over (x-r_1)(x-r_2)(x-r_3)} \text{ where } r_1 \neq r_2\neq r_3$$  | $${A\over(x-r_1)} + {B\over (x-r_2)} + {C\over (x-r_3)}$$ |
| $${ax^2+bx+c \over (x-r_1)^2(x-r_2)} \text{ where } r_1 \neq r_2$$ | $${A\over(x-r_1)} + {B\over (x-r_1)^2} + {C\over (x-r_2)}$$ |
| $${ax^2+bx+c \over (x-r)^3}$$ | $${A\over(x-r)} + {B\over (x-r)^2} + {C\over (x-r)^3}$$ |
| $${\alpha x+\beta \over (ax^2 + bx +c )} \text{ where } ax^2 + bx +c \text{ is irreducible}$$ | No simplification |
| $${\alpha x+\beta \over (x-r)(ax^2 + bx +c )} \text{ where } ax^2 + bx +c \text{ is irreducible}$$  | $${A\over(x-r)} + {Bx+C\over(ax^2 + bx +c ) }$$|
</table></center>



In general if we have two polynomials $P(x) = a_n x^n + a_{n-1} x^{n-1} + \dots a_1 x + a_0$ and $Q(x) = b_m x^m + b_{m-1} x^{m-1} + \dots b_1 x + b_0$, where $n,m$ are both integers such that $n<m$ and all of the coefficients $a_i, b_i$ are real numbers.

  Then by the fundamental theorem of algebra we can rewrite $Q(x)$ as the product of it's linear factors $(x-r_i)$ and irreducible quadratic factors $(a_i x^2 + b_i x +c_i)$, so we have that
$$Q(x) = (x-r_1)^{j_1} (x-r_2)^{j_2} \cdots(x-r_{m_1})^{j_{m_1}}(a_1 x^2+ b_1x +c_1 )^{k_1}\cdots (a_{m_2} x^2+ b_{m_2}x +c_{m_2} )^{k_{m_2}}$$
where $m_1+m_2 = m$, $j_i$ is the number of times $r_i$ is a root of $Q(x)$ and $k_m$ are positive integers^[The factors $a_i x^2 + b_ix +c_i$ actually correspond to a pair of complex roots which are conjugate to each other. So $k_i$ is the number of times that these roots are repeated.].

 We have that the expression ${P(x)/ Q(x)}$ can be written a sum of terms of the form
$$
{P(x)\over Q(x)} = \sum\limits_{i=1}^{m_1} \sum\limits_{l=1}^{j_i} {A_{il}\over (x-r_i)^l} +  \sum\limits_{i=1}^{m_2} \sum\limits_{l=1}^{k_i} {B_{il}x + C_{il}\over a_i x^2 + b_ix+c_i}
$$


# Why do we care about partial fractions?

The first question I always ask myself before learning something new, is to ask myself:

<center>
> Why do people care about this? How is it useful?
</center>

There isn't a bad answer to this question. I'm not looking for some ground breaking revelation as an answer. I'm looking for the motivation, why people study this, what are the problems they are trying to solve? What is the situation where this topic is involved? If people study an area of mathematics because it is useful for predicting the stock market, that is a valid answer. If people study an area of mathematics because it is 'elegant', then that is also perfectly fine. I just want to understand **why** it is useful for stock markets, and **why** they think it is elegant.

Why do I do this? Well because it helps me. I find myself more motivated to learning something, if I know why I'm doing it, and what it is all about.

So with that said, let's look at partial fractions:

<center>
>what are they? why do we care? and how do we solve questions about them?
</center>

## What are partial fractions?

Partial fractions, or more formally "the method of partial fractions for rational polynomials" is a procedure to write a complicated fraction of polynomials into a sum of simpler ones. It is the reverse process of 'combining fractions' when we have multiple fractions with polynomials in the numerator and denominator. For instance take the polynomial:
$$
{13x + 18 \over 10x^2 + 27x +18}
$$
Can this be written as a sum of simpler polynomials? If it can, how do we find the simple?
Well it turns out that it can be written in the following way:
$$
\begin{align}
{1 \over 2x + 3} + {4\over 5x+6} &= {5x + 6 + 4\cdot(2x+3)\over (2x+3)(5x+6)}\\
&={13x + 18 \over 10x^2 + 27x +18}
\end{align}
$$

This was entirely un-obvious from the initial fraction, so how do we do this in general? That is what the method of partial fractions provides us.

Now you might be wondering, why would you want to split a single (but complicated) fraction into multiple (but simpler) fractions? Well that depends who you are, and what you are trying to do. Are you an electrical engineer trying to analyse a complicated circuit? If you are, you may want to switch to the so-called 'frequency-domain' from the 'time-domain', solve you problems in the frequency domain and then switch back at the very end. Well the process of doing this requires you to integrate rational polynomial expressions, which is far easier if we express them in polynomial form.

In general the method of partial fractions is useful because it is a lot easier to integrate
$$
{1 \over 2x + 3} + {4\over 5x+6}
$$
than it is to integrate
$$
{13x + 18 \over 10x^2 + 27x +18}.
$$

#

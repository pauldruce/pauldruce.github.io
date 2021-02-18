---
layout: post
title: Modelling with Differentiation
author: Paul Druce
summary: Some examples and question of how to use differentiation to model situations.
category: tutoring
tags: [post,questions,notes]
---

When you first start learning about differentiation, integration and calculus in general, we often stick to equations that exclusively use the variables $x, y$ and $t$. The variable $t$ is often used to represent time, and $y$ and $x$ are related to the graphs of specific functions, i.e. $y = f(x)$, where $f$ can be any reasonable^[To find out what reasonable means requires a more in-depth knowledge of calculus.] function. However, there is nothing special about the letters $x,y$ or $t$. So in many cases we will choose different letters to represent important quantities.

For instance, consider a circle of radius^[There is nothing special about the letter r, it's just short for radius.] $r$. We then know how to calculate the circumference of the circle, $2\pi r$, or the area $\pi r^2$.

The inquisitive of you might start to wonder how the circumference and area of circles change as we increase or decrease the radius. How could we quantify such behaviour?
Well this is where differentiation is particularly useful. Because when we compute the derivative ${dy\over dx}$, what we are really asking is how does the function $y$ change as we vary the variable $x$.

So what if we define the circumference as a function of the radius as follows: Let $C$ be the circumference of a circle of radius $r$, so $C(r) = 2 \pi r$.
Then what does ${dC\over dr}$ compute[^a]? Well it computes how the circumference changes as we vary the radius of the circle.

[^a]: Note that the derivative is really the following limit: $${dC \over dr} = \lim\limits_{\epsilon \to 0} {C(r+\epsilon) - C(r) \over \epsilon}$$

:::{.example}
A drop of oil is placed on the surface of a still pool of water. The oil spreads out over time in a circular manner. The rate of increase of the radius of the circle the oil forms is proportional to the time since it was dropped. At time $t=0s$, the radius of the circle is $r=1cm$ and at $t=1s$, the radius is $r=2cm$. Find it's radius after 10 seconds.
<div class="single-image">
![](/assets/2020/tutoring/modelling_with_differentiation.svg)
</div>

<u>Solution</u>:<br>
Given that ${dr\over dt} \propto t$ we can say that ${dr\over dt} = kt$, so (via integration) we have that $r = {1\over 2}kt^2 + C$. We then use the data that we have: At $t=0$, $r= {1\over 2}k (0\text{ s})^2 +C = C$, but we know that $r=1cm$ at $t=0$, so $C=1cm$. Then we need to have another piece of data to find the coefficient $k$, this is given to us as follows:
At $t=1s$, we have that:
$$\begin{align}r &= {1\over 2}k (1\text{ s})^2 + 1 \text{ cm}\\ &= {1\over 2}\text{ s}^2 \times k + 1 \text{ cm},\end{align}$$
but we know that $r=2 \text{ cm}$ at $t=1s$, so we have that ${1 \over 2}\text{ s}^2 k + 1 cm = 2cm$.
So $k = 2\text{cm}/\text{s}^2$, where the units of $k$ are determined in order for the equation to make sense.

So we have that
$$r = (t^2 + 1)\text{ cm.}$$
So we have that at $t=10 \text{s}$, then we have that $r = 100+1 \text{ cm} = 101 \text{cm}$.
:::

## Converting words to mathematics = Terminology

It is often harder to setup the mathematics than it is to solve to equations. Or at-least, we get very good at using the specific mathematical tools, but converting paragraphs to mathematics is difficult. Mathematicians use very specific words to mean very specific mathematical operations. Here are a few phrases that often turn up in these style of questions.

| Sentence | Mathematics |
|:-----:| :----:|
|$X$ is proportional to $Y$| $X\propto Y$ which is equivalent to $X = k Y$ for some unknown constant $k$|
|$X$ is inversely proportional to $Y$| $X \propto {1\over Y}$ or $X = {k \over Y}$ for some unknown constant $k$ |
|$X$ exponentially grows with respect to $Y$| $A \propto e^{kY}$ or $X=\alpha e^{k Y}$ for two unknown constants $k$ and $\alpha$. |
|$X$ exponentially decays with respect to $Y$| $X \propto e^{-kY}$ or $X = \alpha e^{-kY}$ for two unknown constants $k$ and $\alpha$.|

Mathematicians also heavily rely on *context*. This is the idea that there is something *obvious* or inherent to the question. However, this is usually a barrier to understanding for those learning or anyone who is interested trying to understand.
In regards to modelling with differentiation, this often shows itself when we start to discuss the *rate of change of $X$* where $X$ is some property of interest.

The term **rate of change of** refers to a derivative as was discuss at the beginning of this note. However, what we are taking the derivative with respects to is not always stated. You could argue that it should be. But my argument for why context is a natural and useful tool to rely on, is as follows. When ask someone "is it raining?" you don't usually have to tell them where you are inquiring about. It's hidden in context that you care about if it is raining *here*, where you are. You aren't asking if it is raining in Melbourne, Australia. You've relied on context.

So, when we ask about the rate of change of velocity, we usually assume we are talking about the rate of change of velocity *with respects to time*. When we ask about the rate of change of sound intensity, we can assume we are talking about the rate of change of sound intensity with respects to distance from the source **or** with respects to time. Being able to read into the context usually requires some familiarity with the system or example in questions.



## Questions

<details>
<summary>
:::{.question}
A person with a virus sneezes. The probability of contracting the virus from this person decreases exponentially as the distance between you is increased. The rate of decrease of the probability at a distance of $0\text{ m}$ is $17 \text{ m}^{-1}$.

a. Write down the probability as a function of distance.
b. Assuming that the probability of contraction is equal to $1$ at a distance of $0 \text{ m}$. Find the rate of change of the probability as a function of distance.   
c. What is the probability of contraction at $2\text{ m}$ to three significant figures?
:::
</summary>
<u> Solution </u>

a. The probability, $P$, is modelled by the following function $P = A e^{-k x}$, where $x$ is the distance from the person.

b. As the probability is equal to $1$ at $0 \text{ m}$, we have that $P(x=0) = A e^{-k\cdot 0} = A$, so we have that $A=1$. So we have that $P(x) = e^{-kx}$. The rate of change of the probability with respects to the distance is given by
  $${dP\over dx} = -k e^{-k x}.$$ Using the data that the rate of **decrease** of the probability at $x=0 \text{ m}$ is equal to $17 \text{ m}^{-1}$, we have that:
  $${dP\over dx}(x=0) = - ke^{-k \cdot 0}=-k = -17.$$ So we have that $k=17\text{ m}^{-1}$.
c. The probability at $x=2 \text{ m}$ is $P(x=2) = e^{-17\cdot 2} =e^{-34}=1.71 \times 10^{-15}$ or $0.000000000000171 \% $

</details>

<details>
<summary>
:::{.question}
A regular hexagon has a side of length $l$.

a. What is the perimeter as a function of $l$?
b. What is the rate-of-change of it's perimeter as a function of $l$?
c. What is the area of the regular hexagon as a function of $l$? (tricky)
d. What is the rate-of-change of the area as a function of $l$?
e. What is the value of $l$ when the rate of change of the area is equal to $\sqrt{675}$?
:::
</summary>
<u> Solution </u>

a. The perimeter, $P$ is $6l$.
b. The rate of change of the perimeter as a function of $l$ is $${dP\over dl} = 6$$.
c. To solve this questions, cut up the hexagon into 6 equilateral triangles with side length $l$. This is done by connecting the center of the hexagon to the vertices. The area of these triangles is then
$$\frac{1}{2}\cdot b \cdot h = \frac{1}{2} \cdot l \cdot {\sqrt{3}\over 2} l = {\sqrt{3}\over 4} l^2,$$ where the height $h$ can be calculate used Pythogoras. We then know that the total area of a hexagon is $6$ times the area of one of these triangles. So the area is $A = {3\sqrt{3}\over 2} l^2$
d. The rate of change of the area is given by
  $${dA\over dl} = 3\sqrt{3} l$$
e. Firstly, we note that $l$ can not be negative, as a negative side length is not a reasonable quantity. We can solve this by rewriting $3 = \sqrt{9}$ and $l = \sqrt{l^2}$, so that ${dA\over dl}= \sqrt{9 \cdot 3 \cdot l^2} = \sqrt{27\cdot l^2}$ which equals $\sqrt{675}$. As $675\div 27 = 25$ this yields that $l=5$.
</details>

<details>
<summary>
:::{.question name="Hard"}
A town council planted a tree in the centre of a roundabout 5 years ago. When they planted the tree, it was $1\text{ m}$ tall. Today it is $3.5\text{ m}$ tall. This species of tree has a maximum height of $12$ m. They employ you, a mathematician, to estimate how long it will be before the tree is $10\text{ m}$ tall.

a. Supposing that the tree's height is rate of increase of the tree's height is constant. How many years does it take?
b. Supposing now that the rate of increase of the tree's height exponentially decreases with respects to the number of years since it was planted. How long does it take?
c. Compare the two models. Which is the most reasonable? Justify your answer.
:::
</summary>
<u> Solution </u>

a. As the rate of increase of the tree is constant, we have that $${dh\over dt} = k,$$ so by integrating this expression we can model the height of the tree as: $h = k\cdot t +c$. As the tree was planted at a height of $1$ m at $t=0$, we have that $c=1$.

   We are then told after $5$ years, the tree is now $3.5m$ tall. We then have that $3.5 = h = k\cdot 5 + 1$ so we have that $k = (3.5-1)/5 = 2.5/5 = 0.5$. The units of the constant $k$ convert time (seconds) to distance (metres) so $k = 0.5 \text{ m s}^{-1}$.
   So we have that
   $$h = 0.5 t + 1.$$

   So when is $h=10$ m? Well $10 = 0.5 t + 1$ so we have that
   $$t = {10-1 \over 0.5} = 18.$$ This is the time since the tree was planted, so from the present time that is $18 -5 = 13$ years.  

b.  Now we suppose that the rate of increase is given by:
    $${dh\over dt} = Ae^{-k t},$$
    so by integrating we have that
    $h= -{A\over k} e^{-k t} + c$.
    Now we use the data from the
    question.

    - At $t=0$ the height of the tree is $1$ m tall, so
    we have that
    $$1=h = -{A/k} e^{0} + c = c- {A\over k}.$$
    - We also have that at $t=5$ the tree is $3.5$ tall. So we have
    that
    $$3.5 = -{A\over k} e^{-5k} + c.$$
    - Finally, the fact the tree has a maximum height of $12\text{ m}$, means that at
      $t=\infty$ the height of the tree should be $12$ m.
      Implementing this ins the equation we have that $c = 12$ m,
      as $e^{-kt} \to 0$ as $t\to \infty$.

    So we have the following equations:
    $$
    \begin{align}
    c &= 12, \\
    {A\over k} &= c-1 = 11 \implies A = 11 k, \\
    {A\over k} e^{-5k}&= c-3.5 = 8.5.
    \end{align}
    $$
    Using that ${A\over k} = 11$, we have that $e^{-5k} = {8.5\over 11}$, taking the natural logarithm of this equation gives:
    $$
    -5k = \ln({8.5\over 11})
    $$
    Which tells us that $k = {1\over 5}\ln({11 \over 8.5})$, which makes $A = 11k =  {11\over 5} \ln({11\over 8.5})$. We now have a complete equation for the height of the tree as a function of time:
    $$h = 12 -11 e^{-\ln({11\over 8.5}) {t\over 5}}.$$ Complicated! You can see why the council hired a mathematician!
    So when does the height of the tree reach $10$ m in this model?

    $$
    \begin{align}
    10 &=  12 -11 e^{-\ln({11\over 8.5}) {t\over 5}} \\
    -2 &= -11 e^{-\ln({11\over 8.5}) {t\over 5}}\\
    {2\over 11} &= e^{-\ln({11\over 8.5}) {t\over 5}}
    \end{align}
    $$
    taking the natural logarithm of this we get that:
    $$ -\ln({11\over 8.5}) {t\over 5} = \ln ({2\over 11})$$
    This gives the time:
    $$t = 5 {\ln(11/2) \over \ln(11/8.5)} = 33.0597... $$
    So the tree will reach $10$ m tall $33.06$ years after it was planted, which is $33.06-5 = 28.06$ years from now.
c. The first model doesn't restrict the growth of the tree to $12\text{ m}$. After $22$ years the tree will exceed this maximum height. The second model however means the tree will always be below this maximum height. However, it is not necessarily a good model, it's just better than the first. The second model also starts with the tree growing rapidly to begin with and the growth slowing down as the tree ages, much like a real tree would. However, these models don't encode how trees grow rapidly in the spring and then don't grow in the winter. But if we treat this as the average growth per year, this makes sense. But that means the parameter $t$ needs to take values in the natural numbers $\mathbb{N} = \{0,1,2,3,4,\dots\}$.
</details>

<details >
<summary>
::: {.question name="The values and data in this question are completely made up. "}
A country is keenly monitoring the spread of a virus. To stop the virus from overloading the country's healthcare system, the government will strategically implement a "national lockdown". The country monitors the situation by measuring the virus' reproduction value, i.e. it's $R$ value. This is the average number of people an infected person will pass the virus on to. If the rate of change of the $R$ value exceeds $0.9$ per week. The country will implement a national lockdown to slow the spread of the virus.

a. Without any "social distancing", the $R$ value is modelled as $R = \exp(1.4 t)$, where $t$ is the time measured in weeks. How long is it before the rate of change of the $R$ value exceeds the threshold for a national lockdown?
b. With the social distancing measures in place the $R$ value is modelled as $R = \exp(0.8 t)$. How long is it before the rate of change of the $R$ value exceeds the threshold?
c. The government apply a series of city-lockdowns, to try and combat the local "hot-spots" of the virus and to prevent a nationwide lock down. These measures cause the $R$ value to be modelled by $R = \exp(0.08 t)$. How long is it before the rate of change of the $R$ value exceeds the threshold?
:::
</summary>
<u> Solution </u>

The rate of change of the $R$ value is given by the derivative of the
$${dR\over dt}.$$

a. If we model the $R$ value as $R = \exp(1.4 t)$, then we find the derivative to be:
$${dR\over dt} = 1.4 \exp(1.4t).$$
The question asks when does this value exceed the threshold of $0.9$. So for zero weeks the rate of change of the $R$ value is larger than the threshold.
b. Now $dR/dt = 0.8\exp(0.8 t)$ so for when is $0.8 \exp(0.8 t) >0.9$ is when $\exp(0.8 t) >0.9/0.8 = 1.125$, so $t> \ln(1.125)/0.8 = 0.147...$, which is still within a week.
c. Now $dR/dt = 0.08\exp(0.8)t$, which exceeds $0.9$ when $\exp(0.8 t)>0.9/0.08=11.25$. By taking the natural logarithm again, we have that $t >\ln(11.25)/0.08 = 30.25$. Which is now a much longer time period before a national lockdown is required.
</details>

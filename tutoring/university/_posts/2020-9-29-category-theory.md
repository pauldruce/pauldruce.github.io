---
layout: post
title: Notes on Category Theory - in progress
author: Paul Druce
date: 2020-9-29
summary: Introductory notes on category theory
category: research
tags: [post, notes, unfinished]
csl: ../../../assets/bibtex/communications-in-mathematical-physics.csl
bibliography: ../../../assets/bibtex/website_bib.bib
link-citations: true
toc: true
---

$$\require{amscd}$$

This is my reluctant attempt to learn some category theory. I’ve run into category theory in most of the areas of mathematical research I’ve pursued. It’s seemingly inevitable that I (and everyone else) will have to understand what is so important about the category theory way of doing things. I remember asking other researchers that used category theory on a daily basis

> “What exactly does category theory actually provide? How is it actually useful?”

to which I’d receive fairly unsatisfactory answers such as

> “It tells you what you should prove. It’s a good way to figure out what is trivial and what is not trivial.”.

All of these answers just didn’t really satisfy me. I essentially viewed category theory as a book-keeping framework. However, I believe this is a naive thought, but I’m still not particularly sure exactly what makes category theory so potent that almost every mathematician I know has used it.

So to guide my adventures, I’m going to start simple and get more complicated. These notes will be constructed entirely for myself, but they might be useful for others too. I will be using a number of resources, but to start off I’m going to read “Basic Category Theory” by Tom Leinster [@Leinster2014] and hopefully complete the exercise within. My goal is to better understand the field of non-commutative geometry in terms of category theory.

## The beginning

Throughout my undergraduate degree, I studied many different areas of mathematics. Linear algebra, topology, group theory, Euclidean geometry, differential geometry, ring theory, Lie theory. In each of these topics, we learn about the properties of a basic object. In linear algebra, we study vector spaces, in topology we study topological spaces, in geometry we study manifolds with varying properties. Within each branch, even in each sub-branch, we learn of a map that tells us when two objects are the same. We say that these objects are ‘isomorphic’ or ‘homeomorphic’. In linear algebra, two vector spaces are deemed ’the same’ if there is a _bilinear linear map_ between them. In topology, two topological spaces are deemed ’the same’ if there is a map called a _homeomorphism_. In group theory, we have _group isomorphisms,_ in ring theory we have _ring isomorphisms_. So on and so forth, we have different words for roughly the same concept. More over, the idea of ’sameness’ changes from situation to situation.

> Is there a way to abstract this idea of ’sameness’ from each field to a more general framework? This idea is where category theory makes sense to me. To understand concepts that hold true for many different fields from a more general viewpoint. There is more to category theory though, much more. So let us dive in.

So what is a category? It is a collection of certain mathematical objects, together with certain class of maps between these objects. These collections of objects and maps have to satisfy a number of properties that hold true for many of the above examples of fields. A question I want to know, is why the following definition of a category is _the right one_.

::: { .definition name="A Category"}
A category consists of the following data:

- A collection of objects, $ob(\mathcal{C})$.
- The maps between any two objects $Hom(A,B)$ for $A,B\in ob(\mathcal{C})$
- A rule/procedure that describes how we can compose maps, i.e. $\circ$, such that for $f\in Hom(A,B)$ and $g\in Hom(B,C)$, where $A,B,C\in ob(\mathcal{C})$, we can define $f\circ g\in Hom(A,C)$.

These objects must satisfy a number of relations:

- First: the composition must be associative, i.e $(f\circ g)\circ h =f \circ (g\circ h)$ for all maps.
- For every $A\in ob(\mathcal{C})$ we must have an identity map, i.e. there exists a map $1_A\in Hom(A,A)$ such that $f\circ 1_A = f=1_b \circ f$ for every $f\in Hom(A,B)$.

:::

Now why is this the right definition for a category? Well the collection of objects makes sense right? We want to study how construction for all _groups_ are similar to the constructions for all _topological spaces_.

What about the maps between objects? We haven’t put any conditions on what those maps must be. In fact, using the word _maps_ might be misleading, because these do not need to be continuous or even functions, they are sometimes called _morphisms_ or _arrows_ to make this point absolutely clear. So we haven’t excluded any examples we know with this. So the maps are fine.

So what about the composition law? The fact that we can compose maps is a very useful and fruitful idea. As every example you can probably think of has the composition of maps, this seems well suited? Well, why does it have to be associative? Granted the composition of functions is associative, the composition of isomorphisms and homeomorphisms, but are there really no objects that have a composition rule that isn’t associative? There are many mathematical operations that are not associative, subtraction is not an associative operation: $(5-3)-1\neq 5-(3-1)$. Neither is division or the Lie bracket for Lie algebras, so why does the composition of maps need to be associative in categories? I have no great argument for why we requiring associativity is _the right thing to do_ except, that if we relax this condition, we need to replace it with something more general. This has been done, of course, mathematicians never fail to explore every avenue. These ’non-associative’ categories go by the name of $A_\infty$-categories and are very advanced.

> So let us just say that associative is sufficient to capture every reasonable example.

Finally, the presence of an identity map is always there, it’s almost a non-sensical notion to not have an identity map. Think about it, I have an object, and I can’t do ’nothing’ to it - what does that even mean. So identities must exist I agree.

So thats a category, so whats next? Well lets revisit some familiar friends, and see what categories we can form.

:::{.example name="Category of topological spaces and continuous maps"}
Let $Top$ be the following category: The objects are all topological spaces. The maps are the continuous maps between topological spaces. The composition of continuous maps is associative. The identity function exists.
:::

:::{.example name="Category of groups and group homomorphisms"}
Let $Grp$ be the following category: Let $ob(Grp)$ be all groups, let $Hom(A,B$ be the group homomorphisms from the group $A$ to group $B$. We have that composition of group homomorphisms is associative and that the identity map is a group homomorphism, so it is in $Hom(A,A)$.
:::

:::{.example name="Manifold categories"}
Let $Man^k$ be the category of $C^k$-manifolds and $C^k$ maps between them. We let $Man^\infty$ be the category of smooth manifolds and smooth maps between them. Let $Man^\omega$ be the category of analytic manifolds. Note that composition of functions is associative again and the identity map exists in all cases here.
:::

:::{.example name="Category of sets"}
Let $Set$ denote the category of sets and maps between them. Map composition is associative again and the identity map exists.
:::

The examples above are mainly to introduce some notation for some key players in category theory. However, we notice that most structures fit in a category. Geometry, algebra and set theory all fit there. There are many many more categories and we will investigate some in a little bit.

It is clear at this point that defining a Category is not special. Category theory's power is describing how different categories relate to each other. Just like defining a manifold is not particularly important. Understanding the properties of manifolds and how they relate to each other is powerful. The Whitney embedding theorem comes to mind here, that any smooth (real) $m$-dimensional manifold can be embedding in $\mathbb{R}^{2m}$ (for $m>0$). This statement shows that results proved for embedded manifolds can hold true for any manifold.

With that being said, I think that it is very insightful to look at some specific types of categories.

### Categories with only one object

Most of the examples of categories above contain many many objects. However, categories can be very interesting when they are much simpler/smaller as we shall now see. Let $\mathcal{C}$ a category with only one element, let us denote that element by $x$ (the letter is obviously not important), i.e. so $ob(\mathcal{C}) = \{x\}$. I don’t know if this is taboo or not to write this as a set, but I think it’s pretty safe, but I’m always a little scared of the pedants.

So as the list of objects is simple, we can ask ourselves, what are the different types of maps that we can require? Well all the maps have to start and end with the same space, i.e. $Hom(x,x)$. So as the definition of a category requires us to have an identity map, that exists. We also require associativity, so if we have maps $f,g\in Hom(x,x))$ we have also $f\circ g$ **and** $g\circ f$. We then also have $f\circ(f\circ g)$ and $g\circ(f\circ g)$ etc.

So at this point we should think about some cases. If $x$ is just an empty set $x=\{\}$ then the only map we can have is to map $x$ to $x$, i.e. we only have the identity map. However, what if $x$ is actually a general finite set? So there is $x=\{a_1, a_2,a_3,\dots \}$, well then we have the identity map that $1_x(a_i) = a_i$ for all $a_i \in x$. And any other map we can come up with. I've listed some bijective maps below.

<center>
<div class="image_block" id="fig:singleObjectMaps">
![](/assets/2020/category-theory/singleObjectMaps.svg){.greyscale-img}
![](/assets/2020/category-theory/singleObjectMaps1.svg){.greyscale-img}
![](/assets/2020/category-theory/singleObjectMaps2.svg){.greyscale-img}

Figure 1: A pictorial representation of a single object category and a description of potential morphisms. (Question: Given the definition of a category, what other maps must there be for our single object category $x$?)

</div>
</center>

But we've already made a rather larger blunder here. We don't need to specific what $x$ **is** to define a category. We just have to define an **object**. It doesn't need to be a set or anything really. We then have maps from $x$ to itself.

::: {.example name=Monoid}
Let $M$ be a category with one object. Let the maps have no conditions on them other than those required by a definition of a category. We call such a category a monoid. This does agree with the definition of a monoid in abstract algebra.
:::

This example is seemingly unimportant, but you will find (or have found already in your mathematical endeavours) that monoids are important. Specifically, I keep coming across the term 'monoidal category' which I want to have a good understanding of. It turns out that a 'monoidal category' is more difficult to define, however one of the key properties of a 'monoidal category' is that you can always find a monoid for that category, i.e. $Set$ is a monoidal category and we can always find a monoid, within the category of sets. But we will have to wait to see this formal definition.

Another very interesting example of a one object category is that of a group. Yes a group can be viewed as a one category.

::: {.example name="Group as a Category"}
Let $G$ be a group, then elements of the group $G$ are defined as maps for a one object category. Where the object of the category is then what? Well does it matter? No, not at all. The entire property of a group is capture in the elements and how they behave. Here we are viewing them as maps, it doesn't matter what we are mapping from and to.

Groups require that the elements satisfy a number of axioms, which boil down to the following:

- the existence of an identity (which has to exist in a category $\checkmark$)
- given two elements $x$ and $y$ there composition has to exists (again literally in the definition of a category $\checkmark$). Let this composition be denoted by $\cdot$. So we have to have $x\cdot y$ exists.
- The composition of elements is associative (again the definition of a category $\checkmark$).
- if $x$ exists, then the inverse exists $x^{-1}$. More concretely, given $x$ we require that there exists an element $x^{-1}$ such that $x\cdot x^{-1} = x^{-1} \cdot x = 1_G$, where $1_G$ is the identity.

What does this last condition mean in terms of category theory perspective? Well given a map $f$ (which corresponds to an element $x$ say) we require another map to exists such that $f\circ g = g\circ f = 1_\bullet$, where $1_\bullet$ is the identity map. Thus we require that the maps in the category are invertible!

So any single object category where the maps all have two-sided inverses, we can view as a group!
:::

This leads us to the notion of an isomorphism in category theory. We shall look at isomorphism and where they are useful and where they need to have a bit of a rethink.

### Isomorphisms in category theory

We want to define a notion of isomorphism that captures all of the differing versions that exist. Given the category $Set$, we need a definition that captures that bijections in $Set$ are the isomorphisms. In $Top$, we need it to spit out homeomorphisms. In $Grp$ we need it to spit out group isomorphisms. So on and so forth, every mathematical structure has some notion of 'isomorphic' which we want to generalise.
It turns out to be remarkably easy.

:::{.definition name="Isomorphisms in Categories"}
Given a category $\mathcal{A}$, we that a map $f:A\to B$ between two objects in a category, $A,B\in ob(\mathcal{A})$, is an isomorphism if there exists another map $g:B\to A$ such that $f\circ g = 1_B$ and $g\circ f= 1_A$. Where $1_A$ is the identity map for the object $A$ and $1_B$ is the identity map for the object $B$.
:::

So lets check that this definition does provide us with the correct notion of isomorphism for the a handful of examples:

:::{.example}

:::

Universal Properties: These are statements with are true for every example of the class and unique. For instance the map from every set to the set with one element $1=\{x\}$ that maps each element to the one element in $1$. This is a unique map, and exists for every set.

<!-- $$
\begin{CD}
A @>a>>B \\
@VbVV @VVcV\\
C @>d>> D
\end{CD}
$$ -->

## References

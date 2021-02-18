---
layout: post
title: "Pandoc + Jekyll + Github = :heart:"
author: Paul Druce
summary: How I've setup Pandoc+Jekyll+Github to create mathematical oriented content for the web. For free!
category: academic
tags: [post,tech,maths,pandoc,jekyll]
finished: false
<!-- published: false -->
---

## Plan

- [x] Writing mathematics on a computer, why I wanted to use Latex, the philosophy of this project
- [ ] Github pages -> free website hosting. BUT it's static only so you can't have complicated server operations. One exception is jekyll.
- [ ] Jekyll. This is a piece of software that lets you create a static blog. Well that is the typical use case. It lets you write you posts in Markdown (a simple formatting language that makes writing the focus, not the formatting). It then takes your markdown and runs it through the software which creates the website (a series of html pages). You can control pretty much everything if you know enough.
- [ ] I don't know enough. I'm not experience creating websites or web content at all. What I am experienced with is Mathematics and writing mathematics. My main job is to tutor students in mathematics and physics, and I wanted a way to host questions that anyone can access and to write mathematics easily. I also wanted to take advantage of the web technology that I know exists such as interactivity and animations that don't required a server. I am specifically taking about p5js and hosting manim animations as gifs/videos.
- [ ] The problems with converting latex/document writing to web content. Footnotes.

# How the hell did it come to this?

Of all the countless nerds I've met during my life, I still get looked at like a weirdo sometimes. One of these times is when I was talking to someone about how I wanted to put some of my research notes on the web. "Who wants to read those? Why wouldn't you just want the pdf". It's become apparent that in the academic and research community, trying to put your ideas out into the world, is only really accepted in a few mediums. In dense, hard to read, academic papers, that take months or years to write, take weeks/months/years to be peer reviewed and then get read by 10 people who stumbled upon them accidentally.
Then when you have further ideas on the same topic, instead of it being really easy for others to find your most recent thoughts on the topics, then have to search the web for you name, find another long dense paper, with a ton of repetition in the introduction, just to gleam the important details.

Some websites are trying to make this process much easier and have succeeded. Places like the Arxiv, which is a preprint server, where academics post papers before they have been peer reviewed and all of the papers by an author can be found in chronological order. ResearchGate and Academia.co and even Linkdin all try to make research a more interactive and collaborative space. Where people can comment and discuss ideas.

But it's not working. The Arxiv is overflowing with papers, to the point where no one knows whats going on. To post on the Arxiv, you still need to write a full fledged paper. And even then, the format of pdf do not allow for some of the best mediums of explanation. Animations and videos allow for much more freedom when trying to explain concepts.

So what should every one do? Simultaneously learn web developments as well as the field of interest? Hire a web developer to create a web version of their content. Pfffft nahhh man. There must be some kind of easy way to convert my latex writing to web content, and learn a few ways to make animations. Then whack them up on a website. Learn as we go, you know?

Well there is! It takes a little amount of time to get familiar with the pieces, but once you have the pieces you can whack out a blog post with some images, animations and even interactions. All for free, and using no more a few basic web tools.

You also keep complete creative control, and develop some skills that you can pass on to others! So lets go!

# Writing mathematics.

I use LaTeX to write up my work - like any self respecting mathematician/physicist should. :wink:

This is the language most mathematics and physics papers are written in, so most researchers I know use LaTeX. It means to write something as complicated as:
$$
\sqrt{\pi} = \int^{\infty}_{-\infty} e^{-x^2}\, dx
$$
It is as easy as:
```latex
$$
\sqrt{\pi} = \int^{\infty}_{-\infty} e^{-x^2}\, dx
$$
```

which, granted, if you haven't seen LaTeX before, it may look daunting, but notice that is took me ~10 seconds to type it all. And can be instantaneously rendered by the software I'm about to demonstrate.

But the fact that I don't have to convert my mathematical typing knowledge from one form to another removes one barrier from getting maths on the web.

Maths is not just about writing symbols, but there are specific structures I wanted to keep.
I wanted the following things:

- Theorem boxes and proposition boxes
- Definition
- Examples/Questions at specific points.
- Equation numbering! (why this wasn't a default of some methods is beyond me)
- Commutative diagrams.

I still find the idea of having "chunks of results" a very useful way to convey information and also the easiest way to reference these results within the document. For instance:

:::{.theorem name="A famous theorem"}
An example theorem for this post:
The catgeory of commutative $C^*$ algebras is equivalent to the category of Hausdorff topological spaces.
:::
:::{.proof}
This proof is left to the reader as an exercise
:::


For proofs, I have taken to the following setup. You construct a theorem as above, but we encase it in a ```<details>``` environment. This is a html class, that allows for collapsible entries. For instance the following code:

```
<details>
<summary>
:::{.theorem name="A famous theorem"}
An example theorem for this post:
The catgeory of commutative $C^*$ algebras is equivalent to the
category of Hausdorff topological spaces.
:::
</summary>
:::{.proof}

This proof is left to the reader as an exercise.
:::
</details>
```
Yields the following output:
<details>
<summary>
:::{.theorem name="A famous theorem"}
An example theorem for this post:
The catgeory of commutative $C^*$ algebras is equivalent to the
category of Hausdorff topological spaces.
:::
</summary>
:::{.proof}

This proof is left to the reader as an exercise.
:::
</details>

If you want the proof to be visible by default, then you just change the first line from ```<details>``` to ```<details open>```, and produces:

<details open>
<summary>
:::{.theorem name="A famous theorem"}
An example theorem for this post:
The catgeory of commutative $C^*$ algebras is equivalent to the
category of Hausdorff topological spaces.
:::
</summary>
:::{.proof}
This proof is left to the reader as an exercise.
:::
</details>

Getting definitions is done by the code block:
```
:::{.definition}
A extremely useful definition...
:::
```
which produces:
:::{.definition}
A extremely useful definition...
:::

By change the code from ```:::{.definition}``` to ```:::{.example}``` or similar produces different coloured boxes and changes the text. This is customizable with a little dabbling in CSS^[I truly mean a little dabble. I know barely any CSS and I managed to hobble together enough to create this.]

---
layout: post
title: "Step by step walkthrough of data analysis in thesis"
author: Paul Druce
summary: A step by step walkthrough of how we processed the monte carlo simulation data for random non-commutative geometries.
category: academic
tags: [post]
toc: true
published: false
---

The data we are set to analyse is the found on Zenodo - an open repository for
research, hosted by CERN.
The data we are analysing is the "Spectra of random Non-commutative Geometries
[https://doi.org/10.5281/zenodo.2583688](https://doi.org/10.5281/zenodo.2583688).

This data was analysed by my collaborators and I, with the results published in
the paper [Spectral estimators for finite non-commutative
geometries](https://arxiv.org/abs/1902.03590).

The plan of this blog post is to walk through how you might go about verifying the
results we arrived to.
My motivation for this is to give anyone interested in pursuing the study of
non-commutative geometry a starting point.
However, I was not experienced in software development when I was studying for
PhD, as a result the code I wrote and used is fairly unpleasant to read and deal
with.

You can find the GitHub repo with all my code and various plots etc here:
[https://github.com/pauldruce/Dimensional-Measures](https://github.com/pauldruce/Dimensional-Measures).
I attempt to tidy up the code previously (circa 2020), however, I only focussed
on extracting the code to generator some, not all, measures discussed in the paper. You can find that repo
here:
[Fuzzy-Spectral-Estimators](https://github.com/pauldruce/Fuzzy-Spectral-Estimators/tree/884fcd1eb71e0d01962cd7264cfb92747b463831)

I will likely use the Fuzzy-Spectral-Estimators repository to tidying up more of
the code in Dimension-Measures whilst writing this blog post.

## What are we analysing

The topic in question is quite abstract. By this I mean, it can be viewed as either
just a data-analysis problem or we can involve the physics inspired reasoning.

To keep this section fairly simple, we will not think about the implications or reasoning
behind the analysis. And instead we will just use a lot of "facts" and I will
try to point you to other resources to go and verify them. A fairly reasonable
place to look for specifics is my [PhD thesis](/assets/PDFs/Paul-Druce's-PhD-Thesis-2020.pdf)

A summary: We are analysing the eigenvalues of the Dirac operator for some finite
non-commutative geometries. These are uncommon mathematical objects and were the
focus of my PhD.

However, essentially, the key facts are the following:

* The [Dirac operator](https://en.wikipedia.org/wiki/Dirac_operator), $D$ is the *square root* of the
Laplacian $\Delta$, in the sense that $D^2 = \Delta$
* The Laplacian encodes aspects of the geometry of a space. This is the basis of [Spectral
  geometry](https://en.wikipedia.org/wiki/Spectral_geometry) and is captured
  perfectly in the phrase ["Can one hear the shape of a
  drum?"](https://en.wikipedia.org/wiki/Hearing_the_shape_of_a_drum).

Extracting the geometry from the eigenvalues (the spectra) of the Laplacian and
the Dirac operator is the name of the game. There are many results in Riemannian
geometry which we are going to take and then adapt to the finite non-commutative
geometry world.

### Weyl's Law
<details>
<summary>
<!-- TODO: Put straight line equation version of this here -->
</summary>
For Riemannian manifolds, the volume and dimension of the manifolds
  is encoded in the eigenvalues of the [Laplace-Beltrami
  operator](https://en.wikipedia.org/wiki/Laplace–Beltrami_operator) - this is
  called [Weyl's Law](https://en.wikipedia.org/wiki/Weyl_law).

Weyl's Law can be expressed as a limit in the following form:
  Let $N(\lambda)$ be the number of eigenvalues less than the value $\lambda$.
  $$\lim_{\lambda \to \infty}\frac{N(\lambda)}{\lambda^{d/2}} =
  \frac{Vol(M)}{(4\pi)^{d/2}\Gamma(d/2 +1)}.$$
  If we order the eigenvalues so that $\lambda_0 \leq \lambda_1 \leq ...$, then
  we can rewrite this as an asymptotic approximation for the $k$-th eigenvalue:
  $$\lambda_k \sim 4\pi \left(\frac{Vol(M)}{\Gamma(d/2 +1)}\right)k^{2/d}.$$
  Here $\Gamma(z)$ is the Riemann-Zeta function and $Vol(M)$ is the volume of
  the manifold.

  <!-- Explain steps to get to straight line equation -->
</details>

### Heat Kernel Asymptotics
<details>
</details>

## Getting the data

We need to get the data we want to run some analysis on. The simplest way to do
this is to go to https://zenodo.org/records/2583688 and click the download all.
However, this is about 13.6 GB - so just be warned, once unzipped this data will
grow considerably. You may want to download each of the sub-files individually
if you have an intermittent network connection.
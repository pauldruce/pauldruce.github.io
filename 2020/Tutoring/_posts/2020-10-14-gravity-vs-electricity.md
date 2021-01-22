---
layout: post
title: Electrity vs Gravity - Unfinished
author: Paul Druce
summary: An interactive animation between gravity and electrostatic forces aimed at AS/A level students in the UK
category: tutoring
tags: [post,animation,physics,unfinished]
images: "../assets/2020/electricity-vs-gravity/"
---

<!-- csl: ./assets/bibtex/communications-in-mathematical-physics.csl
bibliography: ../assets/2020/electricity-vs-gravity/electricity-vs-gravity.bib -->

At some point in your physics studies, you may have come across statements about gravity being very weak. Or electricity being a strong force when compared to gravity. I want to investigate these statements in a fun and interactive way. So first let us set the stage by quickly describing the AS/A level approach to gravity and electrostatic forces.


## Interacting particles
The premise of two particles interacting is at the core to most of modern physics. However, the first thing we need do before diving into this problem is to take a closer look at the coordinate system we will be using. Gravity and electrostatic forces do not depend on the exact positions of the particles, only on their distance from each other. This means that a standard $(x,y)$ Cartesian coordinate system can be a little cumbersome. Where do we take our origin from? If we take the origin to be at the centre of one of the particles, we have to then deal with the circular or spherical symmetry of the system by introducing complicated coordinate expressions. It turns out that moving to a circular or spherical coordinate system will make everything much easier to describe.

<figure><center>
![](/assets/2020/electricity-vs-gravity/polar_coordinates.svg)
<figcaption> The blue dots represent the particles and we define the angle $\theta$ from the line that connects their centres. </figcaption>
</center></figure>

So let us describe a circular coordinate system[^1]. The first thing we need to do is to define a centre, a $(r,\theta) = (0,0)$. We shall take this to be at the centre of one of the particles. Then we need to define where we measure the angle $\theta$ from? What is $\theta=1^\circ$ for instance? Well, consider two particles as in the diagram above, we can always construct a line that connects the centres of the two particles. We then measure the angle as being counterclockwise from this line. Notice, that this definition has the added benefit for us, that the angle-coordinate for one particle is always zero. This then captures the idea that we only care about the separation of the particles, not the exact position.[^2]

[^2]: Now if we have more than two particles in play, then the case gets more complicated, so we will just ignore it for now.



[^1]: The generalisation to spherical coordinates will be easy to understand after first working out the circular coordinate system case.


## Electrostatic Attraction and Repulsion

In order to investigate the relative strengths of gravity and electrostatic attraction/repulsion, we need to mathematically describe these forces.
In order for there to be an electrostatic interaction, we need to have *charged* particles.
Given two particles, $p_1$ and $p_2$, let them have charges $q_1$ and $q_2$ respectively.  

Whether or not these particles experience an attractive force or a repulsive force, depends on the signs of the chargers. The strength of the force is reliant on the magnitude of these charges.

If these charges are both positive, or both negative, the particles will experience a repulsive force. The charges $p_1$ and $p_2$ have different signs, then the particles will experience an attractive force.


The electrostatic force between them can be expressed mathematically as:
$$F_{\text{Elec}}= \kappa_0 {q_1 q_2 \over r^2}$$
where $r$ is the radial separation between the two objects. Note that a positive value for the force produces a repulsive force, and a negative value for the force results in an attractive force.

The coefficient $\kappa_0$ is a constant, defined to be $1/(4\pi\epsilon_0)$, where $\epsilon_0$ is a measured quantity of nature called the "permittivity of the vacuum".
Essentially it is a measurement of how easily an electric field can travel through empty space. It is one of the fundamental physical constants of nature.  


This coefficient $\kappa_0$ plays the vital role of rectifying the units of our expression.
The value in this work is taken^[This value is derived from $\kappa_0 = 1/(4π\epsilon_0)$ – "2018 CODATA Value: vacuum electric permittivity". The NIST Reference on Constants, Units, and Uncertainty. NIST. 20 May 2019. Retrieved 2019-05-20.] to be $\kappa_0=8.9875517923(14)\times 10^9 \text{Nm}^{2}\text{C}^{-2}$.


## Gravitation Attraction

$$F = - G {m_1 m_2 \over r^2} $$

The minus sign is because gravity is attractive and the mass is always positive. This is to aggree with the electricity convention above.

## Overall force

$$F_{\text{Total}} = F_{\text{Grav}} + F_{\text{Elec}} = {(-Gm_1 m_2 + \kappa_0 q_1 q_2) \over r^2}$$

So if $G m_1 m_2 = \kappa_0 q_1 q_2$, then overall force on the particles is zero, and they will be unaffected by electrostatics and gravity.

## Specific Charge
Define the specific charge of a particle to be $s_1 = q_1/m_1$. Then we have that ${G\over \kappa_0} = s_1 s_2$. So what is the value $G/\kappa_0$?

Hello

$${\kappa_0 \over G} = 1.347459039\times 10^{20} $$

and

$$G/\kappa_0 = 7.42137587\times 10^{-21}$$




## Interative Animation
<div id="sliders-holder"></div>
<div id="p5js-anim"></div>
<script src="{{base.url}}/assets/js/electricity_vs_gravity.js"></script>

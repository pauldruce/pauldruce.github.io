---
layout: post
title: Representation Theory of the Lorentz Group
author: Paul Druce
summary: A detailed examination of the representation theory of the Lorentz group and its use in Physics. Specifically, the aim is to full understand how the representations correlate to particles etc.
category: academic
tags: [post, notes]
published: false
---

# Why are Lorentz transformations so important?

One of Einstein's great insights about the fundamental workings of nature is that of special relativity. The key assumptions of special relativity are reffered to as the two postulates.

- The first postulate states that the laws of physics are identical in all inertial frames of reference, regardless of their relative motion.
- The second postulate is that the speed of light is the same constant value in all inetial frames.

A new era of physics was spawned from these two concepts. The discovery of relavitistic physics was only rivalled in revolutionary ideas by that of quantum theory.

One of the most fundamental conclusions from the two postulates of special relativity is that of Lorentz invariance. The constancy of the speed of light in all frames of reference required a new type of transformation between reference frames.

There are a number of ways to arrive at the Lorentz transformations. Each method differs in rigour and ease of understanding. 

## Why is the space-time interval an invariant?

Consider two events, the emission of a photon and the absorption of the photon. If we choose (or are in) a particular frame of reference, then we can give these two events coordinates, a particular position where they occured in space, and a specific time at which they occured. These are space-time coordinates (usually written down as time-space coordinates), $(t_i, x_i, y_i, z_i)$, where $i = 1$ is the emission of the photon, and $i=2$ is the absorption of the photon.

Regardless of the frame of reference we are in (or choose to work in), we expect that the emission occurs first, then the absorption afters wards.
This requires that the time coordinate of the first event ($t_1$) is less than that of the second $(t_2)$. This is the idea of causality, which is a fundamental assumption of physics.

Another consequence is that the distance ( $d$ ) the light beam travels is given by^[We are assuming that space-time is flat] $\sqrt{(x_2-x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}$. This distance must be be equal to the distance travelled by the photon in the time interval $(t_2 - t_1)$, which is equal to $c(t_2 - t_1)$, where $c$ is the speed of light. So we have the following:

$$c(t_2 - t_1) = \sqrt{(x_2-x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}\\
\text{or, more commonly stated as:} \\
c^2(t_2 - t_1)^2 - (x_2-x_1)^2 - (y_2 - y_1)^2 - (z_2 - z_1)^2 = 0
$$

This equation is true regardless of the reference frame we are working in. As the speed of light is constant in all frames of reference, then the values for $x_i, y_i, z_i$, and $t_i$ may all change, but this relationship is still true.
This quantity $ds^2 = c^2(t_2 - t_1)^2 - (x_2-x_1)^2 - (y_2 - y_1)^2 - (z_2 - z_1)^2$, is called the space-time interal, or the line element of flat space.

The first thing to notice is that the specific example we have used is not important. If any two events in space-time satisfy the equation $ds^2 = 0$ in one reference frame, then it is satisfied in all reference frames.
You can think of it like this: if two events occur such that $ds^2 = 0$ in one reference frame, then it would be possible to send a photon between the two events just as we described above. Then by the argument above, this interval needs to be zero in all reference frames.

Notice that if the space-time interval is $>0$ or $<0$ instead of $=0$. Then make no assumptions at this point.
However, consider the space-time interval of two events in two different reference frames:  $ds^2$, $(ds^\prime)^2$.
If these events are infinitesimally close to each other such that the space-time intervals are of the form $ds^2 = c^2dt^2 - dx^2 - dy^2 - dz^2$.
Then we know that if $ds^2 \to 0$, then $(ds^\prime)\to 0$ also. We can also show that they are infinitesimals of the same order by making use of the principle of relativity.

Suppose that in reference frame $S$ which is moving relative to reference frame $S^\prime$. If we have that $ds^2$ is an infinitesimal of a larger order than $(ds^\prime)^2$ then we would have that:
$$
\frac{(ds^\prime)^2}{[ds^2]^n} \to A =\text{constant,}
$$
for some value of $n>1$.

However, all physics is idential in all inertial frames, so from the point of view of reference frame $S^\prime$, we would have the reverse situation. We would require that $(ds^\prime)^2$ is an infitesimal of larger order than $ds^2$. This yields a contradiction, so we must have that they are of the same order.

It is worth noting that the constant $A$ can only depend on the relative velocities of the two frames of reference.
It can not depend on the spatial position of the events in either frame due to the homogeneity of space-time (the laws of physics are the same at all points in space and time).
It also can't depend on the direction in which the space-time interval is directed, by the isotropy of space-time (the laws of physics are the same in all directions, i.e. $f(\vec{v}) = f(|\vec{v}|)$).

So we can state that the two space-time intervals are proportional to each other: $ds^2 = \alpha (ds^\prime)^2$.
To prove a formal statement for these expressions, we would need to recast the question into that of bilinear quadratic forms on vectors spaces, see [https://en.wikipedia.org/wiki/Derivations_of_the_Lorentz_transformations](https://en.wikipedia.org/wiki/Derivations_of_the_Lorentz_transformations#Rigorous_Statement_and_Proof_of_Proportionality_of_ds2_and_ds′2)

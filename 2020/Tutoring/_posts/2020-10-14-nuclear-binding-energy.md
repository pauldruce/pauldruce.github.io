---
layout: post
title: Nuclear Binding Energy Notes and Questions
author: Paul Druce
summary: Addressing some common problems students have about nuclear binding energy, accompanied by some questions.
category: tutoring
tags: [post, questions, notes]
---

## Binding Energy and Mass defect

The nuclear binding energy is the energy that is required to break apart a nucleus into its constituent nucleons (protons and neutrons). For example: it is the energy required to split a Helium nucleus (otherwise known as an $\alpha$ particle) into the two protons and two neutrons that it is made of.

The fact that it requires energy to break apart a nucleus means there is a force keeping the neutrons and protons bound together, and as neutrons are not electrically charged, this force is not just the electromagnetic force alone. We collect the nuclear forces together to talk about the Nuclear force. We know today that there are in fact two different nuclear forces, the weak and strong nuclear forces, as well as the electromagnetic force, however we don’t distinguish them here.

The notion of binding energy and the mass of a nucleus are very much intertwined. They are really just different ways to express the same physics, but the distinction is a useful one. This should hopefully be clear by the end of this set of notes.  

Taking the $\alpha$ particle example from above, we have that protons have a mass [^1] of $1.007276466879u$ and a neutron has mass of $1.00866491588u$, where $u$ is the atomic mass unit. The atomic mass unit, $u$, is defined to be $1/12$-th of the mass of carbon-12. This has the consequence that a carbon-12 nucleus has mass of exactly $12 u$. In kilograms we have that $u =  1.660539040(20)\times 10^{-27}\ kg$, which is incredibly tiny.

[^1]: The values of the mass are take from the Wikipedia pages for Protons and Neutrons respectively on 19/4/2019.

So we have that the constituents of an $\alpha$ particle have a combined mass of

$$
\underbrace{(2\times 1.007276466879 u)}_{\text{protons}} + \underbrace{(2 \times 1.00866491588 u)}_{\text{neutrons}} = 4.031882766u
$$

Whereas the actual mass of an alpha particle is found to be $4.001506179127u$. So there is a discrepancy between the masses. We seem to have lost mass when forming a nucleus. This is a process we don’t usually encounter in every day life. What is happening is that some of the mass of the constituents gets converted into a different type of energy. This is one of the great realisations by Einstein that mass is just another form of energy, and the exchange rate is given[^2] by $E = mc^2$.

[^2]: There is some subtlety in this equation, the mass here is what is called the rest mass. The mass of the object when it’s not moving. When an object is moving it actually gets heavier, another one of the bizarre realisations of Einstein.  

Well, where does this lost mass go? We have that $\Delta m = m_{\text{before}} - m_{\text{after}} = 0.030376587 u$. So this *mass defect* has to be accounted for and it must be converted into another type of energy, for instance kinetic energy carried away by a photon. If the *mass defect energy* is large enough to create a particle, say an electron, it could cause an electron to be emitted with a smaller kinetic energy. But the energy must always be carried away.

Okay so what does this have to do with binding energy? Well, binding energy is the energy required to reverse this process. To take an $\alpha$ nucleus and break it into it’s constituents. So we need to give enough energy to the system to account for the mass that is need to be created, as the nucleus has a smaller mass than its constituent protons and neutrons.

$$
^4_2He^{+2} + \text{energy} \to 2 p^+ + 2 n^0
$$

Well the *mass defect* for this equation is now $\Delta m = m_{\text{before}} - m_{\text{after}} = - 0.030376587 u$. So for this process to ever have the chance of working, we need to give it enough energy to create this much mass. So the binding energy is just exactly the mass defect expressed as energy using $E = mc^2$. For this case we have that the binding energy is $E_{b} = 0.030376587 u \times c^2 =4.527297829\times 10^{-12}J = 28.295611429 \ MeV$.  

A useful expression for $u$ is that $u = 931.4940954\ MeV/c^2$, so that $u\times c^2 = 931.4940954\ MeV$.

So what does it mean for a nucleus to have a larger binding energy than an $\alpha$ particle? Well, it means that we have to supply more energy to break it apart. Then that means that the mass defect has to be larger. Which means that when the nucleus is formed, it will emit a lot of energy (either as kinetic energy (photons) or as a particle if it has released enough energy to make one using $E = mc^2$).

:::{.question name="Question Set 1"}
1. The most common isotope of Uranium is $^{238}_{92}U$, and has an atomic mass of $238.050783u$. Calculate the mass defect, binding energy and the binding energy per nucleon.
2. Calculate the total binding energy and the binding energy per nucleon of $^{12}_{6}C$ . What percentage of the rest mass of this nucleus is its total binding energy.  
3. What is the maximum wavelength a $\gamma$-ray that could break a deuteron ($^2_1H^{+1}$) into a proton and neutron. This process is called photo-disintegration.
4. A photon with wavelength of $3.50\times 10^{-13}m$ strikes a deuteron $^2_1H^{+1}$, splitting it into a proton and neutron. Calculate the kinetic energy released in this interactions. Assuming that the particles share the kinetic energy equally, calculate their speeds.
:::


## Nuclear Fission

The situation above has always been that it requires energy to break apart a nucleus, and that is true for small nuclei. However, for large nuclei such as uranium energy is actually released when it breaks apart into two smaller pieces. How can we understand this fact using the knowledge we developed above. To give us an example to work with, it is known that $^{238}_{92}U$ decays spontaneously/randomly via $\alpha$ radiation to $^{234}_{90}Th$ and releases energy via a photon. If we compare the mass before an afterwards we have that $^{238}_{92}U$ has an atomic mass of $238.050788u$ and $^{234}_{90}Th$ has an atomic mass of $234.043601u$.

So the mass before is just that of the uranium nucleus: $238.050788u$. Afterwards we have a thorium nucleus and an alpha particle so the mass is: $234.043601u + 4.001506u = 238.04510u$. So we have that $\Delta m = m_{\text{before}} - m_{\text{after}} = 238.050788u - 238.045107u = 0.005681u$. So we have lost some mass, this must be converted into another form of energy, i.e. a photon for it to be carried away.

Lets have a look at the binding energy of this process. Uranium-238 has a binding energy of $(m_{\text{constituents}} - m_{\text{actual}})\times c^2$ which is:

$$
(\underbrace{(92\times 1.007 276 u}_{\text{protons}} + \underbrace{((238-92) \times 1.008 664 u)}_{\text{neutrons}} - 238.050788u)\times c^2 = 1.883548u \times c^2 = 1754.51384\ MeV
$$

Thorium-234 has a binding energy of:

$$
(\underbrace{(90\times 1.007 276 u}_{\text{protons}} + \underbrace{((234-90) \times 1.008 664 u)}_{\text{neutrons}} - 234.043601u)\times c^2 = 1.858855u \times c^2 = 1731.512457\ MeV
$$

and the $\alpha$ particle has a binding energy of:  $28.295 611 \ MeV$ from above.

So before we have a total binding energy of $1754.51384\ MeV$ and afterwards we have a total binding energy of $1731.512457\ MeV +28.295 611 \ MeV = 1759.808068 \ MeV$. So the total binding energy as gone up.

But we haven’t given the system any extra energy? How can we have more of an energy afterwards? This is the source of most of the confusion about binding energy.

The binding energy should always increase with a spontaneous nuclear process. This is because the binding energy is the amount of energy <u>**we**</u> as the experimenter would have to put in to the system to break apart the nuclei. <u>This is not an energy that the nuclei themselves have</u>, but the energy we would need to put in to split them up into their individual protons and neutrons. So a larger binding energy afterwards, means it would take more energy to break the nucleus’ apart, which means that the system is in a *more stable* state.  

:::{.question name="Question Set 2"}
1. Calculate the total energy released in the spontaneous $\alpha$ decay of Uranium-238 to Thorium-234 described in the text above.
2. Is the decay $n^0 \to p^+ + \beta^- + \bar{\nu}_e$ energetically possible? If it is not, explain why not. If it is, calculate the amount of energy released. Is the decay $p^+ \to n^0 + \beta^+ + \nu_e$ energetically possible, if not, explain why not. If it is calculate the total energy released.
3. The atomic mass of Carbon-14 is $14.003242u$, show that $\beta^-$ decay is energetically possible and calculate the energy released in the decay.
:::

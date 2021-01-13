# An introduction to Clifford geometry

## Basics

Our journey through the study of Clifford algebras will require us to know about three fields (in the algebra sense). Two of these are probably familiar and the third is something you may have heard of. These are the Real numbers, $\R$, the Complex numbers $\C$ and the third are the Quarternions $\H$. 

Let $\gamma^i$ denote the generators of a **type-$(p,q)$ Clifford algebra** $Cl(p,q)$. This means that we have the following relation between the generators
$$
\gamma^i \gamma^j + \gamma^j \gamma^i = 2 \eta^{ij} \label{eq:CliffordRelation}
$$
where 
$$
\eta = diag(\underbrace{+1,+1,\dots,+1}_{\text{p times}},\underbrace{-1,-1,\dots,-1}_{\text{q-times}}).
$$
Note that this presentation of the generators implicitly orders them so that the first $p$ generators square to $+1$, and the last $q$ generators square to $-1$. We can always arrange a product of generators so that it is of the form $\alpha \cdot \gamma^{i_1}\gamma^{i_2}\cdots\gamma^{i_m}$ so that $i_1<i_2<\dots <i_m$ by making use of the relation in equation$~\eqref{eq:CliffordRelation}$. We define two number associated to a Clifford algebra, the first is  $n = p+q$ which denotes the total number of generators, and the second is $s = q-p \text{ mod } 8$.  The structure of a Clifford algebra depends intimately to the number $s$.   

A useful object to study is the following ordered product of generators $P = \gamma^1 \gamma^2 \cdots \gamma^n$. This is of called the **volume element**, however If you are concerned with physical uses of Clifford algebras, this name is a little less than helpful. 

There is an associated inner product and quadratic form to the anti-commutator relation defined in equation $\eqref{eq:CliffordRelation}$ defined as follows

#### **Claim 1:** $P^2 = (-1)^{{1\over2}(q-p)(q-p+1)}$

*Proof:* A useful result to have is that $\gamma^{\mu_1}\gamma^{\mu_2}\cdots \gamma^{\mu_k} = (-1)^{{1\over2}k(k-1)}$ for a (p,q) type. 
Then as 
$$
P^2 = \gamma^1 \gamma^2 \dots \gamma^n \gamma^1 \gamma^2 \dots \gamma^n = (-1)^{{1\over2}n(n-1)}\gamma^n\gamma^{n-1}\cdots \gamma^1 \gamma^1 \gamma^2 \cdots \gamma^n = (-1)^{{1\over2}n(n-1)}(\gamma^1)^2 \cdots (\gamma^{n})^2 = (-1)^{{1\over2}n(n-1)}(+1)^p(-1)^q\\
= (-1)^{{1\over2}\big((p+q)(p+q-1)+ 2q\big)}.
$$
So using that 
$$
(p+q)(p+q-1)+ 2q =p^2 + 2pq + q^2 -p -q +2q=p^2 +q^2 + 2pq -p +q=(q-p)(q-p+1)+ 4pq
$$

$$
P^2 = (-1)^{{1\over2}(q-p)(q-p+1)}\cdot\underbrace{(-1)^{2pq}}_{=1 \text{ for all }p,q\in\N}\\
= (-1)^{{1\over2}(q-p)(q-p+1)}
$$

Note that $(-1)^{4\alpha} = 1$ for all integers $\alpha$ and $s = q-p \text{ mod }8$ means that $s = q-p + 8 \alpha$ for some integer $\alpha$, so that $q-p = s-8\alpha$. So we have that $(q-p)(q-p+1) = (s-8\alpha)(s-8\alpha+1) = s(s-8\alpha+1) - 8\alpha(s-8\alpha+1) = s(s-1) -8\alpha(2s-8\alpha+1)$. Note that $(-1)^{8\beta} = 1$ for any integers $\beta$. Thus
$$
P^2 = (-1)^{{1\over2}(q-p)(q-p+1)}=(-1)^{{1\over2}s(s+1)}
$$


##### Chirality Operator

A useful operator would be a non-identity operator that squares to $-1$. This would mean that the operator has eigenvalues of +1 and -1, these operators are often used in mathematics to split a structure into two parts according to the elements value with respects to this operator. One way to arrive an operator of this form is to sufficiently normalise the volume element by the square root of $(-1)^{{1\over2}s(s+1)}$. We call this operator the **chirality operator**.

The chirality operator for a $(p,q)$-Clifford module is defined to be 
$$
\gamma = i^{{1\over2}s(s+1)}\gamma^1 \cdots \gamma^n
$$




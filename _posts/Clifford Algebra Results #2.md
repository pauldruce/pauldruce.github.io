# Clifford Algebras

The construction of fuzzy spaces heavily relies on Clifford algebras, so a detailed account of the objects needed is presented here.

:::{.definition}
Given a vector space $V$ (over $\mathbb{F} = \mathbb{R},\mathbb{C}$) and a quadratic form, $Q$ on $V$. The *Clifford Algebra* $\text{Cl}(V,Q)$ is defined as the algebra generated (over $\mathbb{F}$) by the vectors $v\in V $ and the multiplicative unit $1_F$ such that:
$$v \cdot v= v^2 = -  Q(v) 1_F$$
:::
In this note, Clifford algebras are defined over $\mathbb{R}$ or $\mathbb{C}$ however, much of what follows is valid when the field has characteristic not equal to two. A Clifford algebra can also be defined by taking a bilinear form, $B$, instead of a quadratic form and defining the quadratic form by: $Q(v) = B(v,v)$. One can also construct a bilinear form from a quadratic form via *polarisation*: $B(u,v) = \frac{1}{2}\left( Q(u+v) - Q(u) - Q(v) \right)$. Using this polarisation it can be shown for $u,v \in V$ that:
$$
u v + v u = -2 B(u,v)
$$
If $\{e_i\}$ is an orthonormal basis for the vector space $V$ with respects to the bilinear form $B$ then they satisfy:
$$
e_i  e_j + e_j  e_i = -2 B_{ij}
$$
Let $\eta$ be a non-degenerate diagonal matrix of $\pm 1$s, with $p$ occurrences of +1 and $q$ occurrences of $-1$. The matrix is said to be of type $(p,q)$ and the total dimension is given by $n= p+q$.  A real Clifford algebra is then defined over $V = \mathbb{R}^n$ by:
$$
e_i e_j + e_j e_i = 2 \eta_{ij}
$$
For a given $(p,q)$ matrix $\eta$ let $Cl(p,q)$ denote the Clifford algebra over $\mathbb{R}^n$.

The low dimensional Clifford algebras are presented here. From these examples the higher dimensional Clifford algebras can be constructed~@[LawsonJr1989].

**Example**

- <u>Type $(0,0)$:</u> There are have no generators, so there is only the identity element to generate. So the space is isomorphic to $\mathbb{R}$

- <u>Type $(0,1)$:</u> There is one generator, $e$ that satisfies $e^2 = -1$, so a general element is of the form $a+ be$, which is isomorphic to $\mathbb{C}$ under the map $a+be \mapsto a+ bi$.

- Type <u>$(0,2)$:</u> There are have two generators $e_1,e_2$ that both square to $-1$ which anti-commute, $e_1e_2 = -e_2 e_1$. The product is not linearly decomposable in terms of $1,e_1,e_2$, in fact if we define $e_{ij} = \frac{1}{2} e_ie_j -e_j e_i  = \frac{1}{2} [e_i,e_j]$, then we see that $e_ie_j = e_{ij} + \eta_{ij}$. So an arbitrary element consists of $a + b e_1 + ce_2 + d e_{12}$. This space is isomorphic to the quaternions $\mathbb{H}$, sending $(e_1,e_2,e_1e_2)\mapsto (i,j,k)$. In the complex matrix representation of $\mathbb{H}$ we have that
  $$
  (e_1,e_2,e_1e_2) \mapsto (\begin{pmatrix}	 i& 0 \\ 0 & -i	\end{pmatrix}, \begin{pmatrix} 0 & 1 \\  -1&0\end{pmatrix}, \begin{pmatrix}0 & i \\ i & 0\end{pmatrix})
  $$

- <u>Type $(1,0)$:</u> This is generated by $e$, such that $e^2 = 1$. So we have that an element has the form $a+ b e$, which has product
$$
(a+be)\cdot (a+be) = 2 \eta (a+be, a+be)\\
    	= 2\eta(a,a) + 2\eta(a,be) + 2\eta(be,a) + 2 \eta(be,be) \\
  	= 2\eta(a,a) + 2 \eta(be,be) = (a\cdot a) + (be\cdot be)
$$
So we have that $Cl(1,0)$ is isomorphic to $\mathbb{R} \oplus \mathbb{R}$.

- <u>Type $(2,0)$</u> We have $e_1,e_2$ such that $e_i^2 = 1$ and $e_1 e_2 = - e_2 e_1$. So an arbitrary element is of the form $a + b e_1 + c e_2 + d e_1 e_2$. Given the following algebra-isomorphism
    $$(e_1,e_2,e_1 e_2)\mapsto (\begin{pmatrix}	 1& 0 \\ 0 & -1	\end{pmatrix}, \begin{pmatrix} 0 & 1 \\  1&0\end{pmatrix}, \begin{pmatrix}0 & 1 \\ -1 & 0\end{pmatrix})$$
      		we have that $Cl(2,0) \cong M_2(\R)$

- <u>Type $(1,1)$:</u> We have $e_1,e_2$ such that $e_1^2 = 1$ and $e_2^2 =-1$ and again $e_1 e_2  = -e_2 e_1$ so the general form of an element again is $a + be_1 +ce_2 + d e_1e_2$ and under the following algebra-isomorphism
$$(e_1,e_2,e_1e_2) \mapsto (\begin{pmatrix}1 &0 \\ 0 & -1 \end{pmatrix},\begin{pmatrix}0 &1 \\ -1 & 0 \end{pmatrix},\begin{pmatrix}0 &1 \\ 1 & 0 \end{pmatrix})$$
    	So we have that $Cl(1,1) \cong M_2(\mathbb{R})$ just like $Cl(2,0)$.

It turns out that the following classification for Clifford algebras exists:
\begin{theorem}
The Clifford algebra $Cl(p,q)$ is of the form $M_{2^m}(\mathbb{F})$ or $M_{2^m}(\mathbb{F}) \oplus M_{2^m}(\mathbb{F})$  where $\mathbb{F} = \R,\C$ or $\mathbb{H}$ and $m$ is such that $n=p+q = 2m$ or $n=p+q = 2m+1$. Specifically the classification follows Table~\ref{tab:cliffalg} where $s=p-q$ mod $8$.
\end{theorem}
\begin{table}[!ht]
\centering
\begin{tabular}{ |l c | l c|}
\hline
 $s$ & $Cl(p,q)$ &$s$ & $Cl(p,q)$\\
 \hline\hline
 0 & $M_{2^{n/2}}(\R)$ &4 & $M_{2^{(n-2)/2}}(\mathbb{H})$\\
 1 &$M_{2^{(n-1)/2}}(\C)$ &5 & $M_{2^{(n-1)/2}}(\C)$ \\
 2 & $M_{2^{(n-2)/2}}(\mathbb{H})$&6 & $M_{2^{n/2}}(\R)$\\
 3 & $M_{2^{(n-3)/2}}(\mathbb{H}) \oplus M_{2^{(n-3)/2}}(\mathbb{H})$ &7 & $M_{2^{(n-1)/2}}(\R)\oplus M_{2^{(n-1)/2}}(\R)$ \\
\hline
\end{tabular}
\caption{Classification of real Clifford algebras.}
\label{tab:cliffalg}

\end{table}

\begin{proof}
	See Lawson~\cite[Chp. 1, §4]{LawsonJr1989}.
\end{proof}
Note that the Clifford algebras are direct sums of matrix algebras. This fact is useful when considering representations of Clifford algebras below.
Another useful fact about Clifford algebras is the following.
\begin{prop}
	Given a $(p,q)$ Clifford algebra, the generators, $\{e_i\}$, and the identity generate a multiplicative finite group.
\end{prop}
\begin{proof} Assuming there are $n$ of the $e_i$'s form the set
\begin{equation}G = \{\mathbb{I} , e_i, e_{i_1}e_{i_2}, e_{i_1} e_{i_2} e_{i_3}, \dots, e_{i_1} \cdots e_{i_n} \}.\end{equation}
The indices ordered so that $i_1<i_2< \dots < i_n$. It will be shown that $\pm G$ forms a group with respect to  multiplication. Start with $e_i
e_{j_1}e_{j_2}\cdots e_{j_m}$ and examine the following cases. Either $i = j_k$ for some $k$, in which case the relation $e_i e_j+ e_j e_i = 2\eta ^{ij}$ can be used to anti-commute the $e_i$ through until it meets it's pair, with which it then becomes either $+1$ or $-1$. This will yield an entry of $\pm G$ with one fewer gamma. If $e_i$ does not appear in the element $e_{j_1}\cdots e_{j_m}$, then it can anti-commuted through until the correct ordering is achieved and it therefore lies in $\pm G$. Then any product of elements can be broken down iteratively through this process. The set is clearly finite with
\begin{equation}
2\cdot \sum\limits_{k=0}^n \begin{pmatrix}n\\k\end{pmatrix} = 2\cdot2^{n}= 2^{n+1}\end{equation} elements. \end{proof}

\subsection{Clifford Modules} \label{sec:cliffordmodules}
Clifford modules can now be examined, as these will be a necessary component in the definition of fuzzy spaces.
\begin{definition}\label{def:CliffModule}
	A \emph{$(p,q)$-Clifford module} for a $(p,q)$ Clifford algebra over the field $\mathbb{F}$ is a pair $(c, V)$. Where $V$ is a finite dimensional vector space over either $\mathbb{F}$ or a field containing $\mathbb{F}$, and $c: Cl(p,q) \to Hom_{\mathbb{F}}(V,V)=End_{\mathbb{F}}(V)$ is an algebra homomorphism. $V$ is said to be a $Cl(p,q)$-module for short.
\end{definition}
The map $c$ is often suppressed and the notation $c(\psi) v = \psi\cdot v$ for $v\in V$ and $\psi \in Cl(p,q)$ is used when there is no confusion. This is also called \emph{clifford multiplication}.  
Also note that a representation of a Clifford algebras is exactly a module for it. It is more common to refer to a real or complex \emph{representations of a Clifford algebra} to specify what field the vector space is over.
%However it is rarely referred to as a real module or a complex module in the literature for some reason.


\begin{definition}
	A module $(c,V)$ of a $(p,q)$ Clifford algebra is \emph{reducible} if the vector space $V$ can be written as non-trivial direct sum: $W = W_1 \oplus W_2$ such that $c(\psi)(W_j)\subseteq W_j$ for every $\psi\in Cl(p,q)$. In such cases the following notation is adopted $c = c_1\oplus c_2$ likewise.
	A module is called \emph{irreducible} if it is not reducible.
\end{definition}
Due to the finite dimensionality of the Clifford modules, the following proposition holds:
\begin{prop}[\cite{LawsonJr1989}]
	Every representation of a Clifford algebra can be decomposed into a direct sum of irreducible representations.
\end{prop}

The following statement along with Table~\ref{tab:cliffalg} allows one to easily select the irreducible representations for the Clifford algebras.
\begin{theorem}
The natural representation of $M_{n}(\mathbb{F})$ as operators on $\mathbb{F}^n$ is, upto equivalence, the only irreducible representation.
The algebra $M_n(\mathbb{F}) \oplus M_n(\mathbb{F})$ has two inequivalent representations given by $\rho_1(m_1,m_2) = \rho(m_1)$ and $\rho_2(m_1,m_2) =\rho(m_2)$ where $\rho$ is the representation of $M_n(\mathbb{F})$.
\end{theorem}
\begin{proof}
See \cite[p. 32]{LawsonJr1989} or  \cite[p.653 Thm 4.3 and 4.4]{lang2002}, realising that matrix algebras are simple, so in either case we are dealing with a semisimple algebra.
\end{proof}

So the module is taken to be $(c,V=\C^k)$ with $k = 2^{n/2}$ for $n$ even and $k=2^{(n-1)/2}$ for $n$ odd.
Note for odd values of $n$ there are two inequivalent irreducible representations.
Let $\C^k$ be equipped with the inner product $(v,w) = \overline{v}\cdot w = \sum_i \overline{v}^i w^i$.
Let $c(e_i) = \gamma^i$ and $c(1_{Cl(p,q)}) = \mathbb{I}_{k}$ the $k\times k$ identity matrix. Note a unitary representation of a finite group can always be taken~\cite{steinberg2011}. As a result, all of the $\gamma^i$ are unitary.
Using the standard fact that
\begin{equation}
(\gamma^i v, w) = \overline{(\gamma^i)_{ab}v^b} w_a = \overline{v^b} \overline{(\gamma^i)_{ab}}w_a = \overline{v_b} \overline{(\gamma^{i})^T_{ba}}w_a = (v,(\gamma^i)^* w),
\end{equation}
if $(\gamma^i)^2 = 1$, then
\begin{equation}
    (\gamma^i v, \gamma^i w) = (v,w) = (u,(\gamma^i)^2w) = ((\gamma^i)^*v, \gamma^i w).
\end{equation}
Consequently $((\gamma^i)^* - \gamma^i) v, \gamma^i w) = 0$ for all $v,w \in \C^k$.
Thus $(\gamma^i)^* = \gamma^i$, i.e~it is Hermitian.
Similarity if $(\gamma^i)^2 = -1$, then $(\gamma^i)^* = - \gamma^i$, i.e.~it is anti-Hermitian.

The chirality operator and the real structure for Clifford modules are defined, and will be used to construct the corresponding operators in the spectral triple.

\begin{definition}
	The chirality operator for a $(p,q)$ Clifford module is given by the ordered product
	\begin{equation}\widetilde{\gamma} = i^{s(s+1)/2} \gamma^1 \cdots \gamma^n\end{equation}
\end{definition}
A useful fact for later is that when $n$ is even (and so $s$ even) $\widetilde{\gamma}$ anti-commutes with each $\gamma^i$ and when $n$ (and therefore $s$) is odd it commutes with each $\gamma^i$.
\begin{definition}
	A real structure for a Clifford module is an anti-linear operator $C:V \to V$ such that $(Cv,Cw)=(w,v)$, $C^2 = \epsilon \mathbb{I}$ and $C\gamma^a = \epsilon^\prime \gamma^a C$ for all $\gamma^a$. When the chirality operator $\gamma$ exists it is required that $C \widetilde{\gamma} = \epsilon^{\prime\prime} \widetilde{\gamma} C$, where $\epsilon$ and $\epsilon^\prime$ are taken from \ref{tab:epsilonValues}.
\end{definition}

\subsubsection{Low dimensional examples of Clifford modules and inductively constructing higher dimensional examples}
The following examples are all that is needed to build any other Clifford module. The procedure of how to do this is outlined below.
\begin{example}
	\begin{itemize}
		\item \underline{Type $(0,0)$}: $s=0$, $V=\C$, $Cv = \overline{v}$, the chirality is $\widetilde{\gamma} = 1$
		\item \underline{Type $(1,0)$}: $s=7$, $V = \C$, and we have that $\gamma^1 = e$ as in Example \ref{example:matrixgeom}, with $\widetilde{\gamma} = e$ also. $Cv = \overline{v}$  
		\item \underline{Type $(0,1)$}: $s = 1$, $V = \C$, $\gamma^1 = \pm i$ with $\widetilde{\gamma} = \pm 1$. Either choice is equivalent and $Cv = \overline{v}$.
		\item \underline{Type $(0,2)$}: $s=2$, $V = \C^{2}$, $\gamma^1 = \begin{pmatrix} i & 0 \\ 0& -i\end{pmatrix}$,$\gamma^2= \begin{pmatrix}	0 & 1 \\ -1 & 0\end{pmatrix}$, with $\widetilde{\gamma} = i \gamma^1 \gamma^2 = \begin{pmatrix}	0& 1 \\ 1 &0	\end{pmatrix}$. We find that $C \begin{pmatrix} v_1\\v_2	\end{pmatrix} = \begin{pmatrix}\overline{v}_2 \\ - \overline{v}_1\end{pmatrix}$, by checking the conditions for $C$ against the gammas defined here.
		\item \underline{Type $(1,1)$}: $s=0$, $V = \C^2$, $\gamma^1 =\begin{pmatrix}1 & 0 \\ 0 & -1\end{pmatrix}$, $\gamma^2 = \begin{pmatrix} 0 & 1\\ -1 & 0\end{pmatrix}$, with $\widetilde{\gamma} = \gamma^1 \gamma^2 = \begin{pmatrix}0 & 1 \\ 1 &0 \end{pmatrix}$. We find that $C\begin{pmatrix}v_1\\v_2 \end{pmatrix} = \begin{pmatrix} \overline{v}_1 \\ \overline{v}_2\end{pmatrix}$.
		\item \underline{Type $(2,0)$}: $s=6$, $\gamma^1 = \begin{pmatrix} 1 & 0\\ 0 & -1\end{pmatrix}$, $\gamma^2 = \begin{pmatrix} 0 & 1 \\1 &0 \end{pmatrix}$ with $\widetilde{\gamma} = i \gamma^1 \gamma^2 = \begin{pmatrix} 0 & i \\ -i &0\end{pmatrix}$. We find that $C\begin{pmatrix}v_1 \\ v_2\end{pmatrix} = \begin{pmatrix}\overline{v}_1 \\ \overline{v}_2\end{pmatrix}$.
	\end{itemize}
	\label{ex:cliffmodules}
\end{example}

The aim is to take two Clifford modules and product them together in a way to arrive at another Clifford module. This procedure has to be split into two streams, one when at least one of the Clifford modules is of even type ($s=q-p$ mod $8$ is even) and the cases when neither of them are even.

\noindent\underline{Even Case}:\\
Given a $(p_1,q_1)$-Clifford module $M(p_1,q_1)$ where $s_1 = q_1 - p_1$ mod $8$ is even with chirality operators $\widetilde{\gamma}_1$, and another Clifford module $M(p_2,q_2)$ of any type, then the product Clifford module $M(p_1+p_2, q_1+q_2)$ is formed by generating it with the following elements:
\begin{equation}\gamma_1^1 \otimes 1, \gamma^2_1\otimes, \dots, \gamma_1^{n_1}\otimes 1, \widetilde{\gamma}_1\otimes \gamma_2^1, \widetilde{\gamma}_1 \otimes \gamma_2^2 , \dots, \widetilde{\gamma}_1\otimes \gamma_2^{n_2}\end{equation}  These objects act on the space $V_1 \otimes V_2$.
Note that $s = ((q_1+q_2) - (p_1+p_2))$ mod $8 = (s_1+s_2)$ mod $8$ and so $s$ is even if $s_2$ is even and odd otherwise and similarly $n = (n_1+n_2)$ mod $8$ and is even if $n_2$ (equivalently $s_2$ is even), otherwise it is odd.
% The point of this comment is to be used when showing irreducibility. Because we *should*  have shown that irreps are on to $\C^k$ with k = n/2 when n is even or (n-1)/2 when n is odd.
%\begin{prop}
%This module is irreducible if $V_1$ and $V_2$ are. 	
%\end{prop}
% TODO Show this! This is a key results check Spin geometry for hints or exercises. Ask John.

The Hermitian inner product on the module is defined to be given by:
\begin{align}
	(v_1\otimes w_1, v_2\otimes w_2) = (v_1,v_2)(w_1,w_2)
\end{align}
 he chirality operator for the new Clifford module can now be determined:
  \begin{align}
  \widetilde{\gamma} &= i^{s(s+1)/2}(\gamma_1^1\otimes 1)(\gamma_1^2\otimes 1)\cdots (\gamma_1^{n_1}\otimes 1)(\widetilde{\gamma}_1\otimes \gamma_2^1)\cdots(\widetilde{\gamma}_1\otimes \gamma_2^{n_2})\\
  &= i^{s(s+1)/2} \underbrace{\gamma_1^1\gamma_1^2 \cdots \gamma_1^{n_1}}_{=i^{-s_1(s_1+1)/2}\widetilde{\gamma}_1} (\widetilde{\gamma}_1)^{n_2}\otimes \underbrace{\gamma_2^1 \cdots \gamma_2^{n_2}}_{= i^{-s_2(s_2+1)/2}\widetilde{\gamma}_2}\\
  &= i^{(s(s+1) -s_1(s_1+1) -s_2(s_2+1))/2} (\widetilde{\gamma}_1)^{n_2+1}\otimes \widetilde{\gamma}_2.
  \end{align}
 Note that $s = (s_1+s_2)$ mod $8$ and so $s = s_1 + s_2 - 8\alpha$ for some integer $\alpha$. So \begin{align}
 s(s+1) &= (s_1+s_2-8\alpha)(s_1+s_2 - 8\alpha +1)\\ &= (s_1+s_2)(s_1+s_2+1) -2\cdot 8\alpha(s_1+s_2+1) + 8^2\alpha^2\\
 &= (s_1+s_2)(s_1+s_2+1) + 8\cdot (8\alpha^2 - 2\alpha(s_1+s_2+1))\\
 &= s_1(s_1+1) + 2s_1s_2 + s_2(s_2+1) + 8 \cdot (8\alpha^2 - 2\alpha (s_1+s_2+1))
 \end{align}
 Consider now
 \begin{align}
 	s(s+1)-s_1(s_1+1) - s_2(s_2+1)  = 2\cdot s_1s_2 + 8\cdot(8 \alpha^2 - 2\alpha (s_1+s_2+1))
 \end{align}
 Which results in:
 \begin{align}
 	(s(s+1)-s_1(s_1+1) - s_2(s_2+1))/2 = s_1s_2 + 4 \cdot (8 \alpha^2 - 2\alpha (s_1+s_2+1))
 \end{align}
 As $i^{4\delta}=1$ for any integer $\delta$: $i^{(s(s+1)-s_1(s_1+1) - s_2(s_2+1))/2} = i^{s_1s_2}$.
 The cases are then split into when $s_2$ is even and odd.

\noindent\underline{Even $s_2$ }\\
As both $s_1$ and $s_2$ are even $s_1s_2 = 4u$ for some integer $u$, then $i^{s_1s_2}=1$ also. Yielding
 \begin{align}
 	\widetilde{\gamma}&= (\widetilde{\gamma}_1)^{n_2+1} \otimes \widetilde{\gamma}_2
 \end{align}
 Recall that $\gamma_1^2=1$ and as $n_2$ is even $(\widetilde{\gamma}_1)^{n_2} =((\widetilde{\gamma}_1)^2)^{n_2/2}= 1$. Yielding the following for the chirality operator for even $s_2$:
 \begin{align}
 	\widetilde{\gamma} = \widetilde{\gamma}_1\otimes \widetilde{\gamma}_2
 \end{align}

\noindent\underline{Odd $s_2$}\\
If $s_2$ is odd then $n_2$ is odd and so $n_2 +1 $ is even and so $\widetilde{\gamma}_1^{n_2+1} = 1$.
Also note that as $s_1$ is even, so is $s_1s_2$. The problem is then split into the cases when $s_1$ is a multiple of 4 and when its just a multiple of 2.
If $s_1 = 0,4$, then $s_1s_2 = 0, 4s_2$ and $i^{s_1s_2} = i^0$ or $i^{4s_2}$ and so is equal to $1$.
When $s_1 = 2,6$ then $i^{s_1s_2} = (-1)^{s_2}$ or $(-1)^{3*s_2}$, but $s_2$ is odd and so is $3s_2$ so $i^{s_1s_2} = (-1)$.
Notice that for $s_1=0,4$ then $\epsilon^{\prime\prime} = 1$ and for $s_1 = 2,6$ then $\epsilon^{\prime\prime} = -1$.

  So a concisely way to write the formula for the new chirality operator is the following:
 \begin{align}
 	\widetilde{\gamma} = \begin{cases}
 		\widetilde{\gamma}_1 \otimes \widetilde{\gamma}_2 \quad s_2 \text{ even}\\
 		\epsilon^{\prime\prime}_1 \otimes \widetilde{\gamma}_2 \quad s_2 \text{ odd}.
 	\end{cases}
 \end{align}  

The real structure now needs to be determined for this new Clifford module.
Given that $C_1,C_2$ are the real structures on $M(p_1,q_1)$ and $M(p_2,q_2)$ respectively, one can check that the following defines a real structure for the product module $M(p_1+p_2,q_1+q_2)$.
\begin{align}
	C = \begin{cases}
		C_1\otimes C_2  & s_2 \text{ even, } \epsilon^{\prime\prime}_1 = 1\\
		C_1\otimes C_2\widetilde{\gamma}_2 &s_2 \text{ even, } \epsilon^{\prime\prime}_1 = -1\\
		C_1\otimes C_2 &s_2 \text{ odd, } \epsilon^{\prime} = 1\\
		C_1\widetilde{\gamma}_1\otimes C_2  &s_2 \text{ odd, } \epsilon^{\prime} = -1.\\
	\end{cases}
\end{align}

Thus any Clifford module $M(p,q)$ can be constructed by taking products of $M(0,2)$ and $M(2,0)$ and then product with either $M(1,0)$ or $M(0,1)$ on the right, to achieve any $(p,q)$-type.

Two constructions for the fuzzy sphere are presented later, one via a $M(0,3)$ Clifford module and one via a $M(1,3)$ Clifford module.
In order to relate them to each other, the following construction between the product of two odd Clifford modules will be useful, as it will allow $M(1,3)$ to be written as the product of $ M(1,0)\cdot M(0,3)$.

\noindent\underline{Odd Case}:\\
This product is defined via a trick. First pick a Clifford module $M(p_1+1,q_1)$ from which we can identify $M(p_1,q_1)$ by ignoring the extra generator $t$ (where $t^2 = 1$). The complete list of generators for $M(p_1+1,q_1)$ is then
\begin{equation}
    t,\gamma_1^1,\gamma_1^2,\dots,\gamma_1^n.
\end{equation}
The chirality operator, $\Gamma$, for $M(p_1+1,q_1)$ is then given by the usual definition.
To proceed, define the product $M(p_1+p_2+1,q_1+q_2) = M(p_1+1,q_1)\cdot M(p_2,q_2)$ as defined above for the even cases.
The module $M(p_1+p_2,q_1+q_2)$ can be defined from $M(p_1+p_2+1,q_1+q_2+1)$ by ignoring the generator $t\otimes 1$.
Thus for $M(p_1+p_2,q_1+q_2)$ the generators are the following:
\begin{align}
	\gamma_1^1\otimes 1, \dots, \gamma_1^{n_1}\otimes 1, \Gamma \otimes \gamma_2^1, \dots , \Gamma\otimes \gamma_2^{n_2}
\end{align}
Note that $\Gamma$ still has the generator $t$ in it.
This procedure is best understood via an example:
\begin{example}
The product between $M(1,0)$ and another odd Clifford module $M(p,q)$ is given by identifying $M(1,0)$ with the restriction of $M(2,0)$, given by the representation in example~\ref{ex:cliffmodules}.
Setting $t=\begin{pmatrix}1 & 0 \\ 0 & -1\end{pmatrix}$ and recalling that $\Gamma = \begin{pmatrix}0 & i \\ -i &0\end{pmatrix}$ so that the new module $M(p+1,q)$ is generated by
\begin{equation}
	\begin{pmatrix}
		0 & 1 \\1 &0
	\end{pmatrix} \otimes 1_{(n_2-1)/2} = \begin{pmatrix}0 & 1_{(n_2-1)/2} \\ 1_{(n_2-1)/2}\end{pmatrix}, \qquad \Gamma \otimes \gamma_2^i = \begin{pmatrix}
		0 &i \gamma_2^i \\ -i\gamma_2^i &0
	\end{pmatrix}.
\end{equation}
The chirality operator is then given by
\begin{equation}
\widetilde{\gamma} = i^{s(s+1)}\begin{pmatrix}
	0 & 1 \\ 1 &0
\end{pmatrix} \Gamma^{n_2} \otimes \gamma_2^1 \cdots \gamma_2^{n_2}.
\end{equation}
Note that $\Gamma^2 = 1$ as it is a chirality operator for a $(2,0)$-Clifford module, and so $\Gamma^{n_2} = \Gamma$ as $n_2$ is odd.
Yielding
\begin{equation}
	\widetilde{\gamma} = i^{s(s+1)/2} i^{-s_2(s_2+1)/2} (-i)  \begin{pmatrix}
		\widetilde{\gamma}_2 & 0 \\ 0 & -\widetilde{\gamma}_2
	\end{pmatrix}
\end{equation}
Writing $s = s_1 +s_2 - 8\cdot \alpha = 7+ s_2  - 8\cdot\alpha$ it is found that $s(s+1) - s_2(s_2+1) = s_1(s_1+1) + 2s_1s_2 - 8\cdot \delta = 56 + 14s_1 - 8\cdot \delta$. Recall that $i^4 = 1$ so that $i^{s(s+1)/2} i^{-s_2(s_2+1)/2} = i^{28+7s_2} = i^{7s_2} = (-i)^{s_2}$. Combining this above, it is found that
\begin{equation}
	\widetilde{\gamma} = (- i)^{s_2+1} \begin{pmatrix}
		\widetilde{\gamma}_2 & 0 \\ 0 &-\widetilde{\gamma}_2
	\end{pmatrix}
\end{equation}
Considering all possibilities for $s_2$ and using that $s_1 = 7$ it is found that $(-i)^{s_2+1} = -\epsilon^{\prime\prime}$ so that:
\begin{equation}
	\widetilde{\gamma} = -\epsilon^{\prime\prime} \begin{pmatrix}
		\widetilde{\gamma}_2 & 0 \\ 0 & - \widetilde{\gamma}_2
	\end{pmatrix}
\end{equation}
\end{example}

The real structure then takes the following form:
\begin{equation}
	C = \begin{cases}
		\widetilde{C}_1 \otimes C_2 \qquad \epsilon^{\prime\prime} = 1 \\
		\widetilde{C}_1\gamma_1 \otimes C_2\gamma_2 \qquad \epsilon^{\prime\prime} = -1
	\end{cases}
\end{equation}

Now comes the key definition of this thesis:
\begin{definition}
	A type $(p,q)$ matrix geometry is a finite real spectral triple $(s,\H,\A,\Gamma,J,D)$ formed by the following product of a $(p,q)$-Clifford module and a type $(0,0)$ matrix geometry.
	\begin{itemize}
		\item $s = q-p$ mod $8$
		\item $\A = \A_0$
		\item $\H = V\otimes \H_0$ with inner product $\langle v\otimes m, v^\prime \otimes m^\prime\rangle = (v,v^\prime) \langle m,m \rangle$
		\item $\rho(a) (v\otimes m) = v \otimes \rho_0(a)m$
		\item $\Gamma = \widetilde{\gamma} \otimes 1$
		\item $J = C\otimes J_0$
		\item $D$ is any operator allowed by the axioms of a finite real spectral triple
	\end{itemize}
	The Clifford module is required to be irreducible if $s$ is even and the eigenspaces of the chirality operator $\widetilde{\gamma}$, $V_\pm \subset V$ to be irreducible if $s$ is odd.
\end{definition}
An investigation into what form $D$ can take is outlined for the above setup.

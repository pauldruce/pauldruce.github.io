# Jupyter notebook to create images used in implicit differentiation page

import numpy as np
import sympy as sp
import matplotlib.pyplot as plt
import sys

print(sys.path)
x = sp.symbols('x')
y = sp.symbols('y')


# Find all the points $(x,y)$ on the graph $(x^2+y^2)^2 = 2x^2 - 2y^2$ where $y’ = 0$.
p = sp.plot_implicit(sp.Eq((x**2 + y**2)**2, 2 * x**2 - 2 * y**2), (x, -2, 2), (y, -2, 2))
project_path = "assets/2020/implicit-differentiation"
p.save(project_path + "/Q-infinity.jpg")

x**(1 / 2)
# Find the points $(x,y)$ on the the graph $x^{2/3} + y^{2/3} = 8$ ...
p2 = sp.plot_implicit(sp.Eq(x**(2 / 3) + y**(2 / 3), 8), (x, -20, 20), (y, -20, 20))
p2.save(project_path + "/Q-diamond.jpg")


# 3x^2 + 2xy^3 + 16 =0

p3 = sp.plot_implicit(sp.Eq(3 * x**2 + 2 * x * y**3 + 16, 0), (x, -4, 4), (y, -4, 4))
p3.save(project_path + "/Q-3x2-2xy3.jpg")

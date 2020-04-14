from mpl_toolkits.basemap import Basemap
import ephem
import numpy as np
import matplotlib.pyplot as plt
import sys


mars = ephem.Mars('1970')
print(mars)

fig = plt.figure(figsize=(12,12))
m = Basemap(
    projection='mill',
    llcrnrlat = -90,
    urcrnrlat = 90,
    llcrnrlon = -360,
    urcrnrlon = 360,
    resolution = 'c'
)

m.drawparallels(np.arange(-90, 90, 10), labels=[True, False, False, False])
m.drawmeridians(np.arange(-360, 360, 60), labels=[0, 0, 0, 1])

# plt.show()
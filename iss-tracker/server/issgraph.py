from mpl_toolkits.basemap import Basemap
import matplotlib.pyplot as plt
import numpy as np
import sys


# print("Arg1: " + sys)

lat = sys.argv[1]
lon = sys.argv[2]
fig = plt.figure(figsize=(12,9))
m = Basemap(projection='mill',
            llcrnrlat = -90,
            urcrnrlat = 90,
            llcrnrlon = -180,
            urcrnrlon = 180,
            resolution = 'c')

m.drawcoastlines()

m.drawparallels(np.arange(-90, 90, 10),labels=[True, False, False, False])
m.drawmeridians(np.arange(-180, 180, 30),labels=[0,0,0,1])

# m.scatter(-51, 26, latlon=True)
m.scatter(int(lat), int(lon), latlon=True)

plt.title('ISS Tracker', fontsize=20)

# plt.show()
plt.savefig('/Users/admin/ISS-tracker/iss-tracker/public/graphs/issplot.png')

# print(plt.show())
# sys.stdout.flush()
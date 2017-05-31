"""
setup module for ihiji_schemas
"""

from os.path import dirname, join, realpath
from setuptools import setup, find_packages


NAME = 'potato_wedding'
URL = 'https://github.com/mplanchard/wedding'
AUTHOR = 'Madison Hicks & Matthew Planchard'
EMAIL = 'msplanchard@gmail.com'

SHORT_DESC = 'python package to serve our wedding server'
LONG_DESC = SHORT_DESC
KEYWORDS = [
    'flask', 'react', 'website', 'personal'
]

PACKAGE_DEPENDENCIES = []
SETUP_DEPENDENCIES = []
TEST_DEPENDENCIES = []
EXTRAS_DEPENDENCIES = {}

ENTRY_POINTS = {}

with open('requirements.txt') as reqfile:
    for ln in reqfile:
        if not ln.startswith('#'):
            PACKAGE_DEPENDENCIES.append(ln.strip())

# See https://pypi.python.org/pypi?%3Aaction=list_classifiers for all
# available setup classifiers
CLASSIFIERS = [
    'Development Status :: 3 - Alpha',
    # 'Development Status :: 5 - Production/Stable',
    'Environment :: Web Environment',
    'Intended Audience :: Developers'
    # 'License :: Other/Proprietary License',
    # 'License :: OSI Approved :: GNU General Public License v3 (GPLv3)',
    'License :: OSI Approved :: MIT License',
    'Natural Language :: English',
    'Operating System :: POSIX :: Linux',
    'Programming Language :: Python',
    'Programming Language :: Python :: 3 :: Only',
    'Programming Language :: Python :: 3.6'
]


__version__ = '0.0.0'

cwd = dirname(realpath(__file__))

with open(join(cwd, '{0}/version.py'.format(NAME))) as version_file:
    for line in version_file:
        # This will populate the __version__ and __version_info__ variables
        if line.startswith('__'):
            exec(line)

setup(
    name=NAME,
    version=__version__,
    description=SHORT_DESC,
    long_description=LONG_DESC,
    url=URL,
    author=AUTHOR,
    author_email=EMAIL,
    classifiers=CLASSIFIERS,
    keywords=KEYWORDS,
    packages=find_packages(exclude=['*.tests', '*.tests.*']),
    install_requires=PACKAGE_DEPENDENCIES,
    setup_requires=SETUP_DEPENDENCIES,
    tests_require=TEST_DEPENDENCIES,
    extras_require=EXTRAS_DEPENDENCIES,
)

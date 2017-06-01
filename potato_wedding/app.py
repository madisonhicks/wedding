"""
primary module containing root app logic
"""

from logging import getLogger
from os import path

from flask import Flask


TEMPLATE_DIR = path.join(path.dirname(__file__), '../potato_client')
STATIC_DIR = path.join(TEMPLATE_DIR, 'static')


def create_app() -> Flask:
    """returns a flask app
    
    :return: 
    """
    app = Flask(
        'potato_wedding',
        static_folder=STATIC_DIR,
        template_folder=TEMPLATE_DIR,
    )
    return app

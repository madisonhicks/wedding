"""
primary module containing root app logic
"""

from logging import getLogger
from os import path

from flask import Flask


STATIC_DIR = path.join(path.dirname(__file__), '../static')


def create_app() -> Flask:
    """returns a flask app
    
    :return: 
    """
    app = Flask(
        'potato_wedding',
        static_path=STATIC_DIR,
        template_folder=STATIC_DIR,
    )
    return app

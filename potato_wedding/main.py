"""
main file for application interaction
"""

from flask import render_template

from potato_wedding.app import create_app


application = create_app()


@application.route('/', defaults={'path': ''})
@application.route('/<path:path>')
def index(path) -> str:
    """index view for flask app
    
    :return: the HTML for the index
    """
    return render_template('index.html')


if __name__ == '__main__':
    # import ipdb; ipdb.set_trace()
    application.run(debug=True)


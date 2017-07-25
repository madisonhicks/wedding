"""
main file for application interaction
"""

from flask import render_template

from potato_wedding.app import create_app


application = create_app()


@application.route('/')
def index() -> str:
    """index view for flask app
    
    :return: the HTML for the index
    """
    return render_template('index.html')


@application.route('/page_two')
def page_two() -> str:
    """Return page two HTML
    
    :return: the html for page two
    """
    return render_template('page_two.html')


if __name__ == '__main__':
    # import ipdb; ipdb.set_trace()
    application.run(debug=True)


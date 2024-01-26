from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/publications')
def publications():
    return render_template('publications.html')

@app.route('/awards')
def awards():
    return render_template('awards.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/pub_robotic')
def pub_robotic():
    return render_template('pub_robotic.html')

@app.route('/pub_seismic')
def pub_seismic():
    return render_template('pub_seismic.html')

@app.route('/pub_structure')
def pub_structure():
    return render_template('pub_structure.html')

@app.route('/documentations')
def documentations():
    return render_template('documentations.html')

def create_app():
    return app

if __name__ == '__main__':
    app.run(debug=True)

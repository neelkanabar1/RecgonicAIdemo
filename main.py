from flask import Flask
import os
from flask import render_template
app = Flask(__name__)

@app.route('/') # 127.0.0.1:5000/
def index():
    return render_template('index.html')

@app.route('/user/') # 127.0.0.1:5000/user/
def info():
    return '<h1>APIs</h1>'

@app.route('/info/<name>') # 127.0.0.1:5000/info/
def function(name):
    return '<h1>Hello {}!</h1>'.format(name)
if __name__ == '__main__':
    app.run(debug=True)
    
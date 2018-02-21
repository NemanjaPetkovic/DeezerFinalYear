from flask import Flask, render_template, url_for, request, session, redirect, send_file, make_response, abort, Markup, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)
app.secret_key = 'mysecret'

@app.route('/')
def login():
    return render_template('login.html')

@app.route('/main')
def main():
    return render_template('home.html')

@app.route('/user')
def user():
    return render_template('user.html')

@app.route('/charts')
def charts():
    return render_template('charts.html')

if __name__ == '__main__':
    app.run(debug=True)

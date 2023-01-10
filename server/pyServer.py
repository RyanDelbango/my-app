import requests
from flask import Flask, request
from flask_restful import Api
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
api = Api(app)

@app.route("/", methods=['POST'])
def getData():
    planetNumber = str(request.json['planet'])
    data = requests.get('https://swapi.dev/api/planets/' + planetNumber)
    name = data.json()['name']
    return name

app.run(debug=True)

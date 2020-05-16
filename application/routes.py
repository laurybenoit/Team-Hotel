from application import app
from flask import render_template
from flask import url_for
import pandas as pd
import os
import numpy as np
import matplotlib.pyplot as plt
import datetime as dt
import json
import csv 
import psycopg2
from sqlalchemy import create_engine
# from config import dbusername, dbpassword
# from flask_sqlalchemy import SQLAlchemy
# from flask.json import JSONEncoder


@app.route("/")
@app.route("/home")
def home():
    return render_template("index.html")

@app.route("/reviewstatus")
def reviewstatus():
    return render_template("partofdash.html")

@app.route("/tableaudashboard")
def tableaudashboard():
    return render_template("tableaudashboard.html")

@app.route("/machinelearning")
def machinelearning():
    return render_template("machinelearning.html")

@app.route("/sentimentanalysis")
def sentimentanalysis():
    return render_template("sentiment.html")

@app.route("/sentimentsanalysis")
def sentimentsanalysis():
    return render_template("sentimentsanalysis.html")

@app.route("/team")
def team():
    return render_template("team.html")


if __name__ == "__main__":
    app.run()

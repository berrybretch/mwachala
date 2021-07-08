from flask import Flask, url_for, redirect,request, render_template
from dotenv import load_dotenv

load_dotenv()

app =Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def home_page():
    if request.method == "POST":
        return "got it!"
    else:
        css = url_for("static", filename="index_style.css")
        sauce = url_for("static", filename="index_sauce.js")
        return render_template("index.html", css=css, sauce=sauce)


@app.route("/projects")
def projects_page():
    css = url_for("static", filename="project_style.css")
    sauce = url_for("static", filename="project_sauce.js")
    return render_template("projects.html", css=css, sauce=sauce)



@app.route("/services")
def services_page():
    css = url_for("static", filename="service_style.css")
    sauce = url_for("static", filename="service_sauce.js")
    return render_template("services.html", css=css, sauce=sauce)

#woopsiedoo
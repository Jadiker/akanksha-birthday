from flask import Flask, render_template

app = Flask(__name__)
app.config['EXPLAIN_TEMPLATE_LOADING'] = True


@app.route("/")
def index():
    return render_template("index.html")

if __name__ == "__main__":
    # None of this is working
    # app.run(host='0.0.0.0', port=5000, threaded=True)
    # port = int(os.environ.get('PORT', 5000))
    # print("about to run")
    # app.run(host='0.0.0.0', port=port)

    app.run(debug=False)

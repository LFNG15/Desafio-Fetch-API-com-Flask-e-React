from flask import Flask
import datetime

x = datetime.datetime.now()

app = Flask(__name__)

@app.route('/data')
def get_time():

    return {
        'Name':"LF",
        "Age":"20",
        "Date":x,
        "Programando":"Python e Javascript"
    }

if __name__ == '__main__':
    app.run(debug=True)
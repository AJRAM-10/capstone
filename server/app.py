from models import db, Bundle, Subscription, User
from flask_migrate import Migrate
from flask import Flask, request, make_response
from flask_restful import Api, Resource
import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get(
    "DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}"
)

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)

api = Api(app)

@app.route('/')
def home():
    return ''

class SubcriptionsById(Resource):
    def patch(self):
        sub = Subscription.query.filter(Subscription.id == id).first()
        data = request.get_json()

        try:
            if sub:

                for key in data:
                    setattr(sub, key, data[key])

                db.session.add(sub)
                db.session.commit()

                response = make_response(sub.to_dict(), 202)

        except:

            response = make_response(
                {"errors": {"valadation error"}}, 400
            )
        
        return response
    
api.add_resource(SubcriptionsById, '/subscriptions/<int:id>')



if __name__ == '__main__':
    app.run(port=5555, debug=True)
from models import db, Bundle, Subscription, User, Cigar
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

class Cigars(Resource):
    def get(self):
        cigs = Cigar.query.all()

        response = make_response(cigs.to_dict(), 200)

        return response
    
api.add_resource(Cigars, '/cigars')

class CigarsById(Resource):
    def get(self, id):
        cigar = Cigar.query.filter(Cigar.id == id).first()

        if cigar:
            response = make_response(cigar.to_dict(), 200)

        else:
            response = make_response({"error": "Cigar not found"}, 404)

        return response
    
api.add_resource(CigarsById, '/cigars/<int:id>')



class Bundles(Resource):
    def get(self):
        bundles = Bundle.query.all()
        response = make_response(bundles.to_dict(), 200)

        return response

api.add_resource(Bundles, '/bundles')

class BundlesById(Resource):
    def get(self, id):
        bundle = Bundle.query.filter(Bundle.id == id).first()

        if bundle:
            response = make_response(bundle.to_dict(), 200)

        else:
            response = make_response({"error": "Bundle not found"}, 404)

        return response
    
    def patch(self, id):
        bundle = Bundle.query.filter(Bundle.id == id).first()


api.add_resource(BundlesById, '/bundles/<int:id>')



class SubcriptionsById(Resource):
    def patch(self):
        sub = Subscription.query.filter(Subscription.id == id).first()
        data = request.get_json()

        if sub:
            for key in data:
                setattr(sub, key, data[key])

            db.session.add(sub)
            db.session.commit()

            response = make_response(sub.to_dict(), 202)

        else:
            response = make_response(
                {"errors": "Could not find subscription"}, 400
            )
        
        return response
    
api.add_resource(SubcriptionsById, '/subscriptions/<int:id>')



class UserById(Resource):
    def get(self, id):
        user = User.query.filter(User.id == id).first()
        
        if user:
            response = make_response(user.to_dict(), 200)
        
        else:
            response = make_response({"error":"User not found"}, 404)

        return response
    
api.add_resource(UserById, '/users/<int:id>')


class Login(Resource):

    def get(self):
        ...

    def post(self):
        user = User.query.filter(
            User.username == request.get_json()['username']
        ).first()

        session['user_id'] = user.id
        return user.to_dict()

api.add_resource(Login, '/login')



class Logout(Resource):

    def delete(self): # just add this line!
        session['user_id'] = None
        return {'message': '204: No Content'}, 204

api.add_resource(Logout, '/logout')



class CheckSession(Resource):

    def get(self):
        user = User.query.filter(User.id == session.get('user_id')).first()
        if user:
            return user.to_dict()
        else:
            return {'message': '401: Not Authorized'}, 401

api.add_resource(CheckSession, '/check_session')


if __name__ == '__main__':
    app.run(port=5555, debug=True)
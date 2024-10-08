from models import db, Bundle, Subscription, User, Cigar
from flask_migrate import Migrate
from flask import Flask, request, make_response, session, jsonify
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

app.secret_key = "Chingasos91" # signature for Flask session

migrate = Migrate(app, db)

db.init_app(app)

api = Api(app)

@app.route('/')
def home():
    return ''

class Cigars(Resource):
    def get(self):
        cigars = Cigar.query.all()
        cigars_to_dict = [cigar.to_dict() for cigar in cigars]

        response = make_response(cigars_to_dict, 200)

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
        bundles_to_dict = [bundle.to_dict() for bundle in bundles]

        response = make_response(bundles_to_dict, 200)

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
        data = request.get_json()

        if bundle:
            for key in data:
                setattr(bundle, key, data[key])

                db.session.add(bundle)
                db.session.commit()

                response = make_response(bundle.to_dict(), 202)
        
        else:
            response = make_response({"errors": "Could not find bundle"}, 40)

        return response

api.add_resource(BundlesById, '/bundles/<int:id>')



class Subscriptions(Resource):
    def get(self):
        subs = Subscription.query.all()
        subs_to_dict = [sub.to_dict() for sub in subs]
        response = make_response(subs_to_dict, 200)

        return response
    
    def post(self):
        data = request.get_json()

        new_sub = Subscription(
            time = data['time'],
            bundle_id = data['bundle'],
            user_id = data['user'],
        )

        db.session.add(new_sub)
        db.session.commit()
        
        response = make_response(new_sub.to_dict(), 201)

        return response
    
api.add_resource(Subscriptions, '/subscriptions')


class SubcriptionsById(Resource):
    def patch(self, id):
        sub = Subscription.query.filter(Subscription.id == id).first()
        data = request.get_json()

        if sub:
            for key in data:
                setattr(sub, key, data[key])

            db.session.add(sub)
            db.session.commit()

            response = make_response(sub.to_dict(), 202)

        else:
            response = make_response({"errors": "Could not find subscription"}, 400)
        
        return response
    
    def delete(self, id):
        sub = Subscription.query.filter(Subscription.id == id).first()

        if sub:

            db.session.delete(sub)
            db.session.commit()

            response = make_response({}, 204)

        else:
            response = make_response({"error":"Subscription not found"}, 404)
    
api.add_resource(SubcriptionsById, '/subscriptions/<int:id>')



class Users(Resource):
    def get(self):
        users = User.query.all()
        users_to_dict = [user.to_dict() for user in users]
        response = make_response(users_to_dict, 200)

        return response
    
    def post(self):

        data = request.get_json()

        try:
            new_user = User(
                first_name = data['firstName'],
                last_name = data['lastName'],
                email = data['email'],
                _password_hash = data['password']
            )

            db.session.add(new_user)
            db.session.commit()

            response = make_response(new_user.to_dict(), 201)

        except ValueError:
            response = make_response({"error":["validation errors"]}, 400)

        return response

api.add_resource(Users, '/users')


class UserById(Resource):
    def get(self, id):
        user = User.query.filter(User.id == id).first()
        
        if user:
            response = make_response(user.to_dict(), 200)
        
        else:
            response = make_response({"error":"User not found"}, 404)

        return response
    
    def patch(self, id):
        user = User.query.filter(User.id == id).first()
        data = request.get_json()

        if user:
            for key in data:
                setattr(user, 'subs', data[key])

            db.session.add(user)
            db.session.commit()

            response = make_response(user.to_dict(), 202)

        else:
            response = make_response({"errors": "Could not find user"}, 400)
        
        return response
    
api.add_resource(UserById, '/users/<int:id>')


class Login(Resource):

    def post(self):
        user = User.query.filter(User.email == request.get_json()['email']).first()

        print(user.first_name)

        if user:
            session['user_id'] = user.id

            response = make_response(user.to_dict(), 201)

        else:
            response = make_response({{"errors": "incorrect login"}}, 404)
        
        return response

api.add_resource(Login, '/login')



class Logout(Resource):

    def delete(self): # just add this line!
        session['user_id'] = None

        response = make_response({},204)

        return response

        
api.add_resource(Logout, '/logout')



class CheckSession(Resource):

    def get(self):
        user = User.query.filter(User.id == session.get('user_id')).first()
        if user:
            response = make_response(user.to_dict(), 200)

        else:
            response = make_response({}, 401)

        return response

api.add_resource(CheckSession, '/check_session')


if __name__ == '__main__':
    app.run(port=5555, debug=True)
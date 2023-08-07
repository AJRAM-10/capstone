from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property
from config import db, bcrypt

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

class Cigar(db.Model, SerializerMixin):
    __tablename__ = 'cigars'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    brand = db.Column(db.String)
    size = db.Column(db.String)
    strength = db.Column(db.String)
    flavor = db.Column(db.String)
    cig_pic = db.Column(db.string)

    bundles = db.relationship('Bundle', backref='cigar')


class Bundle(db.Model, SerializerMixin):
    __tablename__ = 'bundles'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    price = db.Column(db.Float)

    cigar_1 = db.Column(db.Integer, db.ForeignKey('cigars.id'))
    cigar_2 = db.Column(db.Integer, db.ForeignKey('cigars.id'))
    cigar_3 = db.Column(db.Integer, db.ForeignKey('cigars.id'))

    subs = db.relationship('Subscription', backref='bundle')

class Subscription(db.Model, SerializerMixin):
    __tablename__ = 'subscriptions'

    id = db.Column(db.Integer, primary_key=True)
    time = db.Column(db.String)

    bundle_id = db.Column(db.Integer, db.ForeignKey('bundles.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    email = db.Column(db.String)
    _password_hash = db.Column(db.String)

    subs = db.relationship('Subscription', backref='user')

    @validates('first_name')
    def validate_first(self, key , first_name):
        if not len(first_name) >= 2:
            raise ValueError('First Name is too short')
        else:
            return first_name
        
    @validates('last_name')
    def validate_first(self, key , last_name):
        if not len(last_name) >= 2:
            raise ValueError('First Name is too short')
        else:
            return last_name
        
    @validates('email')
    def validate_email(self, key, email):
        if '@' not in email:
            raise ValueError("Failed simple email validation")
        return email
    

    @hybrid_property
    def password_hash(self):
        raise Exception("Hashed password is invisible!")

    
    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')
    

    def authenticate(self, password):
        return bcrypt.check_password_hash(self._password_hash, password.encode('utf-8'))
    

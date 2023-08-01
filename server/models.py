from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin
from datetime import datetime

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

class Cigar(db.Model, SerializerMixin):
    __tablename__ = 'cigars'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    brand = db.Column(db.String)
    origin = db.Column(db.String)
    strength = db.Column(db.String)
    wrapper = db.Column(db.String)
    binder = db.Column(db.String)
    filler = db.Column(db.String)
    owner_review = db.Column(db.String)

    bundles = db.relationship('Bundle', backref='cigar')


class Bundle(db.Model, SerializerMixin):
    __tablename__ = 'bundles'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    price = db.Column(db.Float)

    cigar_1 = db.Column(db.Integer, db.ForeignKey('cigar.id'))
    cigar_2 = db.Column(db.Integer, db.ForeignKey('cigar.id'))
    cigar_3 = db.Column(db.Integer, db.ForeignKey('cigar.id'))

    subs = db.relationship('Subscription', backref='bundle')

class Subscription(db.Model, SerializerMixin):
    __tablename__ = 'subscriptions'

    id = db.Column(db.Integer, primary_key=True)

    bundle_id = db.Column(db.Integer, db.ForeignKey('bundle.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    email = db.Column(db.String)
    dob = db.Column(db.String)
    phone_number = db.Column(db.String)
    password = db.Column(db.String)

    subs = db.relationship('Subscription', backref='user')

    # @validates('first_name')
    # def validate_first(self, key , first_name):
    #     if len(first_name) >= 1:
    #         return first_name
    #     else:
    #         raise ValueError('First Name is too short')
        
    # @validates('last_name')
    # def validate_last(self, key, last_name):
    #     if len(last_name) >= 1:
    #         return last_name
    #     else:
    #         raise ValueError('Last Name is too short')
        
    # @validates('email')
    # def validate_email(self, key, email):
    #     if 
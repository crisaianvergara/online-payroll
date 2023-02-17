from flask import Flask
from flask_smorest import Api
from flask_sqlalchemy import SQLAlchemy
from app.config import Config

db = SQLAlchemy()


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    api = Api(app)
    db.init_app(app)

    from app.position.routes import positions

    api.register_blueprint(positions)

    return app

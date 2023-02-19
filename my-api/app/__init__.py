from flask import Flask
from flask_smorest import Api
from flask_sqlalchemy import SQLAlchemy
from app.config import Config
from flask_cors import CORS


db = SQLAlchemy()


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    api = Api(app)
    CORS(app)

    app.app_context().push()
    db.init_app(app)

    from app.employee.routes import employees

    api.register_blueprint(employees)

    return app

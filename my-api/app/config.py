import os


class Config:
    SECRET_KEY = os.environ.get("FLASK_SECRET_KEY")
    SQLALCHEMY_DATABASE_URI = os.environ.get("SQLALCHEMY_DATABASE_URI_PAYROLL")
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    API_TITLE = "Online Payroll API"
    API_VERSION = "v1"
    OPENAPI_VERSION = "3.0.2"

from flask.views import MethodView
from flask_smorest import Blueprint, abort
from app import db
from app.models import PositionModel
from app.schemas import PositionSchema
from sqlalchemy.exc import IntegrityError, SQLAlchemyError

positions = Blueprint("positions", "positions", description="Operations on positions")


@positions.route("/position")
class PositionList(MethodView):
    @positions.response(200, PositionSchema(many=True))
    def get(self):
        return PositionModel.query.all()

    @positions.arguments(PositionSchema)
    @positions.response(200, PositionSchema)
    def post(self, position_data):
        position = PositionModel(**position_data)

        try:
            db.session.add(position)
            db.session.commit()
        except IntegrityError:
            abort(400, message="Position already exists.")
        except SQLAlchemyError:
            abort(500, message="An error occurred creating the position.")
        return position


@positions.route("/position/<int:position_id>")
class Position(MethodView):
    @positions.response(200, PositionSchema)
    def get(self, position_id):
        position = PositionModel.query.get_or_404(position_id)
        return position

    def delete(self, position_id):
        position = PositionModel.query.get_or_404(position_id)
        db.session.delete(position)
        db.session.commit()
        return {"message": "Position deleted."}

    @positions.arguments(PositionSchema)
    @positions.response(200, PositionSchema)
    def put(self, position_data, position_id):
        position = PositionModel.query.get_or_404(position_id)
        if position:
            position.position = position_data["position"]
            position.rate_per_hour = position_data["rate_per_hour"]

        try:
            db.session.commit()
        except IntegrityError:
            abort(400, message="Position already exists.")
        except SQLAlchemyError:
            abort(500, message="An error occurred creating the position.")
        return position

from flask.views import MethodView
from flask_smorest import Blueprint

positions = Blueprint("positions", "positions", description="Operations on positions")


@positions.route("/position")
class PositionList(MethodView):
    def get(self):
        return {"employee_name": "Cris-aian Vergara"}

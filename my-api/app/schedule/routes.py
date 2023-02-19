from flask.views import MethodView
from flask_smorest import Blueprint, abort
from app import db
from app.models import ScheduleModel
from app.schemas import ScheduleSchema
from sqlalchemy.exc import IntegrityError, SQLAlchemyError


schedules = Blueprint("schedules", "schedules", description="Operations on schedules")


@schedules.route("/schedule")
class ScheduleList(MethodView):
    @schedules.response(200, ScheduleSchema(many=True))
    def get(self):
        return ScheduleModel.query.all()

    @schedules.arguments(ScheduleSchema)
    @schedules.response(200, ScheduleSchema)
    def post(self, schedule_data):
        schedule = ScheduleModel(**schedule_data)

        try:
            db.session.add(schedule)
            db.session.commit()
        except IntegrityError:
            abort(400, message="Schedule already exists.")
        except SQLAlchemyError:
            abort(500, message="An error occurred creating the schedule.")
        return schedule


@schedules.route("/schedule/<int:schedule_id>")
class Schedule(MethodView):
    @schedules.response(200, ScheduleSchema)
    def get(self, schedule_id):
        schedule = ScheduleModel.query.get_or_404(schedule_id)
        return schedule

    def delete(self, schedule_id):
        schedule = ScheduleModel.query.get_or_404(schedule_id)
        db.session.delete(schedule)
        db.session.commit()
        return {"message": "Schedule deleted."}

    @schedules.arguments(ScheduleSchema)
    @schedules.response(200, ScheduleSchema)
    def put(self, schedule_data, schedule_id):
        schedule = ScheduleModel.query.get_or_404(schedule_id)
        if schedule:
            schedule.time_in = schedule_data["time_in"]
            schedule.time_out = schedule_data["time_out"]

        try:
            db.session.commit()
        except IntegrityError:
            abort(400, message="Schedule already exists.")
        except SQLAlchemyError:
            abort(500, message="An error occurred creating the schedule.")
        return schedule

from app import db
from sqlalchemy.orm import relationship


class EmployeeModel(db.Model):
    __tablename__ = "employees"

    id = db.Column(db.String(10), primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    middle_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    address = db.Column(db.String(100), nullable=False)
    birth_date = db.Column(db.String(10), nullable=False)
    contact_number = db.Column(db.String(15), nullable=False)
    gender = db.Column(db.String(10), nullable=False)
    email = db.Column(db.String(50), unique=True, nullable=False)

    schedule_id = db.Column(db.Integer, db.ForeignKey("schedules.id"))
    schedule = relationship("ScheduleModel", back_populates="employees")

    position_id = db.Column(db.Integer, db.ForeignKey("positions.id"))
    position = relationship("PositionModel", back_populates="employees")


class ScheduleModel(db.Model):
    __tablename__ = "schedules"

    id = db.Column(db.Integer, primary_key=True)
    time_in = db.Column(db.String(30), unique=True, nullable=False)
    time_out = db.Column(db.String(30), unique=True, nullable=False)

    employees = relationship("EmployeeModel", back_populates="schedule")


class PositionModel(db.Model):
    __tablename__ = "positions"

    id = db.Column(db.Integer, primary_key=True)
    position = db.Column(db.String(50), unique=True, nullable=False)
    rate_per_hour = db.Column(db.Float, nullable=False)

    employees = relationship("EmployeeModel", back_populates="position")

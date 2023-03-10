from app import db


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
    date_hired = db.Column(db.String(10), nullable=False)

    schedule_id = db.Column(
        db.Integer, db.ForeignKey("schedules.id"), unique=False, nullable=False
    )
    schedule = db.relationship("ScheduleModel", back_populates="employees")

    position_id = db.Column(
        db.Integer, db.ForeignKey("positions.id"), unique=False, nullable=False
    )
    position = db.relationship("PositionModel", back_populates="employees")


class ScheduleModel(db.Model):
    __tablename__ = "schedules"

    id = db.Column(db.Integer, primary_key=True)
    time_in = db.Column(db.String(30), nullable=False)
    time_out = db.Column(db.String(30), nullable=False)

    employees = db.relationship(
        "EmployeeModel", back_populates="schedule", lazy="dynamic"
    )


class PositionModel(db.Model):
    __tablename__ = "positions"

    id = db.Column(db.Integer, primary_key=True)
    position = db.Column(db.String(50), unique=True, nullable=False)
    rate_per_hour = db.Column(db.Float, nullable=False)

    employees = db.relationship(
        "EmployeeModel", back_populates="position", lazy="dynamic"
    )

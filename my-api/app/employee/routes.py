from flask.views import MethodView
from flask_smorest import Blueprint, abort
from app import db
from app.models import EmployeeModel
from app.schemas import EmployeeSchema
from app.employee.utils import generate_employee_id
from sqlalchemy.exc import IntegrityError, SQLAlchemyError

employees = Blueprint("employees", "employees", description="Operations on employees")


@employees.route("/employee")
class EmployeeList(MethodView):
    @employees.response(200, EmployeeSchema(many=True))
    def get(self):
        return EmployeeModel.query.all()

    @employees.arguments(EmployeeSchema)
    @employees.response(200, EmployeeSchema)
    def post(self, employee_data):
        employee_id = generate_employee_id()
        employee_data["id"] = employee_id
        employee = EmployeeModel(**employee_data)
        try:
            db.session.add(employee)
            db.session.commit()
        except IntegrityError:
            abort(400, message="A employee with that email already exists.")
        except SQLAlchemyError:
            abort(500, message="An error occurred creating the employee.")
        return employee


@employees.route("/employee/<string:employee_id>")
class Employee(MethodView):
    @employees.response(200, EmployeeSchema)
    def get(self, employee_id):
        employee = EmployeeModel.query.get_or_404(employee_id)
        return employee

    def delete(self, employee_id):
        employee = EmployeeModel.query.get_or_404(employee_id)
        db.session.delete(employee)
        db.session.commit()
        return {"message": "Employee deleted."}

    @employees.arguments(EmployeeSchema)
    @employees.response(200, EmployeeSchema)
    def put(self, employee_data, employee_id):
        employee = EmployeeModel.query.get_or_404(employee_id)
        if employee:
            employee.first_name = employee_data["first_name"]
            employee.middle_name = employee_data["middle_name"]
            employee.last_name = employee_data["last_name"]
            employee.address = employee_data["address"]
            employee.birth_date = employee_data["birth_date"]
            employee.contact_number = employee_data["contact_number"]
            employee.gender = employee_data["gender"]
            employee.email = employee_data["email"]
            employee.date_hired = employee_data["date_hired"]
            employee.schedule_id = employee_data["schedule_id"]
            employee.position_id = employee_data["position_id"]

        try:
            db.session.commit()
        except IntegrityError:
            abort(400, message="A employee with that email already exists.")
        except SQLAlchemyError:
            abort(500, message="An error occurred creating the employee.")
        return employee

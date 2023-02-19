from marshmallow import Schema, fields


class PositionSchema(Schema):
    id = fields.Int(dump_only=True)
    position = fields.Str(required=True)
    rate_per_hour = fields.Float(required=True)


class ScheduleSchema(Schema):
    id = fields.Int(dump_only=True)
    time_in = fields.Str(required=True)
    time_out = fields.Str(required=True)


class EmployeeSchema(Schema):
    id = fields.Str(dump_only=True)
    first_name = fields.Str(required=True)
    middle_name = fields.Str(required=True)
    last_name = fields.Str(required=True)
    address = fields.Str(required=True)
    birth_date = fields.Str(required=True)
    contact_number = fields.Str(required=True)
    gender = fields.Str(required=True)
    email = fields.Email(required=True)

    schedule_id = fields.Int()
    position_id = fields.Int()

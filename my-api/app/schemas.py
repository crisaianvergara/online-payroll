from marshmallow import Schema, fields


class PlainEmployeeSchema(Schema):
    id = fields.Str(dump_only=True)
    first_name = fields.Str(required=True)
    middle_name = fields.Str(required=True)
    last_name = fields.Str(required=True)
    address = fields.Str(required=True)
    birth_date = fields.Str(required=True)
    contact_number = fields.Str(required=True)
    gender = fields.Str(required=True)
    email = fields.Email(required=True)
    date_hired = fields.Str(required=True)


class PlainPositionSchema(Schema):
    id = fields.Int(dump_only=True)
    position = fields.Str(required=True)
    rate_per_hour = fields.Float(required=True)


class PlainScheduleSchema(Schema):
    id = fields.Int(dump_only=True)
    time_in = fields.Str(required=True)
    time_out = fields.Str(required=True)


class EmployeeSchema(PlainEmployeeSchema):
    position_id = fields.Int(required=True, load_only=True)
    position = fields.Nested(PlainPositionSchema(), dump_only=True)

    schedule_id = fields.Int(required=True, load_only=True)
    schedule = fields.Nested(PlainScheduleSchema(), dump_only=True)


class PositionSchema(PlainPositionSchema):
    positions = fields.List(fields.Nested(PlainPositionSchema()), dump_only=True)


class ScheduleSchema(PlainScheduleSchema):
    schedules = fields.List(fields.Nested(PlainScheduleSchema()), dump_only=True)

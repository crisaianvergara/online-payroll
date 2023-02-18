from marshmallow import Schema, fields


class EmployeeSchema(Schema):
    id = fields.Str(dump_only=True)
    first_name = fields.Str(required=True)
    middle_name = fields.Str(required=True)
    last_name = fields.Str(required=True)
    email = fields.Email(required=True)

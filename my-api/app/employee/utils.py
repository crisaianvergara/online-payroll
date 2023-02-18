import random
import string


def generate_employee_id():
    letters = string.ascii_uppercase
    numbers = string.digits
    random_letters = "".join(random.choice(letters) for _ in range(3))
    random_numbers = "".join(random.choice(numbers) for _ in range(7))
    return f"{random_letters}{random_numbers}"

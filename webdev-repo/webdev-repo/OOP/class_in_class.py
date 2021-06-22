

class Employee: 
    raise_amt = 1.04 

    def __init__(self, first, last, pay):
        self.first = first 
        self.last = last 
        self.email = first + '.' + last + '@email.com'
        self.pay = pay 
    
    def fullname(self):
        return f'{self.first} {self.last}'
    
    def apply_raise(self):
        self.pay = int(self.pay * self.raise_amt)

    def __repr__(self) -> str:
        return super().__repr__()

    def __str__(self) -> str:
        return super().__str__()
    
    def __add__(self, other): 
        return self.pay + other.pay


    

class Developer(Employee): # inheriting from employee class
    raise_amt = 1.10 

    def __init__(self, first, last, pay, prog_lang):

        super().__init__(first, last, pay)
        self.prog_lang = prog_lang

class Manager(Employee):

    def __init__(self, first, last, pay, employees=None):
        super().__init__(first, last, pay)
        if employees == None: 
            self.employees = []
        else: 
            self.employees = employees

    def add_employee(self, emp):
        if emp not in self.employees:
            self.employees.append(emp)

    def remove_emp(self, emp):
        if emp  in self.employees:
            self.employees.remove(emp)

    def print_emps(self):
        for emp in self.employees:
            print('-->', emp.fullname())

dev_1 = Employee('Corey', 'Schafer', 50000)
dev_2 = Employee('Test', 'Employee', 60000)


# print(dev_1.email)
# print(dev_1.prog_lang)


mgr_1 = Manager('Sue', 'Smith', 90000, [dev_1])
mgr_1.add_employee(dev_2)
 

# print(mgr_1.print_emps())

print(dev_1 + dev_2)
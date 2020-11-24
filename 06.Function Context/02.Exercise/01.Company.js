class Company {

    constructor() {
        this.departments = [];
    }
    addEmployee(username, salary, position, department) {

        for (const input of [username, salary, position, department]) {
            this.validate(input);
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
        }

        this.departments[department].push({ username, salary, position });
        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }

    bestDepartment() {
        let departments = {};
        Object.entries(this.departments).forEach(([department, employee]) => {
            let totalSalary = employee
            .map((e) => e.salary)
            .reduce((acc, el) => (acc += el));
            departments[department] = totalSalary / employee.length;
        });

        let maxSalary = 0;
        let bestDepartment;
        Object.entries(departments).forEach(([department, avgSalary]) => {
            if (avgSalary > maxSalary) {
                maxSalary = avgSalary;
                bestDepartment = department;
            }
        });

        let output = `Best Department is: ${bestDepartment}\nAverage salary: ${departments[bestDepartment].toFixed(2)}\n`;

        this.departments[bestDepartment]
            .sort(
                (a, b) => b.salary - a.salary || a.username.localeCompare(b.username)
            )
            .forEach((e) => {
                output += `${e.username} ${e.salary} ${e.position}\n`
            });
        return output.trim();
    }

    validate(value) {
        if (!value || value < 0) {
            throw new Error('Invalid input!')
        }
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log();
console.log(c.bestDepartment());

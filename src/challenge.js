const crm = require('../data/crm.json');

class EmployeesInCompany{
  constructor(){
    this.companyEmployees = [];
  }

  createCompanyData(data){
    this.searchCompanies(data, this.addPeopleToCompany);
    return this.companyEmployees;
  }

  searchCompanies(data, callback){
    data.companies.forEach(company =>{
      const newCompany = {
        name: company.name,
        employees: []
      };
      callback(data, company, newCompany);
      this.companyEmployees.push(newCompany);
    });

  }

  addPeopleToCompany(data, company, newCompany){
    data.people.forEach(person =>{
      const newPerson = {};
      newPerson.id = person.id;
      newPerson.first_name = person.first_name;
      newPerson.last_name = person.last_name;
      newPerson.title = '';

      person.employments.map(personCompany =>{
        if(personCompany.company_id == company.id){
          newPerson.title = personCompany.title;
          newCompany.employees.push(newPerson);
        }
      });

    });
  }
  
}

module.exports = new EmployeesInCompany;


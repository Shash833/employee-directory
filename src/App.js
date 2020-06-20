import React, { Component } from "react";
import TableData from "./components/TableData";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header"
import Filter from "./components/Filter";
import Table from "./components/Table";
import Row from "./components/Row";
import Employees from "./employees.json";

class App extends Component {
  state = {
    //To use imported list of employees as state
    employees: Employees,
    baseEmployees: Employees
  };

  //Method to filter employee occupations according to user selection
  filterEmployees = event => {
    const value = event.target.innerHTML;
    //If 'all occupations' is selected, display original list of employees
    if (value === "All Occupations") {
      const employees = this.state.baseEmployees;
      this.setState({ employees })
    }
    //If a particular occuation is chosen, filter list according to this
    else {
      const employees = this.state.baseEmployees.filter((employee) => employee.occupation === value);
      this.setState({ employees });
    }
  };

  //Method to sort list of employees according to 'id', 'name' or 'occupation'
  sortList = (event) => {
    const sorting = event.target.getAttribute("id")
    console.log(sorting)
    if (sorting === "id") {
      const employees = this.state.employees.sort((a, b) => (a.id > b.id) ? 1 : -1)
      this.setState({ employees })
    }
    else if (sorting === "name") {
      const employees = this.state.employees.sort((a, b) => (a.name > b.name) ? 1 : -1)
      this.setState({ employees })
    }
    else if (sorting === "occupation") {
      const employees = this.state.employees.sort((a, b) => (a.occupation > b.occupation) ? 1 : -1)
      this.setState({ employees })
    }
  }

  //Method to render components
  render() {
    return (
      <Wrapper>
        <Header></Header>
        <Row>
          <Filter
            filterEmployees={this.filterEmployees}>
          </Filter>
        </Row>
        <Row>
          <Table sort={this.sortList}>
            {this.state.employees.map(employee => (
              <TableData
                id={employee.id}
                key={employee.id}
                name={employee.name}
                occupation={employee.occupation}
              />
            ))}
          </Table>
        </Row>
      </Wrapper>
    );
  }
}

export default App;

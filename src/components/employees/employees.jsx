import React from "react";
import { Switch,Route, useRouteMatch } from "react-router-dom";
import EmployeesAdd from './employees-add/employees-add';
import MyJumbotron from "../my-jumbotron/my-jumbotron";

const Employees = () => {
  let { path,url } = useRouteMatch();
  console.log(path);
  return (
    <Switch>
      <Route exact path={path}>
        <MyJumbotron
          title={"Employees App"}
          text={"Register display, edit and remove employees"}
          btnText={"Add Employee"}
          link="/employees/add"
        />
      </Route>
      <Route path={`/employees/add`}>
          <p>HEY</p>
          <EmployeesAdd />
          {console.log('object')}
      </Route>
    </Switch>
  );
};

export default Employees;

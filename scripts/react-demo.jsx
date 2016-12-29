'use strict';

(function(React, ReactDOM, s,u,m,e,e,t){

// ES5 Old Skool :D 
var EmployeeForm = React.createClass({
	getInitialState: function(){
		return {
			employee: {
				id: 'EMP'+ Math.ceil(Math.random()*100000),
				fullName: '',
				email: '',
				salary: undefined
			}
		};
	},
	setValue: function(field, event){
		
		if(field == 'employee.fullName'){
			this.state.employee.fullName = event.target.value;
		}
		if(field == 'employee.email'){
			this.state.employee.email = event.target.value;
		}
		if(field == 'employee.salary'){
			this.state.employee.salary = event.target.value;
		}

		this.setState(this.state);
	},
	addEmployee(e){
		e.preventDefault();
		var employee = this.state.employee;

		this.state.employee =  {
				id: 'EMP'+ Math.ceil(Math.random()*100000),
				fullName: '',
				email: '',
				salary: ''
			};
		
		this.setState(this.state);
		
		this.props.handleSubmit(employee);
	},
	render: function(){
		return (
			<div>
				<div className="page">
					<div className="page-header">
						<h1>Employee <small>Add New</small></h1>
					</div>
					<div class="page-body">
						<form className="form form-horizontal" onSubmit={this.addEmployee}>
							<div className="form-group">
								<label htmlFor="txtFullName" className="col-sm-3 control-label">Full Name :</label>
								<div className="col-sm-9">
									<input id="txtFullName" value={this.state.employee.fullName} type="text" onChange={this.setValue.bind(this,'employee.fullName')} placeholder="Enter Full Name" className="form-control" autoFocus  required />
								</div>
							</div>
							<div className="form-group">
								<label htmlFor="txtEmail" className="col-sm-3 control-label">Email :</label>
								<div className="col-sm-9">
									<input id="txtEmail" value={this.state.employee.email} type="email" onChange={this.setValue.bind(this,'employee.email')}  placeholder="Enter Email Address" className="form-control" required />
								</div>
							</div>
							<div className="form-group">
								<label htmlFor="txtSalary" className="col-sm-3 control-label">Salary :</label>
								<div className="col-sm-4">
									<input id="txtSalary" value={this.state.employee.salary} type="text" onChange={this.setValue.bind(this,'employee.salary')}  placeholder="Enter Salary" className="form-control" required />
								</div>
							</div>
							<div className="form-group">
								<div className="col-sm-12">
									<button className="btn btn-primary pull-right">Submit</button>
								</div>
							</div>
						</form>	
					</div>
				</div>
			</div>
		);
	}
});

class EmployeeRow extends React.Component {

	constructor(props){
		super(props);
	}

	render(){
		
		var rowItems = this.props.data.map(function(employee){
			return (
					<tr>
						<td>{employee.id}</td>
						<td>{employee.fullName}</td>
						<td>{employee.email}</td>
						<td>{employee.salary}</td>
					</tr>
			);
		});
		return (
			<tbody>
				{rowItems}
			</tbody>
		)
	}
}


// ES6+ New Skool ;)
class EmployeeDemo extends React.Component {
	
	constructor(props){
		super(props);

		this.state = {
			employeeList: [
				{
					id: 'EMP'+ Math.ceil(Math.random()*100000),
					fullName: 'Dummy Entry',
					email: 'mail@mail.com',
					salary: 1000
				}
			]
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(employee){
		this.state.employeeList.push(employee);
		this.setState(this.state);
	}

	render(){
		return (
			<div>
				<EmployeeForm handleSubmit={this.handleSubmit} />
				<div className="table-responsive">
					<table className="table table-stripped">
						<thead>
							<tr>
								<th>ID</th>
								<th>Full Name</th>
								<th>Email</th>
								<th>Salary</th>
							</tr>
						</thead>
						<EmployeeRow data={this.state.employeeList}/>
					</table>
				</div>

			</div>
		);
	}
}


ReactDOM.render(<EmployeeDemo/>, document.getElementById('reactContainer'));	

})(React, ReactDOM);


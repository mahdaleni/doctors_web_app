import React from 'react'
import UserReportCard from "../UserReportCard/UserReportCard";

function UserList({reports}) {
    const userReport = reports.map((report, index) => {
    	return (<UserReportCard  key={index} age={report.age} sex={report.sex}/>)
	})
    return (
        <div>
			{userReport}
        </div>
    );
}

export default UserList;

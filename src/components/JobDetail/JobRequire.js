import React from "react";
import ColContentCustom from "../ColContent/ColContentCustom.js";
import "./JobRequire.scss";

const JobRequire = props => {
	const { requirements, requireChild, requireCont, responsibilities, softSkills, jobName } = props;
	return (
		<div className="job-require margin-bot wrapper">
			<ColContentCustom requirements={requirements} requireChild={requireChild} requireCont={requireCont} responsibilities={responsibilities} softSkills={softSkills} jobName={jobName}/>
		</div>
	);
};
export default JobRequire;

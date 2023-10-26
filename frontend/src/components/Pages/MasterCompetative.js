import React from "react";
import MasterHeader from "../layouts/Master Competative/MasterHeader";
import CourseHighlight from "../layouts/Master Competative/CourseHighlight";
import CoursePageMentors from "../layouts/Master Competative/CoursePageMentors";
import CourseFeature from "../layouts/Master Competative/CourseFeature";
import CoursePageStats from "../layouts/Master Competative/CoursePageStats";
import CrackCoding from "../layouts/Master Competative/CrackCoding";
import Curriculum from "../layouts/Master Competative/Curriculum";
import BatchSelect from "../layouts/Master Competative/BatchSelect";
import Slider from "../layouts/Master Competative/Slider";
import EndOfCourse from "../layouts/Master Competative/EndOfCourse";

const MasterCompetative = () => {
  return (
    <>
      <MasterHeader />
      <CourseHighlight/>
      <CoursePageMentors/>
      <CourseFeature/>
      <CoursePageStats/>
      <CrackCoding/>
      <Curriculum/>
      <BatchSelect/>
      <Slider/>
      <EndOfCourse/>
    </>
  );
};

export default MasterCompetative;

/* eslint-disable react/jsx-pascal-case */
import React from "react";
import ElevationHeader from "../layouts/ElevationAcademy/ElevationHeader";
import NewBatch from "../layouts/ElevationAcademy/NewBatch";
import DreamJob from "../layouts/ElevationAcademy/DreamJob";
import ProgramHighlights from "../layouts/ElevationAcademy/ProgramHighlights";
import UpComming from "../layouts/ElevationAcademy/UpComming";
import StudentPlaced from "../layouts/ElevationAcademy/StudentPlaced";
import PaymentPlan from "../layouts/ElevationAcademy/PaymentPlan";
import OurMentor from "../layouts/ElevationAcademy/OurMentor";
import Webinar from "../layouts/ElevationAcademy/Webinar";
import ProgramSyllabus from "../layouts/ElevationAcademy/ProgramSyllabus";
import Mutli_Carousel from "../layouts/ElevationAcademy/Multi_Carousel";
import ApplicationDetail from "../layouts/ElevationAcademy/ApplicationDetail";
import Frequent from "../layouts/ElevationAcademy/Frequent";

const ElevationAcademy = () => {
  return (
    <>
      <ElevationHeader />
      <NewBatch/>
      <DreamJob/>
      <ProgramHighlights/>
      <ProgramSyllabus/>
      <UpComming/>
      <Mutli_Carousel/>
      <StudentPlaced/>
      <ApplicationDetail/>
      <PaymentPlan/>
      <OurMentor/>
      <Webinar/>
      <Frequent/>
    </>
  );
};

export default ElevationAcademy;

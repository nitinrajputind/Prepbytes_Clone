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

const ElevationAcademy = () => {
  return (
    <>
      <ElevationHeader />
      <NewBatch/>
      <DreamJob/>
      <ProgramHighlights/>
      <UpComming/>
      <StudentPlaced/>
      <PaymentPlan/>
      <OurMentor/>
      <Webinar/>
    </>
  );
};

export default ElevationAcademy;

import React from "react";
import ElevationHeader from "../layouts/ElevationAcademy/ElevationHeader";
import NewBatch from "../layouts/ElevationAcademy/NewBatch";
import DreamJob from "../layouts/ElevationAcademy/DreamJob";
import ProgramHighlights from "../layouts/ElevationAcademy/ProgramHighlights";
import UpComming from "../layouts/ElevationAcademy/UpComming";

const ElevationAcademy = () => {
  return (
    <>
      <ElevationHeader />
      <NewBatch/>
      <DreamJob/>
      <ProgramHighlights/>
      <UpComming/>
    </>
  );
};

export default ElevationAcademy;

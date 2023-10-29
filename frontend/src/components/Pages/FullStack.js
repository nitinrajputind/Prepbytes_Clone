/* eslint-disable react/jsx-pascal-case */
import React from "react";
import StackHeader from "../layouts/FullStack/StackHeader";
import SelectBatch from "../layouts/FullStack/SelectBatch";
import StackTools from "../layouts/FullStack/StackTools";
import StackJourney from "../layouts/FullStack/StackJourney";
import StackProgram from "../layouts/FullStack/StackProgram";
import StackCompanies from "../layouts/FullStack/StackCompanies";
import Statistics from "../layouts/FullStack/Statistics";
import StackMentors from "../layouts/FullStack/StackMentors";
import StackIntern from "../layouts/FullStack/StackIntern";
import StackFees from "../layouts/FullStack/StackFees";
import Multi_Carousel from "../layouts/FullStack/Multi_Carousel";
import StackGetInTouch from "../layouts/FullStack/StackGetInTouch";
import FAQS from "../layouts/ElevationAcademy/FAQS";
import StackSyllabus from "../layouts/ElevationAcademy/StackSyllabus";

const FullStack = () => {
  return (
    <>
      <StackHeader />
      <SelectBatch/>
      <StackTools/>
      <StackJourney/>
      <StackProgram/>
      <StackCompanies/>
      <Statistics/>
      <StackMentors/>
      <StackSyllabus/>
      <StackIntern/>
      <StackFees/>
      <Multi_Carousel/>
      <StackGetInTouch/>
      <FAQS/>
    </>
  );
};

export default FullStack;

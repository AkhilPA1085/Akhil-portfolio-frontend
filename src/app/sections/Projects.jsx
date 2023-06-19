import React from "react";
import ContentWrapper from "../components/common/ContentWrapper";
import Card from "../components/Card";
import { getData } from "../../../services/api";

const Projects = async() => {
  const jsondata = await getData("/api/projects?populate=*");
  const data = jsondata?.data;
  return (
    <div className="projects pt-24">
      <ContentWrapper>
        <div className="text-center text-titleColor text-4xl uppercase tracking-wider">
          projects
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {data?.map((item)=>(
            <Card key={item.id} data={item}/>
          ))}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Projects;

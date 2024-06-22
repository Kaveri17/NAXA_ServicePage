import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../redux/action";
// import { services } from "../redux/action";

const ServicesData = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.serviceData);
  console.log("services= ", services);

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  return (
    <>
      <div className="service-data bg-[#f4f4f4] w-full py-10">
        <div className="wrapper py-5">
          {services.length > 0 &&
            services.map((service, i) => {
              return (
                <div className="flex flex-col lg:flex-row justify-between items-center py-5" key={service.id}>
                    {i % 2 == 0 &&
                        <div className="service-img w-1/2 py-2 hidden lg:block">
                        <img src={service.icon} alt={service.title} className="w-3/4 mx-auto " />
                      </div>
                    }
                    {
                    <div className="service-img lg:w-2/5 sm:w-3/4 w-11/12 mx-auto py-2 lg:hidden block px-5">
                    <img src={service.icon} alt={service.title} className="w-full" />
                  </div>
            }
                  <div className="service-content lg:w-1/2 sm:w-4/5 w-full mx-auto py-10 sm:px-4 text-center lg:text-left">
                    <div className="content-icon flex justify-center lg:justify-start">
                      <img src={service.photo} alt={service.title} className="w-12"/>
                    </div>
                    <div className="content-heading text-[#333132] py-5">
                      <h1
                        className="font-semibold lg:text-3xl md:text-2xl text-xl "
                        // style={{ fontSize: "34px" }}
                      >
                        {service.title}
                      </h1>
                      <p
                        className="py-5 font-normal md:leading-7 leading-5 sm:text-sm text-xs"
                        // style={{ fontSize: "15px" }}
                        dangerouslySetInnerHTML={{__html: service.description1}}
                      >
                        
                      </p>
                    </div>
                    <div className="content-description bg-[rgb(233,235,255)] font-normal md:px-6 px-4  py-6 sm:text-sm text-xs" 
                    style={{lineHeight:"22px"}}
                    dangerouslySetInnerHTML={{__html: service.description2}}>
                    </div>
                  </div>
                  {(i+1) % 2 == 0 &&
                        <div className="service-img w-1/2 py-2 hidden lg:block">
                        <img src={service.icon} alt={service.title} className="w-3/4 mx-auto" />
                      </div>
                    }
                </div>
              );
            })}
          {/* <div className="service-img w-2/5 py-2">
            <img src="./bg.jpg" alt="" className="w-full" />
          </div>
          <div className="service-content w-1/2 py-2 px-2">
            <div className="content-icon">icon</div>
            <div className="content-heading text-[#333132] py-5">
              <h1 className="font-semibold" style={{ fontSize: "34px" }}>
                Software & Apps Development
              </h1>
              <p
                className="py-5 font-normal leading-7"
                style={{ fontSize: "15px" }}
              >
                We build digital applications to provide digital solutions that
                contribute to efficient data collection and visualization
                focusing mainly on geodata collection and visualization.
              </p>
            </div>
            <div className="content-description bg-[rgb(233,235,255)] leading-6 font-normal px-6 py-6 text-sm">
              We develop digital software solutions ensuring smooth performances
              and user experiences across all modern platforms and devices.
              Whether it's a digital application for a private organization or a
              set of software solutions for development organizations, we offer
              support for the full lifecycle of the software development process
              that includes system design, development, testing, deployment,
              handover, and support, these activities are conducted with
              world-class product design and development practices. Our services
              include building custom Android and iOS applications, web
              applications, and tools. We are particularly strong in customizing
              open-source applications such as ODKCollect and KoboCollect and
              building advanced GIS Applications. We specialize in delivering
              large-scale projects in challenging environments on short
              timelines. We build products that allow efficient data management,
              aid in e-governance, and data analysis, visualization of both
              spatial and demographic datasets by integrating open standards,
              and advanced software development frameworks and tools. This has
              allowed our customers to make informed data-driven decisions.
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ServicesData;

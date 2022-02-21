import { useEffect, useState } from "react";
import "./TeamCard.css";
import AOS from "aos";
import "aos/dist/aos.css";
function TeamCard(props) {
  let [output, updateOutput] = useState("Loading");
  let [loading, setLoading] = useState(true);
  let data = [];
  const fetchMembers = async () => {
    const response = await fetch(
      "https://react-demo-c175c-default-rtdb.asia-southeast1.firebasedatabase.app/members.json"
    );
    data = await response.json();
    updateOutput(data);
    setLoading(false);
    console.log(data);
  };
  useEffect(() => {
    fetchMembers();
  }, []);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  let returnStatus = false;
  return (
      loading?<div className="loading__div">Fetching Data Please Wait...</div>:
        
        Object.keys(output).map(function (key, index) {
        console.log(props.filterKey);
        returnStatus=false;
        if(props.filterOption==="Name" && output[key].name.toLowerCase().indexOf(props.filterKey) !== -1)returnStatus=true;
        else if(props.filterOption==="Role" && output[key].role.toLowerCase().indexOf(props.filterKey) !== -1)returnStatus=true;
        if(returnStatus===true)return (
            <div
              className="TeamCardWrapper"
              data-aos="zoom-in"
              data-aos-delay={(output[key].id * 100).toString()}
            >
              <div className="Card">
                <div className="CardBody">
                  <div
                    className="user-picture"
                    style={{ backgroundImage: `url(${output[key].image})` }}
                  ></div>
                  <div className="user-content">
                    <h4 className="user-name">{output[key].name}</h4>
                    <p className="role">{output[key].role}</p>
                    <div>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={output[key].facebook}
                      >
                        <i className="icon fab fa-facebook-f"></i>
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={output[key].mail}
                      >
                        <i className="icon fas fa-envelope"></i>
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={output[key].linkedin}
                      >
                        <i className="icon fab fa-linkedin-in"></i>
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={output[key].github}
                      >
                        <i className="icon fab fa-github"></i>
                      </a>
                    </div>
                    <p className="description">{output[key].description}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      );
}
export default TeamCard;

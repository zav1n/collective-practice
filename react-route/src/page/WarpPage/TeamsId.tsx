import React from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams
} from "react-router-dom";

const TeamsId: React.FC = () => {
  const urlParams = useParams()
  
  console.log("urlParams", urlParams);
  const location = useLocation()
  console.log("location", location);
  const [urlSearchParams, setUrlParams] = useSearchParams()
  const navigate = useNavigate()

  console.log("urlSearchParams", urlSearchParams.get('name'));

  const handleClick = () => {
    setUrlParams({
      name: 'zzz',
      age: '22'
    });
  }

  const handleNavigate = () => {
    navigate('/', {
      state: {
        id: 'APT'
      }
    })
  }
  return <>
    <h1 onClick={handleClick}>set uarl params</h1>
    <h1 onClick={handleNavigate}>navigate to /</h1>
  </>
  
};

export default TeamsId;
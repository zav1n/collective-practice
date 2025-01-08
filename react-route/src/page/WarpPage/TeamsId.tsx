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
    // navigate('/', {
    //   state: {
    //     id: 'ddd'
    //   }
    // })
  }
  return <h1 onClick={handleClick}>Teams Id</h1>;
};

export default TeamsId;
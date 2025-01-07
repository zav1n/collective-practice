import React from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams
} from "react-router-dom";

const TeamsId: React.FC = () => {
  const urlParams = useParams()
  const location = useLocation()
  const [urlSearchParams, setUrlParams] = useSearchParams()
  const navigate = useNavigate()

  console.log("urlSearchParams", urlSearchParams.get('name'));

  const handleClick = () => {
    navigate('/', {
      state: {
        id: 'ddd'
      }
    })
  }
  return <h1 onClick={handleClick}>Teams Id</h1>;
};

export default TeamsId;
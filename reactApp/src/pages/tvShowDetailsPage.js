import React from "react";
import { useParams } from 'react-router-dom';
import TVShowDetails from "../components/tvShowComponents/tvShowDetails/";
import TemplateTVShowPage from "../components/tvShowComponents/templateTVShowPage";
//import useMovie from "../hooks/useMovie";

import { getTVShow } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'



const TVShowDetailsPage = (props) => {
  const { id } = useParams();

  const { data: show, error, isLoading, isError } = useQuery(
    ["show", { id: id }],
    getTVShow
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {show ? (
        <>
          <TemplateTVShowPage show={show}>
            <TVShowDetails show={show} />
          </TemplateTVShowPage>
        </>
      ) : (
        <p>Waiting for show details</p>
      )}
    </>
  );
};

export default TVShowDetailsPage;
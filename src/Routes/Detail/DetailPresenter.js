import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";

const Container = styled.div`
  height: calc(100vh - 20px);
  width: 100%;
  position: relative;
  padding: 20px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Summary = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 20%;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 35%;
`;

const Description = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 35%;
  margin-top : 30px;
`;

const Cover = styled.div`
  width: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 100%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
  margin-bottom:10px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.div``;

const Divider = styled.span`
  margin-right: 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 100%;
`;

const DetailPresenter = ({ result, loading, error }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Alflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.original_title ? result.original_title : result.original_name}{" "}
          | Alflix
        </title>
      </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Summary>
          <ItemContainer>
            <Title>
              {result.original_title
                ? result.original_title
                : result.original_name}
            </Title>
            <Item>
              Release
              <Divider>:</Divider>
              {result.release_date
                ? result.release_date.substring(0, 7)
                : result.first_air_date.substring(0, 7)}
            </Item>
            <Item>
              Runtime
              <Divider>:</Divider>
              {result.runtime ? result.runtime : result.episode_run_time[0]} min
            </Item>
            <Item>
              Genres
              <Divider>:</Divider>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
          </ItemContainer>
      </Summary>
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/noPosterSmall.png")
          }
        />
      </Content>
      <Description>
        <Data>
          <Overview>{result.overview}</Overview>
        </Data>
      </Description>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default DetailPresenter;

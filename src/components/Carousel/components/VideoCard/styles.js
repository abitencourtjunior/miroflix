import styled from 'styled-components'

const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({
    url,
  }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: transform 0.2s ease 0s;
  &:hover,
  &:focus {
    opacity: 0.5;
    width: 400px;
    height: 200px;
    transition: 0.4s;

  }

  &:not(:first-child) {
    margin-left: 20px;
  }

`

export default VideoCardContainer

import React from "react"
import styled from "styled-components"

const BioBox = styled.p`
  text-align: left;
  font-size: ${({ theme }) => theme.fontSize.paragraph};
  line-height: 1.4em;
  padding: 15px 25px;
  max-width: 750px;
  margin-bottom: 30px;
`

const bioText = `
  My name is Braxton Lemmon. 
  I received a Bachelor of Science in Recreation Management in 2014. After graduating I spent time working as a recreational therapist and learned what it means to work and communicate with teams of other professionals. As a therapist I helped people with a variety of disabilities; today I continue that effort by building websites that are accessible to everyone.
  In 2018 I became a student of The Odin Project Full Stack curriculum and quickly discovered a world that encourages an ideal blend of problem solving and creativity. I've been coding ever since.
`;

const Bio = () => {
  return <BioBox>{bioText}</BioBox>
}

export default Bio

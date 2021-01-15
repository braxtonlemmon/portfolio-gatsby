import React from "react"
import styled from "styled-components"
import {
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaReact,
  FaLinux,
  FaNodeJs
} from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { Icon } from "@iconify/react"
import { GrGatsbyjs } from "react-icons/gr"

import languageRubyOnRails from "@iconify/icons-mdi/language-ruby-on-rails"
import rubyIcon from "@iconify/icons-cib/ruby"
import gimpIcon from "@iconify/icons-cib/gimp"

const StampWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 800px;
  margin-bottom: 30px;
`

const Stamp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border: 3px solid #494949;
  padding: 5px;
  border-radius: 20px;
  height: 110px;
  width: 110px;
  text-align: center;
  color: #494949;
`

const Label = styled.h3`
  margin-top: 5px;
`

const Stamps = () => {
  const size = "3.5em"
  return (
    <StampWrapper>
      <Stamp>
        <FaHtml5 size={size} />
        <Label>HTML5</Label>
      </Stamp>
      <Stamp>
        <FaCss3Alt size={size} />
        <Label>CSS3</Label>
      </Stamp>
      <Stamp>
        <IoLogoJavascript size={size} />
        <Label>JavaScript</Label>
      </Stamp>
      <Stamp>
        <FaReact size={size} />
        <Label>React</Label>
      </Stamp>
      <Stamp>
        <GrGatsbyjs size={size} />
        <Label>GatsbyJS</Label>
      </Stamp>
      <Stamp>
        <FaNodeJs size={size} />
        <Label>Node.js</Label>
      </Stamp>
      <Stamp>
        <Icon icon={rubyIcon} height={size} />
        <Label>Ruby</Label>
      </Stamp>
      <Stamp>
        <Icon icon={languageRubyOnRails} height={size} color="#494949" />
        <Label>Rails</Label>
      </Stamp>
      <Stamp>
        <FaGitAlt size={size} />
        <Label>Git</Label>
      </Stamp>
      <Stamp>
        <FaLinux size={size} />
        <Label>Linux</Label>
      </Stamp>
      <Stamp>
        <Icon icon={gimpIcon} height={size} />
        <Label>GIMP</Label>
      </Stamp>
    </StampWrapper>
  )
}

export default Stamps

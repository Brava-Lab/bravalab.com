import React from "react"

import Section from "../../section/section.component"

import styles from "./who-we-are.module.scss"
import MemberCard from "../../member-card/member-card.component"
import { TEAM_MEMBERS } from "./who-we-are.constants"

const teamMembers = TEAM_MEMBERS.map((member, ix) => <MemberCard key={ix} member={ member }/>)

const WhoWeAreSection = (props) => (
  <Section
    title="Who we are?"
    subtitle="We are Bravalab! and some not too long text explaining who we are and other relevant information about our team expertice and goals."
    { ...props }
  > 
    <div className={ styles.container }>{ teamMembers }</div>
  </Section>
)

export default WhoWeAreSection

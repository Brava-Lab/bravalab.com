import React from "react"

import Layout from "../components/layout"
import Header from '../components/header/header.component';
import Section from '../components/section/section.component';

const IndexPage = () => (
  <Layout>
    <Header 
      title="We provide high-performing, on-demand teams of developers for leading brands."
      hasCallToAction/>
    
    <Section title="This is a section title" subtitle="This is a subtitle" gutterBoth grey>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum nobis reprehenderit numquam corporis ex dolorem harum magnam autem itaque repellat repellendus, ab consequuntur aut illum consectetur sapiente, ducimus voluptate nisi.
    </Section>
    
  </Layout>
)

export default IndexPage

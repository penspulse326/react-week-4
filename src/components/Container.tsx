import styled from "styled-components"
import { MQ_MD } from "../constants/style_variants"

export const Container = styled.div`
  margin: 0 auto;
  max-width: 992px;

  ${MQ_MD} {
     padding: 15px;
     width: 100%;
  }
`
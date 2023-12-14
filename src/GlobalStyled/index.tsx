import styled, { createGlobalStyle } from "styled-components"

export const MQ_MD = "@media (max-width: 992px)";

export const ResetStyle = createGlobalStyle`
     /* http://meyerweb.com/eric/tools/css/reset/ 
     v2.0 | 20110126
     License: none (public domain)
     */

     html, body, div, span, applet, object, iframe,
     h1, h2, h3, h4, h5, h6, p, blockquote, pre,
     a, abbr, acronym, address, big, cite, code,
     del, dfn, em, img, ins, kbd, q, s, samp,
     small, strike, strong, sub, sup, tt, var,
     b, u, i, center,
     dl, dt, dd, ol, ul, li,
     fieldset, form, label, legend,
     table, caption, tbody, tfoot, thead, tr, th, td,
     article, aside, canvas, details, embed, 
     figure, figcaption, footer, header, hgroup, 
     menu, nav, output, ruby, section, summary,
     time, mark, audio, video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
     }
     /* HTML5 display-role reset for older browsers */
     article, aside, details, figcaption, figure, 
     footer, header, hgroup, menu, nav, section {
          display: block;
     }
     body {
          line-height: 1;
     }
     ol, ul {
          list-style: none;
     }
     blockquote, q {
          quotes: none;
     }
     blockquote:before, blockquote:after,
     q:before, q:after {
          content: '';
          content: none;
     }
     table {
          border-collapse: collapse;
          border-spacing: 0;    
     }

     * {
          box-sizing: border-box;
     }

     a {
          color: white;
          text-decoration: none;
     }

     #root {
          display: flex;
          justify-content: center;
          align-items: flex-start;

          width: 100vw;
          height: 100vh;
          background-image: linear-gradient(#fc6c48 0%, #ef5081 100%);
     }
`
export const Container = styled.div`
  margin: 0 auto;
  max-width: 992px;

  ${MQ_MD} {
     padding: 15px;
     width: 100%;
  }
`
import { gql } from "@apollo/client";

export const JACKSON_HOMEPAGE_DATA = gql`
  query HomepageData {
    home {
      data {
        heros {
          _id
          bg_image {
            file_name
            id
            url
          }
          greeting_text {
            html
          }
          tag_line {
            html
          }
        }
      }
    }
  }
`;

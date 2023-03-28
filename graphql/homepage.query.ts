import { gql } from "@apollo/client";

export const JACKSON_HERO_DATA = gql`
  query HeroData {
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

export const JACKSON_ABOUT_DATA = gql`
  query AboutData {
    about {
      data {
        happy_text
        long_bio {
          html
        }
        skills {
          _id
          color_code
          icon {
            file_name
            id
            url
          }
          name
        }
      }
    }
  }
`;

export const JACKSON_SERVICES_DATA = gql`
  query ServiceData {
    service {
      data {
        experiences {
          _id
          color_code
          description
          icon {
            file_name
            id
            url
          }
          title
        }
        statistics_bg {
          file_name
          id
          url
        }
        statistics {
          _id
          number
          title
        }
      }
    }
  }
`;

export const JACKSON_SKILL_DATA = gql`
  query SkillData {
    skill {
      data {
        description {
          html
        }
        skills {
          _id
          color_code
          name
          skill_percentage
        }
      }
    }
  }
`;

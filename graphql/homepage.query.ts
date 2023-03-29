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
export const JACKSON_EDUCATION_DATA = gql`
  query EducationData {
    educations {
      data {
        details {
          html
        }
        title
      }
      id
    }
  }
`;
export const JACKSON_EXPERIENCE_DATA = gql`
  query ExperienceData {
    experiences {
      id
      data {
        color_code
        from_and_to_date
        title
        details {
          html
        }
      }
    }
  }
`;
export const JACKSON_WORKS_DATA = gql`
  query WorksData {
    works {
      id
      data {
        categories
        title
        cover {
          file_name
          id
          url
        }
      }
    }
  }
`;
export const JACKSON_BLOG_DATA = gql`
  query BlogData {
    blogPosts {
      data {
        body {
          html
        }
        cover {
          file_name
          url
          id
        }
        date
        title
      }
      id
    }
  }
`;
export const JACKSON_CONTACT_DATA = gql`
  query ContactData {
    contact {
      data {
        phone
        email
        address {
          html
        }
      }
    }
  }
`;
export const JACKSON_SITEINFO_DATA = gql`
  query SiteInfoData {
    siteInfo {
      data {
        bio
        copyright
        website_title
        avatar {
          file_name
          id
          url
        }
        tag_line
      }
    }
  }
`;

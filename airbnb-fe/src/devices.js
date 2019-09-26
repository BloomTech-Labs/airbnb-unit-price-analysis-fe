const size = {
  mobile: "500px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1920px"
};

const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`
};

export default device;

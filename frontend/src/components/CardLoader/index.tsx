import ContentLoader from "react-content-loader";

import "./styles.css";

const CardLoader = () => (
  <div className="card-loader-container">
    <ContentLoader
      speed={2}
      width={476}
      height={200}
      viewBox="0 0 476 200"
      backgroundColor="#f3f3f3"
      foregroundColor="#a4a2a2"
    >
      <rect x="0" y="117" rx="3" ry="3" width="88" height="11" />
      <rect x="-5" y="138" rx="3" ry="3" width="410" height="6" />
      <rect x="-3" y="165" rx="3" ry="3" width="380" height="6" />
      <rect x="-2" y="180" rx="3" ry="3" width="178" height="5" />
      <circle cx="179" cy="78" r="43" />
      <rect x="-7" y="152" rx="3" ry="3" width="410" height="6" />
    </ContentLoader>
  </div>
);

CardLoader.metadata = {
  name: "Diego Vicente",
  github: "DiegoVP66",
  description: "About Skeleton",
  filename: "CardLoader",
};

export default CardLoader;

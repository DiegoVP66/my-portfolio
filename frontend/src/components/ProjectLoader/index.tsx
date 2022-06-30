import ContentLoader from "react-content-loader";
import "./styles.css";

const ProjectLoader = () => {
  return (
    <div>
      <ContentLoader
        speed={2}
        width={476}
        height={210}
        viewBox="0 0 476 210"
        backgroundColor="#f3f3f3"
        foregroundColor="#a4a2a2"
      >
        <rect x="13" y="58" rx="3" ry="3" width="88" height="11" />
        <rect x="12" y="72" rx="3" ry="3" width="410" height="2" />
        <rect x="32" y="163" rx="3" ry="3" width="331" height="4" />
        <rect x="156" y="144" rx="3" ry="3" width="70" height="4" />
        <rect x="121" y="81" rx="0" ry="0" width="139" height="58" />
        <rect x="206" y="125" rx="0" ry="0" width="7" height="10" />
        <rect x="31" y="179" rx="3" ry="3" width="380" height="4" />
        <rect x="41" y="211" rx="3" ry="3" width="380" height="4" />
        <rect x="30" y="194" rx="3" ry="3" width="380" height="4" />
      </ContentLoader>
    </div>
  );
};

export default ProjectLoader;

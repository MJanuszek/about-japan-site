import "../styles/mythology.scss";

function Mythology() {
  return (
    <div className="myths">
      <h1 className="youkai-title">Mythology: Youkai</h1>
      <div className="description-wrap">
        <div className="youkai-pic"></div>
        <div className="yokai-description">
          Youkai are a captivating facet of Japanese folklore, embodying a range
          of supernatural creatures that populate countless stories and myths.
          These entities can be mischievous, malevolent, or benevolent, often
          reflecting the complexity of human emotions and nature's forces.
          Ranging from shape-shifting spirits like kitsune (foxes) and tanuki
          (raccoon dogs), to eerie beings like yurei (ghosts) and onryo
          (vengeful spirits), youkai permeate Japanese culture across
          literature, art, and media.
          <br /> <br />
          Popularized in folklore collections and modern media, youkai continue
          to be a rich source of inspiration and cultural identity. They not
          only evoke fear and wonder but also convey moral lessons, embodying
          the mysterious and unknown aspects of the world. Through festivals,
          art, and storytelling, youkai remain a vibrant part of Japan’s
          cultural heritage, celebrated and revered in both traditional and
          contemporary contexts.
        </div>
      </div>
      <div className="gallery-main">
        <div className="yokai-gallery">
          <div className="yokai-img1 yimg"></div>
          <div className="yokai-img2 yimg"></div>
          <div className="yokai-img3 yimg"></div>
        </div>
        <div className="yokai-gallery">
          <div className="yokai-img4 yimg"></div>
          <div className="yokai-img5 yimg"></div>
          <div className="yokai-img6 yimg"></div>
        </div>
      </div>
    </div>
  );
}

export default Mythology;

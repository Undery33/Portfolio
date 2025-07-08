function SkillCard({ img, title, desc }) {
  return (
    <div className={`box-${title.toLowerCase()}`}>
      <img src={img} alt={title} />
      <p>{title}</p>
      {desc && <span>{desc}</span>}
    </div>
  );
}

export default SkillCard;

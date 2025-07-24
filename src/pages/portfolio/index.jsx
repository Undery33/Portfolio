import { useState } from 'react';
import styles from './portfolio.module.css'; // CSS 모듈 사용 가정

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = {
    undersoon: {
      title: '언더순 디스코드 봇',
      description: '서버 관리를 위한 디스코드 봇. 번역, 활동량 관리, GPT-4o 대화 기능 포함.',
      image: '/undersoon.png'
    },
    polyglot: {
      title: 'POLYGLOT',
      description: 'AWS, 웹 페이지 제작 학습용 디스코드 봇 프로젝트.',
      image: '/polyglot.png'
    },
    cloumer: {
      title: 'CLOUMER',
      description: '실시간 스트리밍 서비스, 로그인/채팅 기능 포함.',
      image: '/cloumer.jpg'
    },
    rol: {
      title: 'ROL',
      description: '리그 오브 레전드 전적 기반 승률 예측 서비스.',
      image: '/rol.jpg'
    },
  };

  return (
    <div className={styles.portfolioContainer}>
      <h2 className={styles.mainTitle}>MAIN PROJECT</h2>
      <div className={styles.projectGrid}>
        {Object.keys(projects).map((key) => (
          <div
            key={key}
            className={styles.projectCard}
            onClick={() => setSelectedProject(projects[key])}
          >
            <div className={styles.imageContainer}>
              <img
                src={projects[key].image}
                alt={projects[key].title}
                className={styles.projectImage}
              />
              <div className={styles.overlay}>
                <div className={styles.textBox}>
                  <h3>{projects[key].title}</h3>
                  <p>{projects[key].description}</p>
                  <button className={styles.detailButton}>자세히</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
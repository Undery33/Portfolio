import './About.css';

export default function About() {
  return (
    <main>
      <div>
        본인에 대해 적는 란
      </div>
      <div className='about-me'>
        About Me <br/>
        <p className='about-me-intro'>프론트앤드, AI, Cloud 등 여러 시도를 하며 알아가는 것을 좋아합니다.</p>
      </div>
      <div className='introduce'>
        <div className='profile'>
          이름: <br/>
          생년월일: <br/>
          학력: <br/>
          활동 내역: <br/>
          E-mail: <br/>
          Phone:  <br/>
          Favorite:  <br/>
        </div>
        <image href=''></image>
        <div className='intro-about-me'>
          처음에는 프론트앤드를 통해 웹 개발을 시작하였으며, 점차 AI와 Cloud를 접하고<br/>
          최근 트랜드가 무엇인지 파악하여 봇 개발 및 배포, 일상생활 내에서 편한 활동을 위해 번역, <br/>
          마지막으로 모든 특징을 소개하고 싶은 마음에 포트폴리오 페이지를 생성하였습니다. <br/>
        </div>
      </div>

      <div>
        언어: <br/>
        중국어 (하)
        일본어 (중)
        영어 (중)
      </div>

      <div>
        취미 및 특기: <br/>
        특기: HWP, Word, PowerPoint, Excel 등 문서 작업 자신 있음 <br/>
        취미: 컴퓨터 조립, 하드웨어 관리 능숙<br/>
      </div>

      <div>
        성격: 팀을 이끄는 것을 좋아함, 한 가지 일에 빠져들면 집중함, 밝고 긍정적인 성격, 문제 해결을 좋아함, <br/>
        커뮤니케이션 능숙, 여러 부업(청소 및 요리 등)에 능숙함 <br/>

        단점과 극복: 다른 사람의 말에 쉽게 흔들림, 이를 해결하기 위해 한 번 더 스스로 확인하는 습관을 길들임. <br/>
        감정에 민감함, 이를 극복하기 위해 논리적인 생각을 기르고 최대한 본인의 감정을 표현하지 않고 말할 수 있도록 함
      </div>
    </main>
  );
}

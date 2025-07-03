import { useTranslation } from 'react-i18next';
import './Home.css';
import { useEffect } from 'react';

export default function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    const icons = document.querySelectorAll('.icon img');

    icons.forEach(icon => {
      icon.addEventListener('click', () => {
        const target = icon.getAttribute('data-target');
        const section = document.querySelector(`.${target}`);

        if (section) {
          section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    });

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            entry.target.classList.remove('active');
          }
        });
      },
      { threshold: 0.2 }
    );

    icons.forEach(icon => observer.observe(icon));

    return () => {
      icons.forEach(icon => {
        icon.replaceWith(icon.cloneNode(true));
      });
      icons.forEach(icon => observer.unobserve(icon));
    };
  }, []);

  return (
    <main className="scroll-container">
      <section className="snap">
        <div className='icon'>
          <img
            src='/profile.png'
            className='profile-icon'
            data-target='intro'
          />
          <img
            src='/about.webp'
            className='about-icon'
            data-target='about'
          />
          <img
            src='/code.webp'
            className='code-icon'
            data-target='skills'
          />
        </div>
        <div className='intro section'>
          <p className='intro-me'>React, Python, AWS... <br /></p>
          <p className='intro-major'>AI를 이용한 주니어 개발자, 홍태의 입니다.</p>
          <img src='/ex_profile.png' className='intro-profile' />
        </div>
      </section>

      <section className="snap">
        <div className='about section'>
          <div className='about-content'>
            <img src='/ex_about.png' />
            <div className='about-text'>
              <p className='about-title'>INTRODUCE</p>
              <p className='about-exp'>
                안녕하세요! 제 홈페이지를 보고 계시는 여러분! <br />
                고객의 리즈를 파악하여 창의력을 이용하여 디자인하고 섬세한 부분까지 <br />
                신경쓰며 개발하는 저는 홍태의 입니다! <br /><br />
                항상 팀 분위기를 신경쓰며 폐가 되지 않도록, 모르는 부분이 있으면 물어보는, <br />
                새로운 기술이 있으면 공부하는, 한 번 집중하면 해결 될 때까지 끝을 보는... <br /><br />
                실제로 해당 홈페이지를 알바 끝나면 1시간 이상을 투자하여 만든 결과물 입니다. <br /><br />
                언더리라는 별명은 "아래에서 다시 시작하다." 라는 뜻을 가지고 있으며 <br />
                실패 및 좌절하는 상황이 올 때도 다시 차근차근 움직이는 성격을 가지고 싶기에 <br />
                이러한 별명을 만들었습니다. 차근히 홈페이지를 둘러보고, 평가를 남겨주세요!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="snap">
        <div className='skills section'>
          SKILLS
        </div>
      </section>
    </main>
  );
}

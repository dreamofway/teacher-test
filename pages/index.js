import {useRouter} from 'next/router'

export default function Home() {

    const router = useRouter();

    function PageMove(){
        setTimeout(()=>{
            router.push('/test');
        }, 2500);
    }

    return (
      <aside>
        <div className="parallax" loading="lazy" ></div>
        <div className="header-box">
          <p className="sub-txt">
            하나님의 사랑과<br />
            구원의 소식을 전파하는
          </p>
          <hr className="line" />
          <p className="main-txt">
            강남성서침례교회 <br /> GangNam Bible Baptist Church !
          </p>
        </div>
          <PageMove/>
      </aside>
    )
}

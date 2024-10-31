
import { FaCircle } from 'react-icons/fa'; // fa-circle 아이콘을 FaCircle로 가져옵니다.
// import { useEffect, useRef } from 'react';
import Layout from '../common/Layout';
import Pic from '../common/Pic';
import useShortenText from '../../hooks/useShortenText';
import useCombineText from '../../hooks/useCombineText';
import { Link } from 'react-router-dom';
import Content from '../common/Content';
import { useYoutubeQuery } from '../../hooks/useYoutube';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

export default function Youtube() {
	const shortenText = useShortenText();
	const combineText = useCombineText();
	const { data: Vids, isPending } = useYoutubeQuery({ type: 'B' });

 
	const handleThumbnailClick = () => {
		setShowPopup(true); // 썸네일 클릭 시 팝업 열기
	};

	const closePopup = () => {
		setShowPopup(false); // 외부 클릭 시 팝업 닫기
	};

	return (
		<Layout title={'YOUTUBE'}>


		<div className="wrap">
					<h2>YOUTUBE <span>VIDEOS</span> </h2>
		<ul className="auto">
			{/* <li className="btnStart"><i className="fas fa-play"></i></li>
			<li className="btnStop"><i className="fas fa-pause"></i></li> */}
		</ul>

		<Swiper
			modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
			loop={true}
			spaceBetween={0}
			slidesPerView="auto"
			centeredSlides={true}
			grabCursor={true}
			speed={1000}
			effect="coverflow"
			coverflowEffect={{
				rotate: 50,
				stretch: -100,
				depth: 400,
				modifier: 1,
				slideShadows: false
			}}
			autoplay={{ delay: 1000, disableOnInteraction: true }}
			pagination={{ el: ".swiper-pagination", type: "fraction" }}
			navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
			className="swiper-wrapper"
		>
			<SwiperSlide className="swiper-slide">
			<a href="https://youtu.be/0XPfwjw0z-Q?si=n7z9YK4bfkZoo7dL" target="_blank" rel="noopener noreferrer">
				<div className="inner">
					<div className="con">
						<img src="/thumb1.png" alt="AVALLION" />
						<h3>AVALLION</h3>
						<p>STEP INTO POSSIBILITIES</p>
					</div>
				</div>
				</a>
			</SwiperSlide>
 
			<SwiperSlide className="swiper-slide">
 
				<div className="inner">
					<div className="con">
					<a href=" https://youtu.be/0XPfwjw0z-Q?si=n7z9YK4bfkZoo7dL"></a>
						<img src="/thumb2.png" alt="PERFUME DESIGNER" />
						<h3>CREMA NERA</h3>
						<p>HIGH-PRECISION SKIN REVIVAL</p>
					</div>
				</div>
 
			</SwiperSlide>

			<SwiperSlide className="swiper-slide">
 
				<div className="inner">
					<div className="con">
 						<img src="/thumb3.png" alt="LIMITLESS" />
						<h3>LIMITLESS POTENTIAL</h3>
						<p>FIRST FRAGRANCE</p>
									</div>
				</div>
 
			</SwiperSlide>
			<SwiperSlide className="swiper-slide">
 				<div className="inner">
					<div className="con">
 						<img src="/thumb4.png" alt="AVALLION" />
						<h3>AVALLION</h3>
						<p>FIRST FRAGRANCE</p>
					</div>
				</div>
 
			</SwiperSlide>
			<SwiperSlide className="swiper-slide">
 				<div className="inner">
					<div className="con">
						<img src="/thumb5.png" alt="STEP INTO POSSIBILITIES" />
						<h3>STEP INTO POSSIBILITIES</h3>
						<p>BRAND STORY</p>
					</div>
				</div>
 			</SwiperSlide>
		</Swiper>

		{/* 네비게이션 및 페이지네이션 요소 */}
		<div className="swiper-button-next"></div>
		<div className="swiper-button-prev"></div>
		{/* <div className="swiper-pagination"></div> */}
		
	</div>
{/* 
	<Content delay={1}>
		{isPending && <p>Loading...</p>}
		<div className="video-grid">
			{Vids?.slice(0, 8).map((vid, idx) => (
			<article key={idx} className="video-card" >
   <p className="round">
  <i className="fa-solid fa-circle"></i> </p>
					<h3>
						<Link to={'/youtube/' + vid.id}>{shortenText(vid.snippet.title, 53)}</Link>
					</h3>
					<div className="txt">
						<p>{shortenText(vid.snippet.description, 50)}</p>
						<span>{combineText(vid.snippet.publishedAt.split('T')[0], '-', '.')}</span>
					</div>
					<Pic className="thumb" src={vid.snippet.thumbnails.high.url} />
				</article>
			))}
		</div>
	</Content> */}



	<Content delay={1}>
    {isPending && <p>Loading...</p>}
    <div className="video-grid">
        {Vids?.slice(0, 8).map((vid, idx) => (
            <Link to={`/youtube/${vid.id}`} key={idx} className="video-card">
                <article>
                    <div className="round">
                        <FaCircle />
                    </div>
                    <h3>{shortenText(vid.snippet.title, 53)}</h3>
                    <div className="txt">
                        <p>{shortenText(vid.snippet.description, 50)}</p>
                        <span>{combineText(vid.snippet.publishedAt.split('T')[0], '-', '.')}</span>
                    </div>
                    <Pic className="thumb" src={vid.snippet.thumbnails.high.url} />
                </article>
            </Link>
        ))}
    </div>
</Content>







</Layout>
);
}
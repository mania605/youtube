import { motion } from 'framer-motion';
import Mask from './Mask';

export default function MaskBox({ children, className = '', duration = 0.5, delay = 0, color = '#000', style }) {
	//styles
	const frameStyle = {
		display: 'inline-block',
		position: 'relative',
		overflow: 'hidden'
	};

	//motion options
	const { init, active, end, time } = {
		init: { opacity: 0 },
		active: { opacity: 1 },
		end: { opacity: 0, transition: { delay: 0 } },
		time: { duration: 0.01, delay: duration / 2 + delay }
	};

	return (
		// 컴포넌트에는 className이 직접적으로 적용 불가하므로 컴포넌트에 적용한 className을
		//마치 props처럼 전달받아서 실제 컴포넌트 내부의 jsx요소에 연결
		<div className={className} style={{ ...frameStyle, ...style }}>
			<motion.div style={{ width: '100%', height: '100%' }} initial={init} animate={active} exit={end} transition={time}>
				{children}
			</motion.div>

			<Mask duration={duration} delay={delay} color={color} />
		</div>
	);
}

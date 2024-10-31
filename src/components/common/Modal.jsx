import { motion } from 'framer-motion';
import { useZustandStore } from '../../hooks/useZustand';

export default function Modal({ children }) {
	const setModalClose = useZustandStore(state => state.setModalClose);

	return (
		<motion.aside className='modal'>
			<div className='con'>{children}</div>

			<button className='btnClose' onClick={setModalClose}>
				CLOSE
			</button>
		</motion.aside>
	);
}

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import useThrottle from '../../hooks/useThrottle';
import { useZustandStore } from '../../hooks/useZustand';
import { Link } from 'react-router-dom';
import { FaUserGroup } from 'react-icons/fa6';
import { FaImages, FaYoutube } from 'react-icons/fa';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { IoDocumentText } from 'react-icons/io5';

export default function MobileMenu() {
	const setMenuClose = useZustandStore(state => state.setMenuClose);

	const { initial, animate, exit, transition } = {
		initial: { x: -300, opacity: 0 },
		animate: { x: 0, opacity: 1 },
		exit: { x: -300, opacity: 0 },
		transition: { duration: 0.5 }
	};

	const closeMenu = () => {
		if (window.innerWidth >= 1000) setMenuClose();
	};

	const throttledCloseMenu = useThrottle(closeMenu);

	useEffect(() => {
		window.addEventListener('resize', throttledCloseMenu);
		return () => window.removeEventListener('resize', throttledCloseMenu);
	}, [throttledCloseMenu]);

	return (
		<motion.aside className='mobileMenu' onClick={setMenuClose} initial={initial} animate={animate} exit={exit} transition={transition}>
			<h1>
				<Link to='/'>ALPACO</Link>
			</h1>

			<ul>
				<li>
					<Link to='/members'>
						<FaUserGroup />
						MEMBERS
					</Link>
				</li>
				<li>
					<Link to='/gallery'>
						<FaImages />
						GALLERY
					</Link>
				</li>
				<li>
					<Link to='/youtube'>
						<FaYoutube />
						YOUTUBE
					</Link>
				</li>
				<li>
					<Link to='/contact'>
						<RiCustomerService2Fill />
						CONTACT
					</Link>
				</li>
				<li>
					<Link to='/posts'>
						<IoDocumentText />
						POSTS
					</Link>
				</li>
			</ul>
		</motion.aside>
	);
}

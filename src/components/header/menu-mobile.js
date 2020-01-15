import React, { useRef, useState, useEffect } from "react";
import { Icon } from 'antd';
import Menu from "../sidebar/sidebar";

export default function MenuMobile() {
	const [isOpen, setIsOpen ] = useState(false);

	const btnRef = useRef(null);

	const handleClick = () => {
		setIsOpen(!isOpen);
	}

	let classMenuMobile = '';
	let typeIcon = 'menu-unfold';
	if (isOpen) {
		classMenuMobile = 'show-menu';
		typeIcon = 'close'
	}

	const handleClickOutside = (event) => {
		if (! btnRef.current.contains( event.target ) ) {
			setIsOpen(false);
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true );
		return () => document.removeEventListener('click', handleClickOutside, true );
	}, []);

	return (
		<div ref={btnRef} className="block lg:hidden menu-mobile-wrap">
			<button className="focus:outline-none ml-2" onClick={handleClick}>
				<Icon type={typeIcon} className="btn-menu-icon text-xl" />
			</button>
			<div className={`absolute menu-mobile ${classMenuMobile}`}>
				<Menu menuMobile={isOpen}/>
			</div>
		</div>
	);
}
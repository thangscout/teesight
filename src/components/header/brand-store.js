import React from "react";
import { Avatar } from "antd";

export default function BrandStore(props) {
	const classNameProps = props.className;
	return(
		<a href=" " className={`lg:inline-block hidden ${classNameProps}`}>
			<Avatar>
				L
			</Avatar>
		</a>
	);
}
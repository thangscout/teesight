import React from "react";
import LayoutHeader from "../../components/header/header";
import LayoutSidebar from "../../components/sidebar/sidebar";
import { Row, Col } from 'antd';

export default function Dashboard() {
	return (
		<>
			<LayoutHeader/>
			<Row>
				<Col xs={{span: 5}} lg={{span: 5}}>
					<div className="hidden lg:block">
						<LayoutSidebar/>
					</div>
				</Col>

			</Row>
		</>
	);
}
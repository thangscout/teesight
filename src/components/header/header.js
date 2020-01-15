import React, { useState } from "react";
import { Input, Avatar, Typography, Row, Col, Icon, Menu } from 'antd';

import BrandStore from "./brand-store";
import MenuMobile from "./menu-mobile";

const { Text } = Typography;
const { Search } = Input;
const { SubMenu } = Menu;

export default function LayoutHeader() {
	const [ current, setCurrent] = useState('');

	const handleClick = e => {
		setCurrent(e.key);
	};

	return (
		<Row id="header" className="items-center">
			<Col xs={{span: 3}} lg={{span: 5}} className="header-left">
				<BrandStore className="ml-4"/>
				<MenuMobile/>
			</Col>
			<Col xs={{span: 18}} lg={{span: 12}}>
				<div className="lg:pl-4 lg:pr-0 pr-4 pl-4">
					<Search
						placeholder="Search"
						onSearch={value => console.log(value)}
						className="header-search"
					/>
				</div>
			</Col>
			<Col xs={{span: 3}} lg={{span: 7}} >
				<div className="flex items-center lg:mr-4 mr-0">
					<div className="relative ml-auto hidden lg:inline-block">
						<Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" className="header-menu bg-hover rounded">
							<SubMenu
								title={
									<span className="submenu-title-wrapper">
										<Icon type="control" className="icon-before"/>
										Teesight Store
										<Icon type="down" className="ml-1 icon-arrow"/>
									</span>
								}
								className="focus:outline-none"
							>
								<Menu.Item key="sub1">
									<a href="/" target="_blank" rel="noopener noreferrer" className="font-medium">
										Submenu 01
									</a>
								</Menu.Item>
								<Menu.Item key="sub2">
									<a href="/" target="_blank" rel="noopener noreferrer" className="font-medium">
										Submenu 02
									</a>
								</Menu.Item>
								<Menu.Item key="sub3">
									<a href="/" target="_blank" rel="noopener noreferrer" className="font-medium">
										Submenu 03
									</a>
								</Menu.Item>
							</SubMenu>
      					</Menu>
					</div>
					<button className="inline-block pr-2 lg:pl-2 lg:pr-1 py-2 bg-hover rounded ml-auto lg:ml-0 focus:outline-none">
						<Avatar >
							A
						</Avatar>
						<Text style={{color: "#fff"}} className="ml-3 text-white hidden lg:inline-block">Account</Text>
					</button>
				</div>
			</Col>
		</Row>
	);
}
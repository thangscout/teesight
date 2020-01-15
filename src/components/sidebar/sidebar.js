import React, { useState } from "react";

import BrandStore from "../header/brand-store";

import { Menu, Icon } from "antd";
const { SubMenu } = Menu;

export default function LayoutHeader(props) {
	const [openKeys, setOpenKeys] = useState([""]);
	const rootSubmenuKeys = ["sub1", "sub2", "sub3", "sub4", "sub5", "sub6", "sub7", "sub8", "sub9"];

	const onOpenChange = state => {
		const latestOpenKey = state.find(key => openKeys.indexOf(key) === -1);
		if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
			setOpenKeys(state);
		} else {
			setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
		}
	};

	const sizeIcon = {fontSize: "22px"};
	const styleText = "font-medium text-color";
	const styleTextSub = "text-color font-medium";
	const flexMenu = {display: "flex"};

	return (
		<Menu
			mode="inline"
			openKeys={openKeys}
			onOpenChange={onOpenChange}
			className="sidebar"
			// defaultSelectedKeys={['sub1']}
			style={{paddingLeft: "0.75rem", paddingRight: "0.75rem", paddingTop: "0.75rem"}}
		>
			{props.menuMobile ? 
					( <Menu.Item key="sub10" className="items-center rounded" style={flexMenu}>
						<BrandStore/>
					</Menu.Item> )
				:
				''
			}
			{props.menuMobile ? 
				(<SubMenu
					key="sub11"
					title={
						<span>
							<Icon type="control" style={sizeIcon}/>
							<span className={styleText}>Tee Store</span>
						</span>
					}
				>
					<Menu.Item key="12">
						<a href="/" target="_blank" rel="noopener noreferrer" className="font-medium">
							Submenu 01
						</a>
					</Menu.Item>
					<Menu.Item key="13">
						<a href="/" target="_blank" rel="noopener noreferrer" className="font-medium">
							Submenu 02
						</a>
					</Menu.Item>
				</SubMenu> )
				: ''
			}
			<Menu.Item key="sub1" className="items-center rounded" style={flexMenu}>
				<Icon type="shop" style={sizeIcon}/>
				<span className={styleText}>Stores</span>
			</Menu.Item>
			<SubMenu
				key="sub2"
				title={
					<span>
						<Icon type="medicine-box" style={sizeIcon}/>
						<span className={styleText}>Product Base</span>
					</span>
				}
			>
				<Menu.Item key="1" className={styleTextSub}>Add new</Menu.Item>
				<Menu.Item key="2" className={styleTextSub}>Add Product Base</Menu.Item>
			</SubMenu>
			<SubMenu
				key="sub3"
				title={
					<span>
						<Icon type="inbox" style={{ fontSize: "25px"}}/>
						<span className={styleText}>Products</span>
					</span>
				}
			>
				<Menu.Item key="3" className={styleTextSub}>All products</Menu.Item>
				<Menu.Item key="4" className={styleTextSub}>Transfers</Menu.Item>
				<Menu.Item key="5" className={styleTextSub}>Inventory</Menu.Item>
				<Menu.Item key="6" className={styleTextSub}>Collections</Menu.Item>
				<Menu.Item key="7" className={styleTextSub}>Grift cards</Menu.Item>
			</SubMenu>
			<SubMenu
				key="sub4"
				title={
					<span>
						<Icon type="shopping" style={sizeIcon} />
						<span className={styleText}>Orders</span>
					</span>
				}
			>
				<Menu.Item key="9" className={styleTextSub}>All orders</Menu.Item>
				<Menu.Item key="10" className={styleTextSub}>Drafts</Menu.Item>
				<Menu.Item key="11" className={styleTextSub}>Abandoned checkouts</Menu.Item>
			</SubMenu>
			<Menu.Item key="sub5" className="items-center rounded" style={flexMenu}>
				<Icon type="appstore" style={sizeIcon}/>
				<span className={styleText}>Sellers</span>
			</Menu.Item>
			<Menu.Item key="sub6" className="items-center rounded" style={flexMenu}>
				<Icon type="switcher" style={sizeIcon} />
				<span className={styleText}>Suppliers</span>
			</Menu.Item>
			<Menu.Item key="sub7" className="items-center rounded" style={flexMenu}>
				<Icon type="database" style={sizeIcon} />
				<span className={styleText}>Billings</span>
			</Menu.Item>
			<Menu.Item key="sub8" className="items-center rounded" style={flexMenu}>
			<Icon type="safety" style={sizeIcon} />
				<span className={styleText}>Reports</span>
			</Menu.Item>
			<Menu.Item key="sub9" className="items-center rounded" style={flexMenu}>
				<Icon type="setting" style={sizeIcon} />
				<span className={styleText}>Tools</span>
			</Menu.Item>
		</Menu>
	);
}

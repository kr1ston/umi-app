import React, { useState, useEffect } from 'react';
import { Divider } from 'antd';
import './index.scss';
import { useToggle } from 'ahooks';
import { LeftOutlined, RightOutlined, AppstoreOutlined } from '@ant-design/icons';

interface Agent {
	name: string;
	icon: string;
}

export default function AgentHistory() {
	const [agentList ] = useState<Agent[]>([
		{
			name: '供电故障自诊断及故障预测',
			icon: 'agent1.png',
		},
	]);
	const [isShow, { toggle }] = useToggle(false);
	const [isContentVisible, setIsContentVisible] = useState(false);
	
	// 处理动画完成后显示内容
	useEffect(() => {
		let timer: NodeJS.Timeout;
		if (isShow) {
			timer = setTimeout(() => {
				setIsContentVisible(true);
			}, 300); // 与动画持续时间相同
		} else {
			setIsContentVisible(false);
		}
		
		return () => {
			clearTimeout(timer);
		};
	}, [isShow]);

	return <div className="h-full relative" style={{
		width: isShow ? '400px' : '0',
		transition: 'width 0.2s ease-in-out',
	}}>
		<div className="absolute top-1/2 -right-10 w-5 h-10 rounded bg-green-500 text-white cursor-pointer flex items-center justify-center z-10" onClick={()=>toggle()}>
			{
				isShow ? <LeftOutlined /> : <RightOutlined />
			}
		</div>
		<div className="h-full flex flex-col w-full overflow-hidden" style={{ opacity: isContentVisible ? 1 : 0 }}>
			<header className="h-6 flex items-center mt-4 ml-5">
				<AppstoreOutlined className="text-xl" />
				<p className="text-lg font-medium text-gray-800 ml-4">智能体市场</p>
			</header>
			<Divider />
			<main className="flex-1 px-2 overflow-y-auto">
				{
					agentList.map((agent) => (
						<div className="flex items-center rounded-md p-2 bg-green-100 cursor-pointer" key={agent.name}>
							<img className="w-6 h-6 mr-4" src={require(`@/assets/images/agent/${agent.icon}`)} alt={agent.name} />
							<p>{agent.name}</p>
						</div>
					))
				}
			</main>
		</div>
	</div>
}

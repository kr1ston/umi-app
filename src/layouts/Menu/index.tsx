import { IconFont } from '@/components';
import { HomeOutlined, MessageFilled } from '@ant-design/icons';
import { Link, useLocation } from 'umi';

export default function Menu() {
  const { pathname } = useLocation();
  const icons = [
    <HomeOutlined key="home" />,
    <IconFont key="icon-agent" type="icon-agent" />,
    <MessageFilled key="message" />,
  ];
  const menuList = [
    {
      name: '首页',
      key: 'home',
    },
    {
      name: '智能体',
      key: 'chat',
    },
    {
      name: '消息',
      key: 'message',
    },
  ];
  return (
    <>
      {menuList.map((item, index) => (
        <Link
          to={item.key}
          key={item.key}
          className={`hover:text-primary my-5 flex flex-col items-center`}
        >
          <div
            className={`flex items-center justify-center text-2xl w-10 h-10 text-gray-100 hover:text-white p-2 ${
              pathname.includes(item.key) ? 'bg-[rgba(255,255,255,0.2)] rounded-[50%]' : ''
            }`}
          >
            {icons[index]}
          </div>
          <p className="text-xs mt-3 text-white">{item.name}</p>
        </Link>
      ))}
    </>
  );
}

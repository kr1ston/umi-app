import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

export default function User() {
  return (
    <div className="my-4 cursor-pointer">
      <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
    </div>
  );
}
